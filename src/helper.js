const admin = require('firebase-admin');
const serviceAccount = require('../moderator-bot-336622-53623ae6a339.json');

console.log(process.env.FIREBASE_DATABASEURL);
console.log();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASEURL
});

const db = admin.database();
////////////////////////////////////////////////
const warnsref = db.ref('warns/');
warnsref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

////////////////////////////////////////////////
module.exports = {
  command: function(msg, keyword, func){
      if (msg.content.toLowerCase().includes(keyword)) {
        func()
      }
    }
};
