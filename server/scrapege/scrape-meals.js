const cheerio = require('cheerio');

const fs = require('fs');
const path = require('path');

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
        const itemData = {
          categoryName,
          subCategoryName,
          title: $(product).find('.product-tile__product-name').text(),
          prepTime : $(product).find('.product-tile__producer-name').text(),
          // photoPath: $(product).find('.product-tile__product-photo').attr('src'),
          photoPath: $(product).find('.js-product-photo-link').attr('data-src'),
          price: $(product).find('.split-price__dollars').text() + '.' + $(product).find('.split-price__cents').text(),
          pricePer,
          purchaseUnit: cleanPurchaseUnit($(product).find('.product-tile__purchase-unit').text()),
        }
        // console.log(JSON.stringify(itemData));
        // console.log();
        result.push(itemData);
      });
    });
  });
  return result;
}

// const meals = scrapeMealsPage('./meal-kits-html/mealkits.html');

// console.log(meals.slice(0, 20));

/* const filename = path.join(__dirname, '..', 'stored-data', 'groceries', 'goodeggs.json');
fs.writeFile(filename, JSON.stringify(goodEggs), (err) => {
  if (err) throw err;
  console.log(goodEggs.length + ' items saved.');
});
 */

const scrapeIndividualMealPage = () => {
  const filename = './meal-kits-html/meal-kit-html/Baked Feta with Cherry Tomatoes & Orzo - Good Eggs Meal Kits - SF Bay _ Good Eggs.html';
  const $ = cheerio.load(fs.readFileSync(filename));

  const quantityDetails = $('.quantity-details').text();

  const productDetailsElement = $('.product-details-description');
  const paragraphs = $(productDetailsElement).find('p');
  const productDetails = [];
  [...paragraphs].forEach(p => {
    const element = $(p).find('span,strong');
    let text = element.text();
    text = text.replaceAll(/\s+/g, ' ');
    const name = element[0]?.name;
    if (!name || text.indexOf('Contains:') !== -1) {
      return;
    }
    productDetails.push({ text, elementType: name});
  });

  const imageUrl = $('.photo').attr('src');

  return { quantityDetails, productDetails, imageUrl };
};

console.log(scrapeIndividualMealPage());
