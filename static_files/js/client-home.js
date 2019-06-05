/* client-home.js: Grabs the username from local storage and displays a
   personalized greeting. Grabs the date of the most recent evaluations
  responses from Firebase. If the date is not today, display a "hungry cat",
  and if the date is today (meaning they filled out their evaluations already),
  display a "full cat".
*/
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

  $("#client-g").html("Hello " + localStorage.getItem("userDisplayName") + "!");

  const today = new Date();
  const prettyDate = (today.getMonth()+1) + "-" + today.getDate() + "-" + today.getFullYear();

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
