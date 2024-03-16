var request = require('request');

function sendEmailUsingMailGun(domain,api_key,in_from,in_to,in_subject,in_text) {
  var formData = {
      // Pass a simple key-value pair 
      from: in_from,
      to:in_to,
      subject:in_subject,
      text:in_text
    };

    var options = {
        url: 'https://api.mailgun.net/v3/'+domain+'/messages',
        method:'POST',
        auth: {
            'user': 'api',
            'pass': api_key
        },
        formData: formData
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }else{
          console.log(body);
        }
        return body;
    }

    request(options, callback);
   
}

module.exports = sendEmailUsingMailGun; // let me be required