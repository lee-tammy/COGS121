const express = require('express');
const app = express(); //import express lib and assign it to this var (and instantiate it)

app.use(express.static('static_files')); //we're going to use a special string to denote our static files w/i our directory where files requested should be accessed from

const fakeDatabase = {
	"stephensmith": {
		age: 10,
		sex: 'Male',
		location: 'La Jolla, CA',
		notes: 'Likes to be called Steve',
		photo: 'client-stephen-smith.jpg',
		firstName: "Stephen",
		lastName: "Smith"
	},
	"samanthalee": {
		age: 6,
		sex: 'Female',
		location: 'Del Mar, CA',
		notes: 'New Patient',
		photo: 'client-stephen-smith.jpg',
		firstName: "Samantha",
		lastName: "Lee"
	},
	"richardcole": {
		age: 8,
		sex: 'Male',
		location: 'San Diego, CA',
		notes: 'Missed 5/1 appointment',
		photo: 'client-stephen-smith.jpg',
		firstName: "Richard",
		lastName: "Cole"
	},
	"sethchambers": {
		age: 10,
		sex: 'Male',
		location: 'Orange County, CA',
		notes: 'High alert',
		photo: 'client-stephen-smith.jpg',
		firstName: "Seth",
		lastName: "Chambers"
	}
};

/*Get Requests*/

//made call from browser to server
app.get('/client-list', (req, res) => { //request and response
	const clientList = Object.keys(fakeDatabase);
	console.log('Requested client list: ', clientList);//only users
	res.send(clientList);
});//sets a route/http get request, if someone is trying to "get" /users link, then run this funciton. a response from teh server to the browser is needed after this

app.get('/client-profile/:username', (req, res) => {
	const username = req.params.username; //request object, params contains parameters of request
	const val = fakeDatabase[username];

	if(val) { //if val is not empty
		res.send(val);
	} else {
		res.send({});
	}
});

/*Listen Requests*/
app.listen(3000, () =>{
  console.log('Server started at local host 3000');
}); //to start a server
