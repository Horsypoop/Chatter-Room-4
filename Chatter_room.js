var name1 = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + name1 +"!";

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

      


getData();

function logout(){
      window.location="index.html";
}     

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name: "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function addroom(){
      var room_name=document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      window.location="Chatter Room Talking.html";
      document.getElementById("room_name").value="";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="Chatter Room Talking.html";      
}