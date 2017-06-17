'use strict';

function Store(location, minCustomersPerHour, maxCustomersPerHour, averageCookiesSoldPerCust) {
  this.location = location;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesSoldPerCust = averageCookiesSoldPerCust;
  this.hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];
  this.hourlyCookieSales = [];
  this.hourlyCookieTossers = [];
  this.averageHourlyCustomers = [];
}

var formEl = document.getElementById('form');
var tbodyElJo = document.getElementById('cookie-tosser-info');
var theadElJo = document.getElementById('cookie-tosser-header');
var tFootElJo = document.getElementById('cookie-tosser-footer');
var tbodyEl = document.getElementById('store-information-table');
var theadEl = document.getElementById('hours-of-operation');
var tFootEl = document.getElementById('totals');
var tFootTrEl = document.createElement('tr');

var storesList = [];
var storeHourlyCookieTotalsList = [];
var answerArray = [];

var getOneStoreCookiesPerHour = function(store) {
  var randomCustNum;
  var generateRandomCustomersPerHour = function(min, max) {
    randomCustNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomCustNum;
  };
  for(var i = 0; i < store.hoursOfOperation.length; i++) {
    store.averageHourlyCustomers.push(generateRandomCustomersPerHour(store.minCustomersPerHour, store.maxCustomersPerHour));
    store.hourlyCookieSales.push(generateRandomCustomersPerHour(store.minCustomersPerHour, store.maxCustomersPerHour) * Math.round(store.averageCookiesSoldPerCust));
  }
};

Store.prototype.makeRow = function() {
  storesList.push(this);
  getOneStoreCookiesPerHour(this);
  console.log(this);
  var trEl = document.createElement('tr');
  var storeNameTable = document.createElement('td');
  storeNameTable.textContent = this.location;
  trEl.appendChild(storeNameTable);
  for (var i = 0; i < this.hoursOfOperation.length; i++) {
    var storeInfoRow = document.createElement('td');
    storeInfoRow.textContent = this.hourlyCookieSales[i];
    trEl.appendChild(storeInfoRow);
  }
  var sumStore = this.hourlyCookieSales.reduce( function(total, amount){
    return total + amount;
  });
  storeHourlyCookieTotalsList.push(sumStore);
  var totalCookiesSoldSlot = document.createElement('td');
  totalCookiesSoldSlot.textContent = sumStore;
  trEl.appendChild(totalCookiesSoldSlot);
  tbodyEl.appendChild(trEl);
};

var firstAndPikeLocation = new Store('1st and Pike', 23, 65, 6.3);
firstAndPikeLocation.makeRow();
var seatacLocation = new Store('Seatac International Airport', 3, 24, 1.2);
seatacLocation.makeRow();
var seattleCenterLocation = new Store('Seattle Center', 11, 38, 3.7);
seattleCenterLocation.makeRow();
var capitolHillLocation = new Store('Capitol Hill', 20, 38, 2.3);
capitolHillLocation.makeRow();
var alkiLocation = new Store('Alki Beach', 2, 16, 4.6);
alkiLocation.makeRow();

var getHourlyCookiesData = function(store) {
  for(var k = 0; k < store.hoursOfOperation.length; k++) {
    for(var j = 0; j < storesList.length; j++) {
      var num1 = storesList[0].hourlyCookieSales[k];
      var num2 = storesList[1].hourlyCookieSales[k];
      var num3 = storesList[2].hourlyCookieSales[k];
      var num4 = storesList[3].hourlyCookieSales[k];
      var num5 = storesList[4].hourlyCookieSales[k];
    }
    var answer = num1 + num2 + num3 + num4 + num5;
    answerArray.push(answer);
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

var printFooterInfo = function(){
  var hourlyTotalRow = document.createElement('td');
  hourlyTotalRow.textContent = 'Totals Per Hour';
  tFootTrEl.appendChild(hourlyTotalRow);
  for(var i = 0; i < answerArray.length; i++) {
    var totalsForHour = document.createElement('td');
    totalsForHour.textContent = answerArray[i];
    tFootTrEl.appendChild(totalsForHour);
  }
  var totalsForAllStores = document.createElement('td');
  var sumStoreTotal = answerArray.reduce( function(total, amount){
    return total + amount;
  });
  totalsForAllStores.textContent = sumStoreTotal;
  tFootTrEl.appendChild(totalsForAllStores);
  tFootEl.appendChild(tFootTrEl);
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
  printFooterInfo();
  getCookieTossersPerHour();
  printJoTable();
  printJoHeaderHours(firstAndPikeLocation);
};

getAllDataPrintBothTables();

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();

  var location = event.target.location.value;
  console.log(location);
  var minCustomersPerHour = parseInt(event.target.minCustomersPerHour.value);
  var maxCustomersPerHour = parseInt(event.target.maxCustomersPerHour.value);
  var averageCookiesSoldPerCust = parseInt(event.target.averageCookiesSoldPerCust.value);

  // var newStore = new Store(location, minCustomersPerHour, maxCustomersPerHour, averageCookiesSoldPerCust);

  if(location === '1st and Pike' || location === 'Seattle International Airport' || location === 'Seattle Center' || location === 'Capitol Hill' || location === 'Alki Beach') {
    alert('Invalid input, that store already exists.');
  } else {
    var newStore = new Store(location, minCustomersPerHour, maxCustomersPerHour, averageCookiesSoldPerCust);
    newStore.makeRow();
  }
}
