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
  
    database.ref("users/milohilo").once("value", (snapshot)=>{

      if(snapshot.val() == null){
        database.ref("users/milohilo").set({
          firstName: "Miley",
          lastName: "Cyrus",
          gender:"female",
          accountType:"client"
        });
      }
    });
    
    database.ref("users/tal066").once("value", (snapshot)=>{
      if(snapshot.val() == null){
        database.ref("users/tal066").set({
          firstName:"Tammy",
          lastName:"Lee",
          gender:"female",
          accountType:"therapist",
          clients:["milohilo"]
        });
      }
    });


    let provider = new firebase.auth.GoogleAuthProvider();

    // Google sign in popups when the sign in button is clicked
    /*$("#sign-in").click(()=>{
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        user = result.user;
        
        // checks if a user already exists in the database
        console.log("this is it")
        console.log(database.ref('users/' + user.uid))
        console.log("currentUser")
        console.log(database.ref('currentUser'))
       
        database.ref('users/' + user.uid).once('value', (snapshot)=>{
          console.log(snapshot.val());
          database.ref("currentUser/").set({
            userId:user.uid
          });
          if (snapshot.val() !== null) {
            userExistsCallback(user, true);
          }else{
            userExistsCallback(user, false);
          }
        });
     
      }).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        
      }); 

      
    });*/

   

    

      /*if(accountType == "therapist"){
          window.location.href = 'client-home.html';
      }else{
          window.location.href = 'therapist-home.html';
      }*/
      



$("#reset-database").click(()=>{
  //database.ref("users/").remove();  
});

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


  