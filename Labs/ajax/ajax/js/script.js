"use strict";

// global variables
var entry = "^IXIC";
var httpRequest;

function getRequestObject() {
   try {
      // TODO construct a new XMLHttpRequest object named httpRequest
      var httpRequest = new XMLHttpRequest();
   }
   catch (requestError) {
      return false;
   }
   return httpRequest;
}

function stopSubmission(evt) {
   if (evt.preventDefault) {
      evt.preventDefault();
   } else {
      evt.returnValue = false;
   }
   getQuote();
}

function getQuote() {
   if (document.getElementsByTagName("input")[0].value) {
     entry = document.getElementsByTagName("input")[0].value; 
   } 
   httpRequest = getRequestObject();
   httpRequest.abort();
   // TODO using the XHR, open StockCheck.php?t=<entry>
   httpRequest.open('GET', 'StockCheck.php?t=' + entry + '', true);
   // TODO send request
   httpRequest.send();
   // TODO register displayData as the readystatechange listener
   httpRequest.onreadystatechange = displayData;
}

function displayData() {
   if(httpRequest.readyState === 4 && httpRequest.status === 200) {
      // TODO construct a variable named stockResults to refer to the XHR response text
      var stockResults = httpRequest.responseText;
      console.log("stockResults=" + stockResults);
      var stockItems = stockResults.split(/,|\"/);
      for(var i = stockItems.length - 1; i >= 0; i--) {
          if(stockItems[i] === "") {
             stockItems.splice(i, 1);
          }
      }
      var articleEl = document.getElementsByTagName("article")[0];
      document.getElementById("ticker").innerHTML = stockItems[0];
      document.getElementById("openingPrice").innerHTML = stockItems[6];
      document.getElementById("lastTrade").innerHTML = stockItems[1];
      document.getElementById("lastTradeDT").innerHTML = stockItems[2] + ", " + stockItems[3];
      document.getElementById("change").innerHTML = stockItems[4];
      document.getElementById("range").innerHTML = (stockItems[8] * 1).toFixed(2) + " &ndash; " + (stockItems[7] * 1).toFixed(2);
      document.getElementById("volume").innerHTML = (stockItems[9] * 1).toLocaleString();
      document.getElementById("chart").src = "http://ichart.yahoo.com/t?s=" + entry;
      document.getElementById("chart").style.display = "inline";      
   }
}

function formatTable() {
   var rows = document.getElementsByTagName("tr");
   for (var i = 0; i < rows.length; i = i + 2) {
      rows[i].style.background = "#9FE098";
   }   
}

window.onload = function() {
   var form = document.getElementsByTagName("form")[0];
   if (form.addEventListener) {
      form.addEventListener("submit", stopSubmission, false);
      window.addEventListener("load", formatTable, false);
      window.addEventListener("load", getQuote, false);
   }
}