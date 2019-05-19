
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

    $("#create-acc").click(()=>{
  
      const username = $("#username").val();
      

      database.ref('users/' + username).once('value', (snapshot)=>{
        // If username doesn't exist, use it!
        if(snapshot.val() == null){
          const firstName = $('#first-name').val();
          const lastName = $('#last-name').val();
          const email = $('#email').val();
          const gender = $("input[class='gender']:checked").val();
          const accountType = "therapist"

          database.ref('users/' + username).set({
            firstName: firstName,
            lastName: lastName,
            email: email,
            gender: gender,
            accountType: accountType
          });
          window.location.href = "login.html";
          // If username does exist, alert the user to use a different one
          }else{
            
            alert("Please use a different username");
          }
        });
    });
});