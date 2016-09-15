var request = require('request');



module.exports = function(location,callback)
{
 var encodedLocation = encodeURIComponent(location);
 var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&appid=ab51e7adc508fcc9353c360b8b05e9de';
 encodeURIComponent(location);
 if(!location)
 {
    return callback('no location is provided');
 }
	request({
	url: url,
	json: true,
}, function(error, response, body){
    if(error)
    {
    	callback('unable to fetch the weather');
    }
    else
    {
    	callback(' Its ' + body.main.temp + ' in ' + encodedLocation);
    }


});
}