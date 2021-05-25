const cheerio = require('cheerio');

const fs = require('fs');

const cleanPurchaseUnit = str =>
str.replace('\n', ' ')
  .split(' ')
  .filter(s => s.length)
  .join(' ');

const scrapeGoodEggsPage = (fileName) => {
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
        const pricePer = $(product).find('.price-per').text().trim() + ' / ' + $(product).find('.per-unit').text();
        const pricePer = pricePer === ' / ' ? null : pricePer;
        const itemData = {
          categoryName,
          subCategoryName,
          title: $(product).find('.product-tile__product-name').text(),
          producer: $(product).find('.product-tile__producer-name').text(),
          photoPath: $(product).find('.product-tile__product-photo').attr('src'),
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

console.log(scrapeGoodEggsPage('./produce.html'));
