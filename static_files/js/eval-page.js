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
$(document).ready(()=>{
    // gets the username of the client profile you're viewing
    let path = window.location.href;
    let segments = path.split('#');
    let username = segments[segments.length - 2];
    let eval = segments[segments.length - 1];

    $("#client-status").attr("href", 'client-profile.html#' + username);

    // TODO: show the responses of the client based on eval.

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart(eval, username));

    // create a link to the client's evaluations
    let profileLink = '<a href="client-profile.html#' + username + '"><img id="menu-back" src="images/menu/back.png"></a>';
    $('#back-to-profile').html(profileLink);

    // create a link to the change client's evaluations page
    let changeEvalLink = '<a href="eval-selection.html#' + username + '">Change Evaluations</a>';
    $('#change-eval-link').html(changeEvalLink);

});



function drawChart(eval, username) {
  database.ref('users/' + username + '/evals/' + eval).once('value', (snapshot)=>{
    const data = snapshot.val();
    
    if(data != null){
      const arrayToTable = [];
      
      let questions = ['q1', 'q2', 'q3', 'q4', 'q5']
      const firstRow = [];
      let title = ''
      let numOfQuestions = 0
      if(eval == 'sleep'){
        title = 'Sleep Evaluation'
        numOfQuestions = 3;
        questions[0] = 'I went to sleep at a good time...'
        questions[1] = 'I slept well...'
        questions[2] = 'I was sleepy during the day...'
      }else if(eval == 'friends'){
        numOfQuestions = 5;
        title = 'Friends Evaluation'
        questions[0] = 'I have friends I can talk to...'
        questions[1] = 'I have many friends...'
        questions[2] = 'I am happy with my friends...'
        questions[3] = 'I am fighting with my friends...'
        questions[4] = 'I chatted with friends after school...'
      }else if(eval == 'family'){
        title = 'Family Evaluation'
        numOfQuestions = 4;
        questions[0] = 'I am happy with my family...'
        questions[1] = 'I like talking with my family...'
        questions[2] = 'I have a supportive family...'
        questions[3] = 'I have a loving family...'
      }else if(eval == 'activities'){
        title = 'Activities Evaluation'
        numOfQuestions = 5;
        questions[0] = 'I played outside...'
        questions[1] = 'I like to read books...'
        questions[2] = 'I watched TV...'
        questions[3] = 'I played video games...'
        questions[4] = 'I spent time watching videos on my phone...'
      }else if(eval == 'attention'){
        title = 'Attention Evaluation'
        numOfQuestions = 5;
        questions[0] = 'I had a hard time paying attention...'
        questions[1] = 'I daydream a lot...'
        questions[2] = 'I like to do other activities at the same time...'
        questions[3] = 'I sometimes stop what I\'m doing to do other things...'
        questions[4] = 'I am a good listener...'
      }
      firstRow.push('')
      for(let i = 0; i < numOfQuestions; i++){
        firstRow.push(questions[i])
      }
      arrayToTable.push(firstRow);

      for(let i in Object.keys(data)){
        let row = [];
        const dat = '' + Object.keys(data)[i]
        row.push(dat)

        database.ref('users/' + username + '/evals/' + eval + '/' + dat).once('value',(snapshot)=>{

          for(const i in snapshot.val()){
            row.push(parseInt(snapshot.val()[i]))
          }
          
          arrayToTable.push(row)
          row = []

          var d = google.visualization.arrayToDataTable(arrayToTable);
          var chart = new google.visualization.LineChart(document.getElementById('curve-chart'));
          
          var options = {
            title: title,
            curveType: 'function',
            legend: { position: 'bottom' },
            height: screen.height / 2 + 200,
            width: screen.width,
            vAxis: { gridlines: { count: 4 } }
          };
          
            chart.draw(d, options);
        });
        document.getElementById("legend").style.display = "block"
        document.getElementById("curve-chart").style.display = "block"
        document.getElementById("no-chart").style.display = "none"
      }
    }else{
      document.getElementById("legend").style.display = "none"
      document.getElementById("curve-chart").style.display = "none"
      document.getElementById("no-chart").style.display = "block"
    }
    
    
  });
  




  
}

