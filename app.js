'use strict';

function Store(location, minCustomersPerHour, maxCustomersPerHour, averageCookiesSoldPerCust, hoursOfOperation, hourlyCookieSales) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesSoldPerCust = averageCookiesSoldPerCust;
  this.hoursOfOperation = hoursOfOperation;
  this.hourlyCookieSales = hourlyCookieSales;
}

var firstAndPikeLocation = new Store('1st and Pike', 23, 65, 6.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], [0]);

var seatacLocation = new Store('Seatac International Airport', 3, 24, 1.2, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], [0]);

var seattleCenterLocation = new Store('Seattle Center', 11, 38, 3.7, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], [0]);

var capitolHillLocation = new Store('Capitol Hill', 20, 38, 2.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], [0]);

var alkiLocation = new Store('Alki Beach', 2, 16, 4.6, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'], [0]);

var storesList = [firstAndPikeLocation, seatacLocation, seattleCenterLocation, capitolHillLocation, alkiLocation];

var generateRandomCookiesPerHour = function(store) {
  var randomCustNum;
  var generateRandomCustomersPerHour = function(min, max) {
    randomCustNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomCustNum;
  };
  store.hourlyCookieSales[1] = generateRandomCustomersPerHour(store.minCustomersPerHour, store.maxCustomersPerHour) * Math.floor(store.averageCookiesSoldPerCust);
  store.hourlyCookieSales[0] = store.hourlyCookieSales[0] + store.hourlyCookieSales[1];
  return store.hourlyCookieSales;
};

var theadEl = document.getElementById('hours-of-operation');
var trTheadEl = document.createElement('tr');
theadEl.appendChild(trTheadEl);

var printTableHeadingHours = function(store) {
  for (var i = 0; i < store.hoursOfOperation.length; i++) {
    var tdHeadEl = document.createElement('td');
    tdHeadEl.textContent = store.hoursOfOperation[i];
    trTheadEl.appendChild(tdHeadEl);
  }
};

printTableHeadingHours(firstAndPikeLocation);

var tbodyEl = document.getElementById('store-information-table');

var printCookieSales = function(store) {
  for (var i = 0; i < store.hoursOfOperation.length; i++) {
    generateRandomCookiesPerHour(store);
    console.log('In the ' + store.location + ' location, at ' + store.hoursOfOperation[i] + ', total amount of cookies sold is ' + store.hourlyCookieSales[0] + '. Total cookies sold this hour were ' + store.hourlyCookieSales[1] + '.');

    var storeInfoRow = document.createElement('td');
    storeInfoRow.textContent = store.hourlyCookieSales[1];
    trEl.appendChild(storeInfoRow);
  }
};

for (var i = 0; i < storesList.length; i++) {
  var trEl = document.createElement('tr');
  printCookieSales(storesList[i]);
  tbodyEl.appendChild(trEl);
  if (i === 5) {
    var trEl = document.createElement('tr');
    var storeInfoRow = document.createElement('td');
    storeInfoRow.textContent = store.hourlyCookieSales[0];
    tbodyEl.appendChild(trEl);
  }
}
