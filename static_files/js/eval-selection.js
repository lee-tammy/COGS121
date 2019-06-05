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

    // gets the username of the client profile you're viewing
    let path = window.location.href;
    let segments = path.split('#');
    let username = segments[segments.length - 1];


    // create a link to the client's evaluations
    let profileLink = '<a href="client-profile.html#' + username + '"><img id="menu-back" src="images/menu/back.png"></a>';
    $('#back-to-prof').html(profileLink);


    // Displays the evaluations that are currently assigned to the client
    const key='users/' + username + '/evals/assigned/';
    database.ref(key).once('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data.assigned);
      $('#current-assigned').html('Current evaluations are ' + data.assigned);
    });


    // Change the evaluations that are assigned to the client
    $("#change-evals").click(()=>{
        console.log('hi');
        let evals = ['sleep', 'school', 'friends', 'family', 'activities', 'attention'];
        let assigned = [];
        for(i = 0; i < evals.length; i++){
          let checked = $("input[value='" + evals[i] + "']:checked");
          if(checked.length == 1){
            assigned.push(evals[i]);
          }
        }
        console.log(assigned);
        database.ref("users/" + username + "/evals/assigned/").set({
        //database.ref("users/" + username + "/").set({
          assigned
        });

        $('.greeting3').html('Evaluations were changed to ' + assigned);
    });



});
