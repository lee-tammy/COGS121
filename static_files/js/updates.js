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
    database.ref("users/" + user + "/clients").once("value", (snapshot)=>{
        const clients = snapshot.val();

        clients.forEach(client => {
            database.ref("users/" + client).once("value", (snapshot)=>{
                
                const clientInfo = snapshot.val();
 
                if(clientInfo.surveys != undefined && clientInfo.surveys != null){
                    
                 
                    database.ref("users/" + client + "/surveys").once("value", (snapshot)=>{
                        snapshot.forEach(function(childSnapshot) {
                            var childData = childSnapshot.val();

                            var td1 = document.getElementById('td1');
                            var text = document.createTextNode(clientInfo.firstName + " " + 
                                    clientInfo.lastName + " finished a survey on " + childData.date);
                            td1.appendChild(text);
                            td1.appendChild(document.createElement("br"));
                        });

                        
                    });

                    
                }
                
            });
        });
        
    });
    
});
