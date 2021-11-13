
var firebaseConfig = {
      apiKey: "AIzaSyDPCUs_UsIzC-YHCjbav4OJCaYS8ejuiMg",
      authDomain: "kwitter-f2aff.firebaseapp.com",
      databaseURL: "https://kwitter-f2aff-default-rtdb.firebaseio.com",
      projectId: "kwitter-f2aff",
      storageBucket: "kwitter-f2aff.appspot.com",
      messagingSenderId: "149064746384",
      appId: "1:149064746384:web:7ddfcf3b3317c036b35f15"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
