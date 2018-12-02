const prompt = require('prompt');
const figlet = require('figlet');

var schema = {
   properties: {
     text: {
       description: 'Please enter a message',
       message: 'Please enter a valid message',
       required: true
     },
     font: {
       required: false
     }
   }
 };


prompt.start();
prompt.get(schema, function (err, result) {
      figlet.text(result.text, {
        font: result.font,
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
