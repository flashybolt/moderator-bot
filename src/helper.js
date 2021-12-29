/*const firebase = require('firebase');
const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyCd1E9T92ey5DCet8CQM7iLjoY3WsUzcJ8",
  authDomain: "moderator-bot-5d0c3.firebaseapp.com",
  databaseURL: "https://moderator-bot-5d0c3-default-rtdb.firebaseio.com",
  projectId: "moderator-bot-5d0c3",
  storageBucket: "moderator-bot-5d0c3.appspot.com",
  messagingSenderId: "864458254138",
  appId: "1:864458254138:web:d38dd91e776e6856345203",
  measurementId: "${config.measurementId}"
};

const app = initializeApp(firebaseConfig);
const db = firebase.database();
const obj = {'test':'poop'}

db.ref("customPath").set(obj, function(error) {
    if (error) {
      // The write failed...
      console.log("Failed with error: " + error)
    } else {
      // The write was successful...
      console.log("success")
    }
})
*/
////////////////////////////////////////////////
module.exports = {
  command: function(msg, keyword, func){
      if (msg.content.toLowerCase().includes(keyword)) {
        func()
      }
    }
};
