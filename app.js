'use strict';

function Store(location, minCustomersPerHour, maxCustomersPerHour, averageCookiesSoldPerCust, hoursOfOperation, hourlyCookieSales) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesSoldPerCust = averageCookiesSoldPerCust;
  this.hoursOfOperation = hoursOfOperation;
  this.hourlyCookieSales = hourlyCookieSales;
}

Store.prototype.createStoresList = function() {
  storesList.push(store);
};

var firstAndPikeLocation = new Store('1st and Pike', 23, 65, 6.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',], []);

var seatacLocation = new Store('Seatac International Airport', 3, 24, 1.2, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',], []);

var seattleCenterLocation = new Store('Seattle Center', 11, 38, 3.7, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',], []);

var capitolHillLocation = new Store('Capitol Hill', 20, 38, 2.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',], []);

var alkiLocation = new Store('Alki Beach', 2, 16, 4.6, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',], []);

var storesList = [firstAndPikeLocation, seatacLocation, seattleCenterLocation, capitolHillLocation, alkiLocation];

var tbodyEl = document.getElementById('store-information-table');
var theadEl = document.getElementById('hours-of-operation');
var tFootEl = document.getElementById('totals');
var tFootTrEl = document.createElement('tr');
tFootEl.appendChild(tFootTrEl);

var getOneStoreCookiesPerHour = function(store) {
  var randomCustNum;
  var generateRandomCustomersPerHour = function(min, max) {
    randomCustNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomCustNum;
  };
  for(var i = 0; i < store.hoursOfOperation.length; i++) {
    store.hourlyCookieSales.push(generateRandomCustomersPerHour(store.minCustomersPerHour, store.maxCustomersPerHour) * Math.floor(store.averageCookiesSoldPerCust));
  }
};

var getAllStoresCookiesPerHour = function() {
  for(var i = 0; i < storesList.length; i++) {
    getOneStoreCookiesPerHour(storesList[i]);
    console.log(storesList[i].location + ' has sold ' + storesList[i].hourlyCookieSales);
  }
};

var hourlyStoreData = [];
var hourArray = [];
var sum;

var getHourlyCookiesData = function(store) {
  getAllStoresCookiesPerHour();
  for(var k = 0; k < store.hoursOfOperation.length; k++) {
    for(var j = 0; j < storesList.length; j++) {
      hourlyStoreData.push(storesList[j].hourlyCookieSales[k]);
    }
    sum = hourlyStoreData.reduce( function(total, amount){
      return total + amount;
    });
    hourArray.push(sum);
    console.log(sum);
  }
};

getHourlyCookiesData(firstAndPikeLocation);

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

var sumStore;
var sumStoreTotal;
var storeHourlyCookieTotalsList = [];

printTableHeadingHours(firstAndPikeLocation);

var printTableBodyInfo = function() {
  for (var i = 0; i < storesList.length; i++) {
    var trEl = document.createElement('tr');

    var storeNameTable = document.createElement('td');
    storeNameTable.textContent = storesList[i].location;
    trEl.appendChild(storeNameTable);

    for(var j = 0; j < storesList[i].hoursOfOperation.length; j++) {

      var storeInfoRow = document.createElement('td');
      storeInfoRow.textContent = storesList[i].hourlyCookieSales[j];
      trEl.appendChild(storeInfoRow);

    }

    sumStore = storesList[i].hourlyCookieSales.reduce( function(total, amount){
      return total + amount;
    });
    storeHourlyCookieTotalsList.push(sumStore);
    var totalCookiesSoldSlot = document.createElement('td');
    totalCookiesSoldSlot.textContent = sumStore;
    trEl.appendChild(totalCookiesSoldSlot);
    tbodyEl.appendChild(trEl);
  }

};

printTableBodyInfo();

var printFooterInfo = function(){
  var hourlyTotalRow = document.createElement('td');
  hourlyTotalRow.textContent = 'Totals Per Hour';
  tFootTrEl.appendChild(hourlyTotalRow);

  for(var i = 0; i < hourArray.length; i++) {
    var totalsForHour = document.createElement('td');
    totalsForHour.textContent = hourArray[i];
    tFootTrEl.appendChild(totalsForHour);
  }

  var totalsForAllStores = document.createElement('td');
  sumStoreTotal = storeHourlyCookieTotalsList.reduce( function(total, amount){
    return total + amount;
  });
  totalsForAllStores.textContent = sumStoreTotal;
  tFootTrEl.appendChild(totalsForAllStores);

};

printFooterInfo();
console.log(sumStore);
console.log(storeHourlyCookieTotalsList);
