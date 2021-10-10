function adduser(){
    var username= document.getElementById("user_name").value;
    localStorage.setItem("user_name", username);
    window.location="Chatter Room_room.html";
}

