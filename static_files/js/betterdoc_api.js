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

    $('#read-button').click(() => {
      console.log('function clicked');

      $(document.getElementById('content-placeholder')).empty();

      database.ref('betterdoc').once('value', (snapshot) => {
        const data = snapshot.val();
        const specialty_uid = document.getElementById("specialty_uid").value;

        var resource_url = "https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=" + specialty_uid
        + "&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=7&user_key=" + data;

        $.get(resource_url, function (data) {
            // data: { meta: {<metadata>}, data: {<array[Practice]>} }
            var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
            document.getElementById('content-placeholder').innerHTML = template(data);
        });
      });
    });
  });
