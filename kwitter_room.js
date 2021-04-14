
 var firebaseConfig = {
    apiKey: "AIzaSyAfaqrv4k0Wk_OgX7NKe7iDsldEmu7_NBY",
    authDomain: "test-630dd.firebaseapp.com",
    databaseURL: "https://test-630dd-default-rtdb.firebaseio.com",
    projectId: "test-630dd",
    storageBucket: "test-630dd.appspot.com",
    messagingSenderId: "29336149619",
    appId: "1:29336149619:web:ac4e9177aa6d0fc4bd9406"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome"+user_name;
  function addRoom()
  {
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding roomname"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML=document.getElementById("output").innerHTML+row;                                    
      //End code
      });});}
getData();
      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location="kwitter_page.html";
      }
      function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="kwitter.html";
      }