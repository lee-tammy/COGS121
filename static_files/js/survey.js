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

    $("#finish-survey").click(()=>{
        const today = new Date();
        const prettyDate = today.getMonth() + "-" + today.getDate() + "-" + today.getFullYear();
        
        database.ref("users/" + user + "/surveys/" + prettyDate).set({
            date:prettyDate,
            response1:$("input[name='sleep']:checked").val(),
            response2:$("input[name='school']:checked").val(),
            response3:$("#school-indepth").val(),
            response4:$("input[name='day']:checked").val(),
            response5:$("#feeling").val(),
        });
        window.location.href = "client-home.html"
    });
    
});