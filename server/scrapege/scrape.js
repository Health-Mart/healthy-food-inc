const cheerio = require('cheerio');

const fs = require('fs');
const path = require('path');

const cleanPurchaseUnit = str =>
  str.replace('\n', ' ')
    .split(' ')
    .filter(s => s.length)
    .join(' ');

const matchFilename = name => {
  name = name.split('/').slice(-1)[0];
  const obj = {
    'alcohol.html': 'Alcohol',
    'dairy.html': 'Dairy',
    'drinks.html': 'Drinks',
    'health&home.html': 'Health & Home',
    'meatAndFish.html': 'Meat & Fish',
    'pantry.html': 'Pantry',
    'prepared.html': 'Prepared',
    'produce.html': 'Produce',
    'snacks.html': 'Snacks',
  };

  return obj[name];
}

const scrapeGoodEggsPage = (fileName) => {
  const $ = cheerio.load(fs.readFileSync(fileName));
  const categories = $('.product-tiles');
  const result = [];

  const mainCategory = matchFilename(fileName);
  console.log(fileName, mainCategory);

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
          mainCategory,
          categoryName,
          subCategoryName,
          title: $(product).find('.product-tile__product-name').text(),
          producer: $(product).find('.product-tile__producer-name').text(),
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

const htmlFiles = [
  'alcohol.html',
  'dairy.html',
  'drinks.html',
  'health&home.html',
  'meatAndFish.html',
  'pantry.html',
  'prepared.html',
  'produce.html',
  'snacks.html',
];

const scrapeAllGoodEggsPages = () => {
  const result = [];
  for (const filename of htmlFiles) {
    console.log('scraping ' + filename);
    const data = scrapeGoodEggsPage('./html-files/' + filename);
    data.forEach(x => result.push(x));
  }
  return result;
}

const goodEggs = scrapeAllGoodEggsPages();

const filename = path.join(__dirname, '..', 'stored-data', 'groceries', 'goodeggs.json');
fs.writeFile(filename, JSON.stringify(goodEggs), (err) => {
  if (err) throw err;
  console.log(goodEggs.length + ' items saved.');
});
