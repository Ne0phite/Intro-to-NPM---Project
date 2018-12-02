const prompt = require('prompt');
const figlet = require('figlet');
const prettyjson = require('prettyjson');
const chalk = require('chalk')

let fontColorArr = [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey', 'blackBright', 'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright', 'whiteBright' ];
let bgColorArr = [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'blackBright', 'redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright', 'whiteBright' ];
// let bgColorArr = [ `bgBlack`, `bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, `bgMagenta`, `bgCyan`, `bgWhite`, `bgBlackBright`, `bgRedBright`, `bgGreenBright`, `bgYellowBright`, `bgBlueBright`, `bgMagentaBright`, `bgCyanBright`, `bgWhiteBright`];
let fontArr = figlet.fontsSync();
let fontArr2 = fontArr.map(el => el.toLowerCase());
let prettyFonts = prettyjson.render(fontArr, {
  stringColor: 'magenta',
  dashColor: 'green'
});
let prettyFontColors = prettyjson.render(fontColorArr, {
  stringColor: 'cyan',
  dashColor: 'red'
});
let prettybgColors = prettyjson.render(bgColorArr, {
  stringColor: 'yellow',
  dashColor: 'blue'
});

var schema = {
   properties: {
     myText: {
       description: 'Please enter a message',
       message: 'Please enter a valid message',
       required: true
     },
     font: {
       description: 'Please enter a font name: (Standard)',
       message: 'Please enter a valid font from the above list (case insensitive)',
       conform: function (font) {
          if(fontArr.includes(font) || fontArr2.includes(font)){
            return true;
          } else {
            console.log(prettyFonts);
          }
        },
       required: false
     },
     fontColor: {
       description: 'Please enter a text color: (green)',
       message: 'Please enter a valid color from the above list (case sensitive)',
       conform: function (fontColor) {
          if(fontColorArr.includes(fontColor)){
            return true;
          } else {
            console.log(prettyFontColors);
          }
        },
       required: false
     },
     bgColor: {
       description: 'Please enter a background color: (red)',
       message: 'Please enter a valid background color from the above list (case sensitive)',
       conform: function (bgColor) {
          if(bgColorArr.includes(bgColor)){
            return true;
          } else {
            console.log(prettybgColors);
          }
        },
       required: false
     }
   }
 };

prompt.start();
prompt.get(schema, function (err, result) {
      figlet.text(result.myText, {
        font: result.font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
      }, function(err, data) {
        if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
        }
        // if(result.fontColor){
        //   console.log(chalk[result.fontColor].bgRed(data));
        // } else {
        //   console.log(chalk.green.bgRed(data));
        // }
        if(result.fontColor && result.bgColor){
          let bgC = 'bg' + result.bgColor[0].toUpperCase() + result.bgColor.slice(1)
          console.log(bgC);
          console.log(chalk[result.fontColor][bgC](data));
        } else if(result.fontColor) {
          console.log(chalk[result.fontColor].bgRed(data));
        } else if(result.bgColor){
          let bgC = 'bg' + result.bgColor[0].toUpperCase() + result.bgColor.slice(1)
          console.log(chalk.green[bgC](data));
        } else {
          console.log(chalk.green.bgRed(data));
        }
      });
  });
