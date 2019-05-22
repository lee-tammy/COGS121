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

    $("#client-status").attr("href", 'client-status.html#' + username);

    // TODO: show the responses of the client based on eval.

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart(eval, username));

});

function drawChart(eval, username) {
  

  if(eval == "sleep"){
    /*What time did you sleep last night?
    How many hours of sleep did you get?
    How well did you sleep?
    How sleepy did you feel during the day?*/
    
  }


  database.ref('users/' + username + '/evals/' + eval).once('value', (snapshot)=>{
    const data = snapshot.val();

    const arrayToData = [];
    let title = "";
    for(const i in data){
      console.log(data[i]);
      var d = google.visualization.arrayToDataTable([
        ['', 'Sales', 'Expenses'],
        ['2004',  1000,      400],
        ['2005',  1170,      460],
        ['2006',  660,       1120],
        ['2007',  1030,      540]
      ]);

      var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
      };
    
      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    
      chart.draw(d, options);
    }
  });
  

  
}
