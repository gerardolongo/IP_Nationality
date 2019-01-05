var request = require('request')

exports.initialize = function(ip) {
    var options = {
        url: 'http://ip-api.com/json/' + ip,
    };

    return new Promise(function(resolve, reject) {
		console.log(options.url)
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })
}
