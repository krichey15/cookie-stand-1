'use strict';

function Store(location, minCustomersPerHour, maxCustomersPerHour, averageCookiesSoldPerCust, hoursOfOperation, hourlyCookieSales, hourlyCookieTossers, averageHourlyCustomers) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesSoldPerCust = averageCookiesSoldPerCust;
  this.hoursOfOperation = hoursOfOperation;
  this.hourlyCookieSales = hourlyCookieSales;
  this.hourlyCookieTossers = hourlyCookieTossers;
  this.averageHourlyCustomers = averageHourlyCustomers;
}

Store.prototype.createStoresList = function() {
  storesList.push(store);
};

var firstAndPikeLocation = new Store('1st and Pike', 23, 65, 6.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',], [], [], []);

var seatacLocation = new Store('Seatac International Airport', 3, 24, 1.2, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',], [], [], []);

var seattleCenterLocation = new Store('Seattle Center', 11, 38, 3.7, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',], [], [], []);

var capitolHillLocation = new Store('Capitol Hill', 20, 38, 2.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',], [], [], []);

var alkiLocation = new Store('Alki Beach', 2, 16, 4.6, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',], [], [], []);

var storesList = [firstAndPikeLocation, seatacLocation, seattleCenterLocation, capitolHillLocation, alkiLocation];

var tbodyElJo = document.getElementById('cookie-tosser-info');
var theadElJo = document.getElementById('cookie-tosser-header');
var tFootElJo = document.getElementById('cookie-tosser-footer');
var tbodyEl = document.getElementById('store-information-table');
var theadEl = document.getElementById('hours-of-operation');
var tFootEl = document.getElementById('totals');
var tFootTrEl = document.createElement('tr');
tFootEl.appendChild(tFootTrEl);

//this array holds each stores cookies sold per hour, meaning that the first 5 values (and every consequent 5 values) are each stores numbers for every hour the store is open. This is basically temporary storage needed to use the reduce method to push the sum variable into the hourlyStoreData array.
var hourlyStoreData = [];
//this array uses the reduce method to combine every 5 values of the hourlyStoreData array. I did this in hopes to create an array to easily pull each stores hourly totals for cookies sold, which I put in the table footer. But because the reduce method returns the value every time, the footer displays the hourly totals that continuously add to themselves (which isn't what I wanted).
var hourArray = [];
//this is an array that holds each stores complete daily totals for cookies sold, using the reduce method to gain 5 values.
var storeHourlyCookieTotalsList = [];

var getOneStoreCookiesPerHour = function(store) {
  var randomCustNum;
  var generateRandomCustomersPerHour = function(min, max) {
    randomCustNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomCustNum;
  };
  for(var i = 0; i < store.hoursOfOperation.length; i++) {
    store.averageHourlyCustomers.push(generateRandomCustomersPerHour(store.minCustomersPerHour, store.maxCustomersPerHour));
    store.hourlyCookieSales.push(generateRandomCustomersPerHour(store.minCustomersPerHour, store.maxCustomersPerHour) * Math.floor(store.averageCookiesSoldPerCust));
  }
};

var getAllStoresCookiesPerHour = function() {
  for(var i = 0; i < storesList.length; i++) {
    getOneStoreCookiesPerHour(storesList[i]);
    console.log(storesList[i].location + ' has sold ' + storesList[i].hourlyCookieSales);
  }
};

var getHourlyCookiesData = function(store) {
  getAllStoresCookiesPerHour();
  for(var k = 0; k < store.hoursOfOperation.length; k++) {
    for(var j = 0; j < storesList.length; j++) {
      hourlyStoreData.push(storesList[j].hourlyCookieSales[k]);
    }
    var sum = hourlyStoreData.reduce( function(total, amount){
      return total + amount;
    });
    hourArray.push(sum);
  }
};

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
    var sumStore = storesList[i].hourlyCookieSales.reduce( function(total, amount){
      return total + amount;
    });
    storeHourlyCookieTotalsList.push(sumStore);
    var totalCookiesSoldSlot = document.createElement('td');
    totalCookiesSoldSlot.textContent = sumStore;
    trEl.appendChild(totalCookiesSoldSlot);
    tbodyEl.appendChild(trEl);
  }
};

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
  var sumStoreTotal = storeHourlyCookieTotalsList.reduce( function(total, amount){
    return total + amount;
  });
  totalsForAllStores.textContent = sumStoreTotal;
  tFootTrEl.appendChild(totalsForAllStores);
};

var getCookieTossersPerHour = function() {
  for(var j = 0; j < storesList.length; j++) {
    for(var i = 0; i < storesList[j].averageHourlyCustomers.length; i++) {
      if (storesList[j].averageHourlyCustomers[i] > 60) {
        storesList[j].hourlyCookieTossers.push(4);
      } else if(storesList[j].averageHourlyCustomers[i] > 40) {
        storesList[j].hourlyCookieTossers.push(3);
      } else {
        storesList[j].hourlyCookieTossers.push(2);
      }
    }
  }
};

var printJoHeaderHours = function(store) {
  var trHeadElJo = document.createElement('tr');
  var hoursTd = document.createElement('td');
  hoursTd.textContent = '';
  trHeadElJo.appendChild(hoursTd);
  for(var i = 0; i < store.hoursOfOperation.length; i++) {
    var tdHeadElJo = document.createElement('td');
    tdHeadElJo.textContent = store.hoursOfOperation[i];
    trHeadElJo.appendChild(tdHeadElJo);
  }
  theadElJo.appendChild(trHeadElJo);
};

var printJoTable = function() {
  for(var i = 0; i < storesList.length; i++) {
    var trBodyElJo = document.createElement('tr');
    var storeNameTable = document.createElement('td');
    storeNameTable.textContent = storesList[i].location + ' Customers Per Hour/Tossers Per Hour:';
    trBodyElJo.appendChild(storeNameTable);
    for(var j = 0; j < storesList[i].hoursOfOperation.length; j++) {
      var cookieTosserInfo = document.createElement('td');
      cookieTosserInfo.textContent = storesList[i].averageHourlyCustomers[j] + '/' + storesList[i].hourlyCookieTossers[j];
      trBodyElJo.appendChild(cookieTosserInfo);
    }
    tbodyElJo.appendChild(trBodyElJo);
  }
};

var getAllDataPrintBothTables = function() {
  getHourlyCookiesData(firstAndPikeLocation);
  printTableHeadingHours(firstAndPikeLocation);
  printTableBodyInfo();
  printFooterInfo();
  getCookieTossersPerHour();
  printJoTable();
  printJoHeaderHours(firstAndPikeLocation);
};

getAllDataPrintBothTables();
