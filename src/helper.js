var admin = require("firebase-admin");

var serviceAccount = require("../moderator-bot-5d0c3-firebase-adminsdk-tnhts-846f85da63.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://moderator-bot-5d0c3-default-rtdb.firebaseio.com"
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
