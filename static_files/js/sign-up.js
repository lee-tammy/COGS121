
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

      $("#submit").click(()=>{
  
        const email = $('#email').val();
        const gender = $("input[name='gender']:checked").val();
        const accountType = $("input[name='acc-type']:checked").val();
        console.log("hello")
        console.log(database.ref().child('currentUser'))// THIS GETS PRINTED
        database.ref("currentUser").once('value', (snapshot)=>{
            
            console.log("HELLO im inside@") // THIS DOESNT GET PRINTED WTFF
            user = snapshot.val();
            console.log(user)
     
            database.ref("users/" + user.userId).set({
              email: email,
              gender: gender,
              accountType: accountType
            });
        });
        
  
        if(accountType == "therapist"){
            window.location.href = 'client-home.html';
        }else{
            window.location.href = 'therapist-home.html';
        }
        
  
  });
});