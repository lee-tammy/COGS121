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

    // Only display the evaluations that the therapist assigned
    const key='users/' + user + '/evals';
    database.ref(key).once('value', (snapshot) => {
      const data = snapshot.val();
      const evals = data.assigned;

      for(i = 0; i < evals.length; i++){
        document.getElementById(evals[i] + '-questions').style.display = "block";
        console.log(evals[i]);
      }

    });

    $("#finish-survey").click(()=>{

        const key='users/' + user + '/evals';
        database.ref(key).once('value', (snapshot) => {
          const data = snapshot.val();
          const evals = data.assigned;  // get what evaluations the client is assigned
          answers = {}  // will hold all of the client's responses

          const today = new Date();
          const prettyDate = today.getMonth() + "-" + today.getDate() + "-" + today.getFullYear();

          // go through each assigned evaluation and grab all the client's responses
          // then put the clien'ts responses in our 'answers' object
          for(i = 0; i < evals.length; i++){
            if(evals[i] == 'sleep'){
              sleepResponse = {
                'time': $("input[name='sleep-time']").val(),
                'hours': $("input[name='sleep-hours']").val(),
                'quality': $("input[name='sleep-quality']:checked").val(),
                'sleepy': $("input[name='sleep-sleepy']:checked").val()
              };
              database.ref('users/' + user + '/evals/' + evals[i] + '/' + prettyDate).set(sleepResponse);
            }
            else if(evals[i] == 'school'){
              schoolResponse = {
                'on-time': $("input[name='school-ontime']:checked").val(),
                'put-off': $("input[name='school-putoff']:checked").val(),
                'enjoy': $("input[name='school-enjoy']:checked").val(),
                'hard': $("input[name='school-hard']:checked").val(),
                'trouble': $("input[name='school-trouble']:checked").val()
              };
              database.ref('users/' + user + '/evals/' + evals[i] + '/' + prettyDate).set(schoolResponse);
            }
            else if(evals[i] == 'friends'){
              friendsResponse = {
                'fights': $("input[name='friends-fights']:checked").val(),
                'number': $("input[name='friends-number']").val(),
                'happy': $("input[name='friends-happy']:checked").val()
              };
              database.ref('users/' + user + '/evals/' + evals[i] + '/' + prettyDate).set(friendsResponse);
            }
            else if(evals[i] == 'family'){/* questions not written yet */}
            else if(evals[i] == 'mood'){
              moodResponse = {
                'mood': $("input[name='mood']:checked").val()
              };
              database.ref('users/' + user + '/evals/' + evals[i] + '/' + prettyDate).set(moodResponse);
            }
            else if(evals[i] == 'activities'){/* questions not written yet */}
            else if(evals[i] == 'attention'){/* questions not written yet */}

          } // finish putting all the client's responses in object 'answers'

          console.log(answers); // check to see if 'answers' was properly constructed


          window.location.href = "client-home.html"; // bring the client back to the home page
        });
        
    });//end of finish-survey click...

});
