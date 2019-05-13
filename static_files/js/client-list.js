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

    $('#see-more').click(() => {
      database.ref('users/').once('value', (snapshot) => {
        const data = snapshot.val();
        const usernames = Object.keys(data); // holds all the usernames (clients + therapists)

        /* loops through each of the profiles and gets their first and last name */
        for(const u of usernames){
          let name = document.createTextNode(data[u].firstName + " " + data[u].lastName);

          /* only clients are added to the client list */
          if(data[u].accountType == "client"){
            document.getElementById('client-names').appendChild(name);
            let br = document.createElement("br");
            document.getElementById('client-names').appendChild(br);
          }
        }
      });

    });


});
