const cheerio = require('cheerio');

const fs = require('fs');
const { readdir } = require('fs/promises');
const path = require('path');
const axios = require('axios');

const cleanPurchaseUnit = str =>
  str.replace('\n', ' ')
    .split(' ')
    .filter(s => s.length)
    .join(' ');

const scrapeMealsPage = (fileName) => {
  const $ = cheerio.load(fs.readFileSync(fileName));
  const categories = $('.product-tiles');
  const result = [];

  [...categories].forEach(category => {
    const categoryName = $(category).find('h2').text();
    // console.log(categoryName);
    const subCategories = $(category).find('.section-page');
    [...subCategories].forEach(subCategory => {
      const subCategoryName = $(subCategory).find('h3').text();
      // console.log('-' + subCategoryName);
      const products = $(subCategory).find('.grid-item');
      // console.log(products.length);
      [...products].forEach(product => {
        let pricePer = $(product).find('.price-per').text().trim() + ' / ' + $(product).find('.per-unit').text();
        pricePer = pricePer === ' / ' ? null : pricePer;
        const productUrl = $(product).find('.js-product-link').attr('href');
        const itemData = {
          productUrl,
          categoryName,
          subCategoryName,
          title: $(product).find('.product-tile__product-name').text(),
          prepTime: $(product).find('.product-tile__producer-name').text(),
          // photoPath: $(product).find('.product-tile__product-photo').attr('src'),
          photoPath: $(product).find('.js-product-photo-link').attr('data-src'),
          price: $(product).find('.split-price__dollars').text() + '.' + $(product).find('.split-price__cents').text(),
          pricePer,
          purchaseUnit: cleanPurchaseUnit($(product).find('.product-tile__purchase-unit').text()),
        };
        // console.log(JSON.stringify(itemData));
        // console.log();
        result.push(itemData);
      });
    });
  });
  return result;
};

const downloadIndividualPage = (url) => {
  const folder = './meal-kits-html/meal-kit-html/';
  const filename = url.split('/').slice(-1)[0];
  return axios.get(url)
    .then((res) => {
      fs.writeFileSync(folder + filename, res.data);
    });
};

const delay = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
}

const downloadAllIndividualPages = async (urls) => {
  for (const url of urls) {
    console.log('Downloading', url);
    downloadIndividualPage(url);
    console.log('Download complete.');
    await delay(Math.floor(Math.random() * 8) + 8);
  }
}

// This is the command to actually download all the files. It take ~1 hour to run:
// downloadAllIndividualPages(meals.map(meal => meal.productUrl));

/* const filename = path.join(__dirname, '..', 'stored-data', 'groceries', 'goodeggs.json');
fs.writeFile(filename, JSON.stringify(goodEggs), (err) => {
  if (err) throw err;
  console.log(goodEggs.length + ' items saved.');
});
 */

const scrapeIndividualMealPage = (filename) => {
  // const filename = './meal-kits-html/meal-kit-html/Baked Feta with Cherry Tomatoes & Orzo - Good Eggs Meal Kits - SF Bay _ Good Eggs.html';
  const $ = cheerio.load(fs.readFileSync(filename));

  const quantityDetails = $('.quantity-details').text();

  const productDetailsElement = $('.product-details-description');
  const paragraphs = $(productDetailsElement).find('p');
  const productDetails = [];
  [...paragraphs].forEach(p => {
    // some files are made of <span> and <strong> elements, while others are <p>'s and <b>'s.
    // <p>'s have to be handled differently than the other three.
    let element = $(p).find('span,strong,b');
    let text = element.text();
    if (!text.trim().length) {
      element = $(p);
      text = element.text();
    }
    text = text.replaceAll(/\s+/g, ' ');
    let name = element[0]?.name;
    name = { 'p': 'span', 'b': 'strong', 'span': 'span', 'strong': 'strong' }[name];
    if (!name || text.indexOf('Contains:') !== -1 || !text.trim().length) {
      return;
    }
    productDetails.push({ text, elementType: name });
  });

  const imageUrl = $('.photo').attr('src');

  return { quantityDetails, productDetails, imageUrl, filename };
};

const scrapeAllIndividualMealPages = () => {
  return new Promise((resolve, reject) => {
    const folder = 'meal-kits-html/meal-kit-html/';
    const mealPages = {};
    readdir(folder)
      .then(files => {
        files.forEach(file => {
          // if (file !== '603891c3130159000e4df3fd') return;
          process.stdout.write(file);
          const data = scrapeIndividualMealPage(folder + file);
          mealPages[file] = data;
        });
        resolve(mealPages);
      }
      );
  });
};

const createMealPlansJson = () => {
  // Generates the final json file, assuming all html files are downloaded.
  const meals = scrapeMealsPage('./meal-kits-html/mealkits.html');
  scrapeAllIndividualMealPages()
    .then(pages => {
      console.log('------------------------------');
      mealMap = {};
      for (let i = 0; i < meals.length; i++) {
        const id = meals[i].productUrl.split('/').slice(-1)[0];
        mealMap[id] = i;
      }
      for (page in pages) {
        meals[mealMap[page]].details = pages[page];
      }
      detailedMeals = meals.filter(m => m.details);
      fs.writeFileSync('../stored-data/meals/meals.json', JSON.stringify(detailedMeals));
    });
};

createMealPlansJson();

