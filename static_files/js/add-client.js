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

    $('#addClient').click(() => {
      const userName = $('#insertUserName').val();
      console.log("adding new client: " + userName);

      // Getting the information from the text boxes and inserting
      // into firebase
      database.ref('users/' + userName).set({
          accountType: 'client',
          firstName: $('#insertFirstName').val(),
          lastName: $('#insertLastName').val(),
          gender: $('#insertGender').val()
      });
      let clients = [];
      database.ref('users/' + user + "/clients").once("value", (snapshot)=>{
        if(snapshot.val() != null){
          clients = snapshot.val()
        }
        clients.push(userName)
        database.ref('users/' + user).update({
          clients:clients
        });
      });

    });

});
