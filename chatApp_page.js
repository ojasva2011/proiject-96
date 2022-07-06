//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCLd3vbrO8HY3hNByy3Rcp2AFVejM8qL6A",
    authDomain: "kwitter-app-392b0.firebaseapp.com",
    databaseURL: "https://kwitter-app-392b0-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-392b0",
    storageBucket: "kwitter-app-392b0.appspot.com",
    messagingSenderId: "302104999297",
    appId: "1:302104999297:web:17fe08ea05abee9a66e480"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name= localStorage.getItem("user_name");
console.log(user_name);
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();



function logout(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="index.html";
}


function send(){
  msg=document.getElementById("msg").value;
  console.log(msg);
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value="";
}