var firebaseConfig = {
    apiKey: "AIzaSyCcFgbtJpvet3geMqq2PDyF6rUrwM2Z_H8",
    authDomain: "chatter-room-f47fb.firebaseapp.com",
    databaseURL: "https://chatter-room-f47fb-default-rtdb.firebaseio.com",
    projectId: "chatter-room-f47fb",
    storageBucket: "chatter-room-f47fb.appspot.com",
    messagingSenderId: "186719749442",
    appId: "1:186719749442:web:dc008363088d1dd75fb4db"
  };
  
  firebase.initializeApp(firebaseConfig);

  var user_name=localStorage.getItem("user_name");
  var room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    window.location="index.html";
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
}

function send(){
   var message1 =document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
         name:user_name,
         message:message1,
         like:0
   });
   document.getElementById("msg").value="";
}