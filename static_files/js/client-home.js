$(document).ready(()=>{
  // Initialize Firebase

  var firebaseConfig = {
    apiKey: "AIzaSyD3iiCraOvePJcqCUSQdEITTD0cjG2ArBw",
    authDomain: "taaj-cogs121-project.firebaseapp.com",
    databaseURL: "https://taaj-cogs121-project.firebaseio.com",
    projectId: "taaj-cogs121-project",
    storageBucket: "taaj-cogs121-project.appspot.com",
    messagingSenderId: "364492185043",
    appId: "1:364492185043:web:6cab76272a770512"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const database = firebase.database();

  const user = localStorage.getItem("user");
  database.ref("users/" + user).once("value", (snapshot)=>{
      $("#client-g").html("Hello " + snapshot.val().firstName + "!");
  });
    

  const today = new Date();
  const prettyDate = (today.getMonth()+1) + "-" + today.getDate() + "-" + today.getFullYear();

  console.log(prettyDate);
  console.log(localStorage.getItem("lastDate"+user));

  if(!localStorage.getItem("lastDate"+user) || prettyDate != localStorage.getItem("lastDate"+user))
  {
    document.getElementById("home-hungry").style.display = "block";
    document.getElementById("home-full").style.display = "none";
  }
  else
  {
    document.getElementById("home-hungry").style.display = "none";
    document.getElementById("home-full").style.display = "inline-block";
  }

});
