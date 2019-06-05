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

    let totalEvalCount = 0;
    
    let evalsArr; 
    let data;

    // Only display the evaluations that the therapist assigned
    const key='users/' + user + '/evals';
    database.ref(key).once('value', (snapshot) => {
      data = snapshot.val();
      evalsArr = data.assigned;
      totalEvalCount = evalsArr.length;

      console.log("current val: " + localStorage.getItem("currentSurvey"));

      let evalCount = localStorage.getItem("currentSurvey");
      let evalCount1 = evalCount-1;

      //first case (new survey eval)
      if(!localStorage.getItem("currentSurvey") || localStorage.getItem("currentSurvey") == 0){
      //if(true){
        //setting date
        const today = new Date();
        const prettyDate = today.getMonth() + "-" + today.getDate() + "-" + today.getFullYear();
        localStorage.setItem("prettyDate", prettyDate);

        document.getElementById(evalsArr[0] + '-questions').style.display = "block";

        //if only one survey list, show finish survey button (otherwise show continue button)
        if(totalEvalCount == 1)
        {
          document.getElementById("next-survey").style.display = "none"; 
          document.getElementById("finish-survey").style.display = "block";
        }
        else
        {
          document.getElementById("next-survey").style.display = "block"; 
          document.getElementById("finish-survey").style.display = "none";
        }

        //setting a var to keep track of which survey they're on even after reloading
        localStorage.setItem("currentSurvey", 0);
      }
      //second case (about to reach end of survey)
      else if(evalCount == totalEvalCount-1)
      {
        document.getElementById("finish-survey").style.display = "block";
        document.getElementById("next-survey").style.display = "none"; 

        document.getElementById(evalsArr[evalCount-1] + '-questions').style.display = "none";
        document.getElementById(evalsArr[evalCount] + '-questions').style.display = "block";
      }
      //third case (middle of survey)
      else 
      {
        document.getElementById("finish-survey").style.display = "none";
        document.getElementById("next-survey").style.display = "block"; 

        document.getElementById(evalsArr[evalCount-1] + '-questions').style.display = "none";
        document.getElementById(evalsArr[evalCount] + '-questions').style.display = "block";      
      }

    });
      

    /*submit button hit*/
    $("#next-survey").click(()=>{

      addToDatabase();
      let count = localStorage.getItem("currentSurvey");
      count++;
      localStorage.setItem("currentSurvey", count);

      document.location.reload();
    });

    $("#finish-survey").click(()=>{

      
      addToDatabase();
      localStorage.setItem("currentSurvey", 0);

      window.location.href = "client-home.html"; // bring the client back to the home page
    });//end of finish-survey click...

function addToDatabase(){

  // go through each assigned evaluation and grab all the client's responses
          // then put the clien'ts responses in our 'answers' object
  let currentSurveyQ = localStorage.getItem("currentSurvey");
  const prettyDate = localStorage.getItem("prettyDate");

  if(evalsArr[currentSurveyQ] == 'sleep'){
    sleepResponse = {
      'time': $("input[name='sleep-time']:checked").val(),
      'well': $("input[name='sleep-well']:checked").val(),
      'sleepy': $("input[name='sleep-sleepy']:checked").val()
    };
    database.ref('users/' + user + '/evals/' + evalsArr[currentSurveyQ] + '/' + prettyDate).set(sleepResponse);
  }
  else if(evalsArr[currentSurveyQ] == 'school'){
    schoolResponse = {
      'enjoy': $("input[name='school-enjoy']:checked").val(),
      'difficult': $("input[name='school-difficult']:checked").val(),
      'on-time': $("input[name='school-ontime']:checked").val(),
      'teacher': $("input[name='school-teacher']:checked").val()
    };
    database.ref('users/' + user + '/evals/' + evalsArr[currentSurveyQ] + '/' + prettyDate).set(schoolResponse);
  }
  else if(evalsArr[currentSurveyQ] == 'friends'){
    friendsResponse = {
      'talk': $("input[name='friends-talk']:checked").val(),
      'many': $("input[name='friends-many']:checked").val(),
      'happy': $("input[name='friends-happy']:checked").val(),
      'fight': $("input[name='friends-fight']:checked").val()
    };
    database.ref('users/' + user + '/evals/' + evalsArr[currentSurveyQ] + '/' + prettyDate).set(friendsResponse);
  }
  else if(evalsArr[currentSurveyQ] == 'family'){
    familyResponse = {
      'happy': $("input[name='family-happy']:checked").val(),
      'talk': $("input[name='family-talk']:checked").val(),
      'supportive': $("input[name='family-supportive']:checked").val(),
      'loving': $("input[name='family-loving']:checked").val()
    };
    database.ref('users/' + user + '/evals/' + evalsArr[currentSurveyQ] + '/' + prettyDate).set(familyResponse);
  }
  else if(evalsArr[currentSurveyQ] == 'mood'){/* questions to be added later*/}
  else if(evalsArr[currentSurveyQ] == 'activities'){
    activitiesResponse = {
      'play': $("input[name='activities-play']:checked").val(),
      'read': $("input[name='activities-read']:checked").val(),
      'tv': $("input[name='activities-tv']:checked").val(),
      'videogames': $("input[name='activities-videogames']:checked").val()
    };
    database.ref('users/' + user + '/evals/' + evalsArr[currentSurveyQ] + '/' + prettyDate).set(activitiesResponse);
  }
  else if(evalsArr[currentSurveyQ] == 'attention'){
    attentionResponse = {
      'hard': $("input[name='attention-hard']:checked").val(),
      'multitask': $("input[name='attention-multitask']:checked").val(),
      'listener': $("input[name='attention-listener']:checked").val()
    };
    database.ref('users/' + user + '/evals/' + evalsArr[currentSurveyQ] + '/' + prettyDate).set(attentionResponse);
  }
 // finish putting all the client's responses in object 'answers']

}

});
