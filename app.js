'use strict';

//READ ME: consider changing the functionality of the generateRandomCookiesPerHour function to store the values in long arrays that will hold each store's hourlyCookieSales, not just a tiny array with 2 indeces. This will allow you to use your footer function to easily grab the hourlyCookieSales data for each store to calculate the hourly rate across all stores (which is what you need to complete your table).

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

//below is a function that creates my table header information

var theadEl = document.getElementById('hours-of-operation');

var printTableHeadingHours = function(store) {

  var hoursTd = document.createElement('td');
  hoursTd.textContent = '';
  theadEl.appendChild(hoursTd);
  for (var i = 0; i < store.hoursOfOperation.length; i++) {
    var tdHeadEl = document.createElement('td');
    tdHeadEl.textContent = store.hoursOfOperation[i];
    theadEl.appendChild(tdHeadEl);
  }
  var totalPerLocation = document.createElement('td');
  totalPerLocation.textContent = 'Total for Location';
  theadEl.appendChild(totalPerLocation);
};

printTableHeadingHours(firstAndPikeLocation);

//below is the code for getting the table body information rendered.

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

  var storeNameTable = document.createElement('td');
  storeNameTable.textContent = storesList[i].location;
  trEl.appendChild(storeNameTable);

  printCookieSales(storesList[i]);

  var totalCookiesSoldSlot = document.createElement('td');
  totalCookiesSoldSlot.textContent = storesList[i].hourlyCookieSales[0];
  trEl.appendChild(totalCookiesSoldSlot);
  tbodyEl.appendChild(trEl);
}

//below is unfinished code for the footer function, which will render the footer information of the table.

var tFootEl = document.getElementById('totals');
var tFootTrEl = document.createElement('tr');
tFootEl.appendChild(tFootTrEl);

var createFooter = function(store){
  var hourlyTotalRow = document.createElement('td');
  hourlyTotalRow.textContent = 'Totals Per Hour';
  tFootTrEl.appendChild(hourlyTotalRow);

  //somehow create a process in which the stored values of the hourlyCookieSales properties for each separate store are added together per hour.

};
