const express = require('express');
const app = express(); //import express lib and assign it to this var (and instantiate it)

app.use(express.static('static_files')); //we're going to use a special string to denote our static files w/i our directory where files requested should be accessed from

app.listen(3000, () =>{
  console.log('Server started at local host 3000');
}); //to start a server


