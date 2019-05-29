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


    //$('#see-more').click(() => {
    console.log(user)
    database.ref('users/').on('value', (snapshot) => {
      database.ref('users/' + user).on('value', (snapshot) => {
        const clients = snapshot.val().clients;
        console.log(clients)

        /* loops through each of the profiles and gets their first and last name */
        for(const i in clients){

          const key = 'users/' + clients[i];
          database.ref(key).on('value', (snapshot) => {
            const data = snapshot.val();
            /* create link to the client's profile */
            let profileLink = '<a class="col-sm client-name" align="center" style="color:#474747;font-size: 50px;" href="client-profile.html#' + clients[i] + '" class="profiles">';
            $('#client-names').append(profileLink + '<button>'+"<img src='../images/profile-images/kid1.jpeg'><br>" + data.firstName + '<br>' + data.lastName + "</button></a><br>");
          });


        //document.getElementById('client-names').appendChild(name);
        //let br = document.createElement("br");
        //document.getElementById('client-names').appendChild(br);

        }
      });
    });
    //});

});
