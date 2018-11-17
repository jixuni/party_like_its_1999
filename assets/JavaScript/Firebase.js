  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB2KEd8sQyj3WpQXC6v3iDUll1EPH0rIF4",
    authDomain: "party-like-it-s-1999.firebaseapp.com",
    databaseURL: "https://party-like-it-s-1999.firebaseio.com",
    projectId: "party-like-it-s-1999",
    storageBucket: "party-like-it-s-1999.appspot.com",
    messagingSenderId: "118633566510"
  };
  firebase.initializeApp(config);

  // Points to the root reference
var storageRef = firebase.storage().ref();

// Points to 'music'
var musicRef = storageRef.child('music');

// Points to 'music/Backstreet Boys - I Want It That Way.mp3'
// Note that you can use variables to create child values
var fileName = 'Backstreet Boys - I Want It That Way.mp3';
var songRef = musicRef.child(fileName);

// File path is 'music/Backstreet Boys - I Want It That Way.mp3'
var path = songRef.fullPath

// File name is 'Backstreet Boys - I Want It That Way.mp3'
var name = songRef.name

// Points to 'music'
var musicRef = songRef.parent;