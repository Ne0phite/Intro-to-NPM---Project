const prompt = require('prompt');
const figlet = require('figlet');



prompt.start();
prompt.get(['Please enter a message.', 'Please choose a font.'], function (err, result) {
  let message = result['Please enter a message.'];
  let font = result['Please choose a font.'];

      figlet.text(message, {
        font: font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
      }, function(err, data) {
        if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
        }
        console.log(data);
      });
  });
