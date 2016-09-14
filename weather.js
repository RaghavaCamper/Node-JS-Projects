var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Bengaluru,India&appid=ab51e7adc508fcc9353c360b8b05e9de';


module.exports = function(callback)
{

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
    	//console.log(JSON.stringify(body, null, 4));
    	callback(' Its ' + body.main.temp + ' in ' + 'Bangalore');
    }


});
}
