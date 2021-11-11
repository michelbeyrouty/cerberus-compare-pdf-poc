const { fromPath } = require('pdf2pic');
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const options = {
  density: 100,
  saveFilename: 'converted',
  savePath: './images',
  format: 'png',
  width: 600,
  height: 600,
};
const storeAsImage = fromPath('./files/blank.pdf', options);
const pageToConvertAsImage = 1;

storeAsImage(pageToConvertAsImage).then((resolve) => {
  console.log('Page 1 is now converted as image');

  const img1 = PNG.sync.read(fs.readFileSync('./images/blank.png'));
  const img2 = PNG.sync.read(fs.readFileSync('./images/converted.png'));
  const {
    width, height, 
  } = img1;
  const diff = new PNG( {
    width,
    height, 
  } );

  pixelmatch(img1.data, img2.data, diff.data, width, height, {
    threshold: 0.1,
  });

  fs.writeFileSync('diff.png', PNG.sync.write(diff));

  return resolve;
});





