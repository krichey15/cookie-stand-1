'use strict';

//first I'm going to design the model objects of this assignment. The objects will be a reflection of Pat's Cookie Shops, which have 5 different locations in the seattle area. The 5 different stores are as follows: 1st and Pike, Seatac, Seattle Center, Capitol Hill, and Alki Beach.

var firstAndPikeLocation = {
  location : '1st and Pike',
  minCustomersPerHour : 23,
  maxCustomersPerHour : 65,
  averageCookiesSoldPerCust : 6.3,
  hoursOfOperation : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hourlyCookieSales: [0]
};

//below is a method I've defined for my 1st and Pike location object that's sole purpose is to generate and return TWO NUMBERS: The total amount of cookies sold overall AND the total amount of cookies sold in the past hour. Total cookies sold is stored in the first [0] index of the hourly cookie sales array while the amount of cookies sold in the last hour is stored in the second [1] index of the array.

firstAndPikeLocation.generateRandomCookiesPerHour = function(min, max) {
  var randomCustPerHour = Math.floor(Math.random() * (max - min + 1)) + min;
  firstAndPikeLocation.hourlyCookieSales[1] = randomCustPerHour * Math.floor(firstAndPikeLocation.averageCookiesSoldPerCust);
  firstAndPikeLocation.hourlyCookieSales[0] = firstAndPikeLocation.hourlyCookieSales[0] + firstAndPikeLocation.hourlyCookieSales[1];
  return firstAndPikeLocation.hourlyCookieSales;
};

//below is a for loop I've created that loops through the hours of operation starting at 6am and displays both how many total cookies the store has sold AND how many cookies were sold in the last hour. It also now prints html content to my sales.html page. It prints the same statement that I've told the console.log to by adding an li to my ul for every loop through the code.

for (var i = 0; i < 15; i++) {
  firstAndPikeLocation.generateRandomCookiesPerHour(firstAndPikeLocation.minCustomersPerHour, firstAndPikeLocation.maxCustomersPerHour);
  console.log('In the ' + firstAndPikeLocation.location + ' location, at ' + firstAndPikeLocation.hoursOfOperation[i] + ', total amount of cookies sold is ' + firstAndPikeLocation.hourlyCookieSales[0] + '. Total cookies sold this hour were ' + firstAndPikeLocation.hourlyCookieSales[1] + '.');

  var firstAndPikeUlElement = document.getElementById('first-and-pike');

  var listItemElement = document.createElement('li');

  listItemElement.textContent = 'In the ' + firstAndPikeLocation.location + ' location, at ' + firstAndPikeLocation.hoursOfOperation[i] + ', total amount of cookies sold is ' + firstAndPikeLocation.hourlyCookieSales[0] + '. Total cookies sold this hour were ' + firstAndPikeLocation.hourlyCookieSales[1] + '.';

  firstAndPikeUlElement.appendChild(listItemElement);

}

var seatacLocation = {
  location : 'Seatac International Airport',
  minCustomersPerHour : 3,
  maxCustomersPerHour : 24,
  averageCookiesSoldPerCust : 1.2,
  hoursOfOperation : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hourlyCookieSales: [0]
};

seatacLocation.generateRandomCookiesPerHour = function(min, max) {
  var randomCustPerHour = Math.floor(Math.random() * (max - min + 1)) + min;
  seatacLocation.hourlyCookieSales[1] = randomCustPerHour * Math.floor(seatacLocation.averageCookiesSoldPerCust);
  seatacLocation.hourlyCookieSales[0] = seatacLocation.hourlyCookieSales[0] + seatacLocation.hourlyCookieSales[1];
  return seatacLocation.hourlyCookieSales;
};

for (var i = 0; i < 15; i++) {
  seatacLocation.generateRandomCookiesPerHour(seatacLocation.minCustomersPerHour, seatacLocation.maxCustomersPerHour);
  console.log('In the ' + seatacLocation.location + ' location, at ' + seatacLocation.hoursOfOperation[i] + ', total amount of cookies sold is ' + seatacLocation.hourlyCookieSales[0] + '. Total cookies sold this hour were ' + seatacLocation.hourlyCookieSales[1] + '.');

  var seatacUlElement = document.getElementById('seatac');

  var listItemElement = document.createElement('li');

  listItemElement.textContent = 'In the ' + seatacLocation.location + ' location, at ' + seatacLocation.hoursOfOperation[i] + ', total amount of cookies sold is ' + seatacLocation.hourlyCookieSales[0] + '. Total cookies sold this hour were ' + seatacLocation.hourlyCookieSales[1] + '.';

  seatacUlElement.appendChild(listItemElement);

}

var seattleCenterLocation = {
  location : 'Seattle Center',
  minCustomersPerHour : 11,
  maxCustomersPerHour : 38,
  averageCookiesSoldPerCust : 3.7,
  hoursOfOperation : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hourlyCookieSales: [0]
};

var capitolHillLocation = {
  location : 'Capitol Hill',
  minCustomersPerHour : 20,
  maxCustomersPerHour : 38,
  averageCookiesSoldPerCust : 2.3,
  hoursOfOperation : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hourlyCookieSales: [0]
};

var alkiLocation = {
  location : 'Alki Beach',
  minCustomersPerHour : 2,
  maxCustomersPerHour : 16,
  averageCookiesSoldPerCust : 4.6,
  hoursOfOperation : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hourlyCookieSales: [0]
};
