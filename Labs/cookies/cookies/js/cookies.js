"use strict";

function populateInfo() {
   if (document.cookie) {
      // TODO set the username input value on the form using the value of the username cookie
      /*var cookies = document.cookie.split('; ');
      for (var i = 0; i < cookies.length; ++i) {
         var c = cookies[i].split('=');
         if (c[0] == 'username') {
            document.getElementById('usernameInput').value = c[1];
         }
      }*/
   }
   document.getElementById('usernameInput').value = localStorage.getItem('username');
}

function processCookie() {
   // TODO create a cookie named username that expires in 120 seconds from now
   // TODO use the username value entered from the form as the cookie value
   var username = document.getElementById('usernameInput').value;
   var expires = new Date(Date.now() + 120000).toUTCString();
   //document.cookie = 'username=' + username + '; expires=' + expires;
   localStorage.setItem('username', username);
}

function readCookieValue(key) {
   var cookies = document.cookie.split('; ');
   for (var i=0; i < cookies.length; ++i) {
      // cookies[i] will be name=value
      var c = cookies[i].split('=');
      if (c[0] === key) {
         return c[1];
      }
   }
}

function handleSubmit(e) {
   e.preventDefault(); // prevent form from submitting
   processCookie();
   document.getElementsByTagName("form")[0].submit();
}

function createEventListener() {
   var loginForm = document.getElementsByTagName("form")[0];
   loginForm.addEventListener("submit", handleSubmit, false);
}

window.onload = function() {
   populateInfo();
   createEventListener();
}
