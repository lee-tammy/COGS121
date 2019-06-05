/* betterdoc_api.js: The JavaScript file gets the BetterDoctor API key from the
   Firebase and gets the user's location using the Geolocation API. With the API
   key and location, it sets up a HTML url request to send to the Better server.
   After receiving the data, it displays that information using the Handlebars
   function.
*/
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

      //declare geolocation variables
      var latitude = "";
      var longitude = "";

      //Geolocation API implemented
      function showPosition(position) {
          console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude)
          window.latitude = String(position.coords.latitude);
          window.longitude = String(position.coords.longitude);
      }
      function showError(error) {
          switch (error.code) {
              case error.PERMISSION_DENIED:
                  x.innerHTML = "User denied the request for Geolocation.";
                  break;
              case error.POSITION_UNAVAILABLE:
                  x.innerHTML = "Location information is unavailable.";
                  break;
              case error.TIMEOUT:
                  x.innerHTML = "The request to get user location timed out.";
                  break;
              case error.UNKNOWN_ERR:
                  x.innerHTML = "An unknown error occurred.";
                  break;
          }
      }
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition)
      } else {
          console.log("Geolocation API doesn't supported.")
      }


      $(document.getElementById('content-placeholder')).empty();

      database.ref('betterdoc').once('value', (snapshot) => {
        const data = snapshot.val();
        const specialty_uid = document.getElementById("specialty_uid").value;

        var resource_url = "https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=" + specialty_uid
        + "&location=" + window.latitude + "%2C" + window.longitude + "%2C100&user_location=" + window.latitude +
        "%2C" + window.longitude + "&skip=0&limit=7&user_key=" + data;

        $.get(resource_url, function (data) {
            // data: { meta: {<metadata>}, data: {<array[Practice]>} }
            var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
            document.getElementById('content-placeholder').innerHTML = template(data);
        });
      });
    });
  });
