//Agrega TUS ANLACES DE FIREBASE
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


//almacenamos dentro de las variables
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

//función Send
function send() {
  
      // actualizamos el valor del cuadro de entrada del mensaje a vacío
      document.getElementById("msg").value = "";
  }

 // actualizamos el valor del cuadro de entrada del mensaje a vacío



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inicia código

//Termina código
      } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_name");
    window.location.replace("index.html");
    }
    
    