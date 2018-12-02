const prompt = require('prompt');
const figlet = require('figlet');



 prompt.start();
 prompt.get(['Please enter a word or phrase.'], function (err, result) {
   let input = result['Please enter a word or phrase.']

   figlet(input, function(err, data) {
     if (err) {
       console.log('Something went wrong...');
       console.dir(err);
       return;
     }
     console.log(data)
   });

 });
