const firebaseConfig = {
      apiKey: "AIzaSyCg6cRoxb2MxLsQtk6DsHHwlAlAOFoc-8w",
      authDomain: "buzzlink123456.firebaseapp.com",
      databaseURL: "https://buzzlink123456-default-rtdb.firebaseio.com",
      projectId: "buzzlink123456",
      storageBucket: "buzzlink123456.appspot.com",
      messagingSenderId: "119355135183",
      appId: "1:119355135183:web:4525d0443d8afa661ad3ba"
    };   

    firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redierectToRoomName(this.id)' >#"+Room_names +"</div></hr>";
      document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData(); 

function addRoom() {
      room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      
      window.location = "BuzzLink_page.html";

}

function redierectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "BuzzLink_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("user_name");
window.location.replace("index.html");
}