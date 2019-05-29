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


    // display the client's information
    const key = 'users/' + username;
    database.ref(key).once('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      $(".greeting3").html('Name: ' + data.firstName + ' ' + data.lastName + '<br>' +
                           'Username: ' + username + '<br>' +
                           'Sex: ' + data.gender + '<br>' +
                           'Age: ' + data.age);
    });

    // create a link to the client's evaluations
    let profileLink = '<a href="client-profile.html#' + username + '"><img id="menu-back" src="images/menu/back.png"></a>';
    $('#back-to-profile').html(profileLink);

    // create a link to the change client's evaluations page
    let changeEvalLink = '<a href="eval-selection.html#' + username + '">Change Evaluations</a>';
    $('#change-eval-link').html(changeEvalLink);
    
    // Loops through all assigned evaluations and creates button for each 
    database.ref('users/' + username + '/evals/assigned').on('value', (snapshot)=>{
      const assignedEvals = snapshot.val();

      for(let i = 0; i < assignedEvals.length; i++){
        let profileLink = '<a href="eval-page.html#' + username + '#' + assignedEvals[i] + '">';
        $('#list-of-evals').append('<li>' + profileLink + assignedEvals[i]);;
        
      }
    });

    

    // Loops through all assigned evaluations and creates button for each
    database.ref('users/' + username + '/evals/assigned').on('value', (snapshot)=>{
      const assignedEvals = snapshot.val();

      for(let i = 0; i < assignedEvals.length; i++){
        let profileLink = '<a href="eval-page.html#' + username + '#' + assignedEvals[i] + '">';
        $('#list-of-evals').append('<li>' + profileLink + assignedEvals[i]);;
      }
    });

        // <input id="sleep" type="checkbox" name="eval" value="sleep"><label class="eval-label container-fluid" for="sleep"><div class="row align-items-center"><img class="col-sm-3 align-self-center" id="sleep-icon" src="images/icons/sleep.png"><p class="eval-title col-sm-9 align-self-center">Sleep</p></div></label><br>  


    // create a link to evaluations selection page
    let evalLink = '<a href="eval-selection.html#' + username + '">Change Evaluations</a>';
    $('#change-eval-link').html(evalLink);

});
