localStorage = window.localStorage;

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


  firebase.initializeApp(firebaseConfig);
  
  const database = firebase.database();

$("#sign-up").click(()=>{
  window.location.href = "sign-up.html";
})

$("#log-in").click(()=>{
  userName = document.getElementById("user-name")
  if(userName && userName.value){
    database.ref("users/" + userName.value).once("value", (snapshot)=>{
      const info = snapshot.val()
      if(info !== null){
        localStorage.setItem("user", userName.value);
        if(info.accountType == "therapist"){

          window.location.href = "therapist-home.html";
        }else{
          window.location.href = "client-home.html";
        }
      }else{
        alert("invalid username");
      }
    })
  }
})
    
  });


  