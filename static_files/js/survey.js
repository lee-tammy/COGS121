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

          // go through each assigned evaluation and grab all the client's responses
          // then put the clien'ts responses in our 'answers' object
          for(i = 0; i < evals.length; i++){
            if(evals[i] == 'sleep'){
              sleepResponse = {
                'time': $("input[name='sleep-time']").val(),
                /*'hours': $("input[name='sleep-hours']").val(),*/
                /*'quality': $("input[name='sleep-quality']:checked").val(),*/
                'well': $("input[name='sleep-well']:checked").val(),
                'sleepy': $("input[name='sleep-sleepy']:checked").val()
              };
              answers['sleep'] = sleepResponse;
            }
            else if(evals[i] == 'school'){
              schoolResponse = {
                /*'on-time': $("input[name='school-ontime']:checked").val(),
                'put-off': $("input[name='school-putoff']:checked").val(),
                'enjoy': $("input[name='school-enjoy']:checked").val(),
                'hard': $("input[name='school-hard']:checked").val(),
                'trouble': $("input[name='school-trouble']:checked").val()*/
                'enjoy': $("input[name='school-enjoy']:checked").val(),
                'difficult': $("input[name='school-difficult']:checked").val(),
                'on-time': $("input[name='school-ontime']:checked").val(),
                'teacher': $("input[name='school-teacher']:checked").val()
              };
              answers['school'] = schoolResponse;
            }
            else if(evals[i] == 'friends'){
              friendsResponse = {
                /*'fights': $("input[name='friends-fights']:checked").val(),
                'number': $("input[name='friends-number']").val(),
                'happy': $("input[name='friends-happy']:checked").val()*/
                'talk': $("input[name='friends-talk']:checked").val(),
                'many': $("input[name='friends-many']:checked").val(),
                'happy': $("input[name='friends-happy']:checked").val(),
                'fight': $("input[name='friends-fight']:checked").val()
              };
              answers['friends'] = friendsResponse;
            }
            else if(evals[i] == 'family'){
              familyResponse = {
                'happy': $("input[name='family-happy']:checked").val(),
                'talk': $("input[name='family-talk']:checked").val(),
                'supportive': $("input[name='family-supportive']:checked").val(),
                'loving': $("input[name='family-loving']:checked").val()
              };
              answers['family'] = familyResponse;
            }
            else if(evals[i] == 'mood'){
              /*moodResponse = {
                'mood': $("input[name='mood']:checked").val()
              };
              answers['mood'] = moodResponse;*/
            }
            else if(evals[i] == 'activities'){
              activitiesResponse = {
                'play': $("input[name='activities-play']:checked").val(),
                'read': $("input[name='activities-read']:checked").val(),
                'tv': $("input[name='activities-tv']:checked").val(),
                'videogames': $("input[name='activities-videogames']:checked").val()
              };
              answers['activities'] = activitiesResponse;
            }
            else if(evals[i] == 'attention'){
              attentionResponse = {
                'hard': $("input[name='attention-hard']:checked").val(),
                'multitask': $("input[name='attention-multitask']:checked").val(),
                'listener': $("input[name='attention-listener']:checked").val()
              };
              answers['attention'] = attentionResponse;
            }
          } // finish putting all the client's responses in object 'answers'

          console.log(answers); // check to see if 'answers' was properly constructed

          // we will save the answers under the date
          const today = new Date();
          const prettyDate = today.getMonth() + "-" + today.getDate() + "-" + today.getFullYear();

          // put the client's answers in firebase
          database.ref('users/' + user + '/evals/' + prettyDate).set(answers);

          window.location.href = "client-home.html"; // bring the client back to the home page
        });

    });//end of finish-survey click...

});
