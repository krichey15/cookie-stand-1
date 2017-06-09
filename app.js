'use strict';

//first I'm going to design the model objects of this assignment. The objects will be a reflection of Pat's Cookie Shops, which have 5 different locations in the seattle area. The 5 different stores are as follows: 1st and Pike, Seatac, Seattle Center, Capitol Hill, and Alki Beach.

var firstAndPikeLocation = {
  location : '1st and Pike',
  minCustomersPerHour : 23,
  maxCustomersPerHour : 65,
  averageCookiesSoldPerCust : 6.3,
  hoursOfOperation : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hourlyCookieSales: []
};

firstAndPikeLocation.generateRandomCookiesPerHour = function(min, max) {
  var randomCustPerHour = Math.floor(Math.random() * (max - min + 1)) + min;
  firstAndPikeLocation.hourlyCookieSales.push(randomCustPerHour * firstAndPikeLocation.averageCookiesSoldPerCust);
  return firstAndPikeLocation.hourlyCookieSales;
};

firstAndPikeLocation.generateRandomCookiesPerHour(firstAndPikeLocation.minCustomersPerHour, firstAndPikeLocation.maxCustomersPerHour);

console.log(firstAndPikeLocation.hourlyCookieSales);

var seatacLocation = {
  location : 'Seatac International Airport',
  minCustomersPerHour : 3,
  maxCustomersPerHour : 24,
  averageCookiesSoldPerCust : 1.2
};

var seattleCenterLocation = {
  location : 'Seattle Center',
  minCustomersPerHour : 11,
  maxCustomersPerHour : 38,
  averageCookiesSoldPerCust : 3.7
};

var capitolHillLocation = {
  location : 'Capitol Hill',
  minCustomersPerHour : 20,
  maxCustomersPerHour : 38,
  averageCookiesSoldPerCust : 2.3
};

var alkiLocation = {
  location : 'Alki Beach',
  minCustomersPerHour : 2,
  maxCustomersPerHour : 16,
  averageCookiesSoldPerCust : 4.6
};
