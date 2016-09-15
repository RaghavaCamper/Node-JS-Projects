var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')

  .option('location', {
    alias: 'l',
    demand: false,
    describe: 'Location to fetch the weather for',
    type: 'string'
  })
  .help('help')
  .argv;



if(typeof argv.l === 'string' && argv.l.length > 0)
{
    console.log('location was provided');
    weather(argv.l, function(currentWeather){
     console.log(currentWeather);
    });

}
else
{
    console.log('location was not provided');
    location(function(location){
   
   if(location)
   {
     weather(location.city,function(currentWeather){
   
    console.log(currentWeather);

   });
 }

   else
   {
    console.log('unable to guess the location');
   }

    });
}