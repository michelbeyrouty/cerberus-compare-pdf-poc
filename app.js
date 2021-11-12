const { calcualtePixelDifference } = require('./core/calcualtePixelDifference');
const { convertPdfToImage } = require('./core/convertPdfToImage');


(async function main(){

  await convertPdfToImage('./files/ok_sample.pdf', 'convertedOk');
  await convertPdfToImage('./files/blank.pdf', 'convertedBlank');

  calcualtePixelDifference('./images/blank.png', './images/convertedOk.1.png');
  calcualtePixelDifference('./images/blank.png', './images/convertedBlank.1.png');
})();




