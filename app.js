const { fromPath } = require('pdf2pic');
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

// Convert PDF to image
const options = {
  density: 100,
  saveFilename: 'converted',
  savePath: './images',
  format: 'png',
  width: 600,
  height: 600,
};
const filePath = './files/ok_sample.pdf';
const pageToConvertAsImage = 1;
const isBase64 = false;


fromPath(filePath, options).convert(pageToConvertAsImage, isBase64);

// storeAsImage(pageToConvertAsImage).then(() => {

//   storeAsImage(pageToConvertAsImage).then(() => {

//     // Calculate pixel difference

//     const blankReferenceImage = PNG.sync.read(fs.readFileSync('./images/blank.png'));
//     const convertedOkImage = PNG.sync.read(fs.readFileSync('./images/converted.1.png'));

//     const { width, height } = blankReferenceImage;

//     const diff = new PNG( {
//       width,
//       height,
//     } );

//     const numDiffPixelsWithBlank = pixelmatch(blankReferenceImage.data, convertedOkImage.data, diff.data, width, height, {
//       threshold: 0.1,
//     });

//     const numDiffPixelsWithOk = pixelmatch(blankReferenceImage.data, img2.data, diff.data, width, height, {
//       threshold: 0.1,
//     });

//     console.log('numDiffPixels with ok_sample:  ' + numDiffPixelsWithBlank);
//     console.log('numDiffPixels with blank:  ' + numDiffPixelsWithOk);

//     return numDiffPixels;

//   });
// });
