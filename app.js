const Jimp = require("jimp");

const quote = "Your very long quote goes here...";
const imageWidth = 1080;
const imageHeight = 1080;
const textHeight = 200; // fixed height for the text
const textMaxWidth = 900;

new Jimp(imageWidth, imageHeight, "#FF7F50", (err, image) => {
  // salmon orange color
  if (err) {
    console.log(err);
  } else {
    Jimp.loadFont(Jimp.FONT_SANS_64_WHITE)
      .then((font) => {
        const textX = imageWidth / 2 - Jimp.measureText(font, quote) / 2; // calculate the X position for the quote text
        const textY = imageHeight / 2 - textHeight / 2; // calculate the Y position for the quote text
        image.print(font, textX, textY, quote, textMaxWidth); // add the text to the image using the loaded font
        image.write("quote.png");
        console.log("Image created!");
      })
      .catch((err) => console.log(err));
  }
});
