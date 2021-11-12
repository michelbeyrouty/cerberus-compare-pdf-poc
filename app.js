const { calcualtePixelDifference } = require('./core/calcualtePixelDifference');
const { convertPdfToImage } = require('./core/convertPdfToImage');


(async function main(){

  await convertPdfToImage('./files/ok_sample.pdf', 'converted_ok_image');
  await convertPdfToImage('./files/blank.pdf', 'converted_blank_image');

  calcualtePixelDifference('./images/blank.png', './images/converted_ok_image.1.png');
  calcualtePixelDifference('./images/blank.png', './images/converted_blank_image.1.png');
})();




