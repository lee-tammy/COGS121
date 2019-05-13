var specialty = "";

/*Getting Location from User... still needs work
function setUpLocation() {
  if (navigator.geolocation) {
    window.location = navigator.geolocation.getCurrentPosition();
  } else {
    console.log = "Geolocation is not supported by this browser";
  }
  var input = document.getElementById('search_doctor');
}*/

function getDoctorResults() {
  var x = document.getElementById("specialty_uid").value;
  //paramters from text array is the following: name and specialty_uid

  /*BetterDoctor, Inc. API*/
  var api_key = '912d03ce18bfff9d5c814dd70922a0e1';

  var resource_url = "https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=" + specialty
  + "&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=" + api_key;

  $.get(resource_url, function (data) {
      // data: { meta: {<metadata>}, data: {<array[Practice]>} }
      var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
      document.getElementById('content-placeholder').innerHTML = template(data);
  });
}
