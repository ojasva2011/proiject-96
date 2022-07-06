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

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding Room Name"
      });
      localStorage.setItem("room_name",room_name);

        window.location="chatApp_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
   console.log("room_name -"+Room_names);
   row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
   document.getElementById("output").innerHTML +=row
  //End code
  });});}
  
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="chatApp_room.html";
}
