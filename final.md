Team Name: TAAJ <br>
Team Members: Tammy Lee, Allison Patacsil, Amanda Hittelman, Janselle Justo

# Contributions

### Tammy Lee
1. Storyboard #2
2. Ideation Research
3. Write-up for Milestones
4. Implemented Firebase for therapist & client accounts and survey data results
5. Implemented Google Charts API to display visualizations

### Allison Patacsil
1. Paper Prototype #2
2. Ideation Research
3. Write-up for Milestones
4. Implemented Client List functions noted in client-list.js
5. Implemented Updating Evaluations functions noted in eval-selection.js
6. Implemented Survey functions noted in survey.js

### Amanda Hittleman
1. Storyboard #1
2. Ideation Research
3. Write-up for Milestones
4. In charge of the UI and div placements for all interfaces
5. Created animations for the client-home.html (Client POV)
6. Implemented Survey functions noted in survey.js

### Janselle Justo
1. Paper Prototype #1
2. Ideation Research
3. Write-up for Milestones
4. Skeleton of Web-Application
5. Implementation of Real-World Data External API called BetterDoctor API
6. Video Editing and Narration

# Google Slides Presentation
https://docs.google.com/presentation/d/1RXfkE79YVQvYa7ZI-yiWeymH25Ucy1ngMUmZwXiQE0E/edit?usp=sharing

# File Descriptions
<b>style.css</b> Styles the icons, text, and layout for all pages.<br><br>

<b>localStorage.js</b> Allows us to store the current user in local storage.<br><br>

## Therapist POV
### Login
<b>login.html</b> This webpage displays the login form for returning users where the therapist or client can log into the web-application to their prospective home pages. Additionally, a new therapist can also create an account (discussed more in the sign-up.html section).<br><br>

<b>login.js</b> Grabs the username that the user entered and checks to see if that user is in Firebase.  If the username is found, the account type is checked and the user is directed either to the therapist or client home page.  If the username is invalid, the user is alerted and must enter a valid username to continue.<br><br>

### Sign-up
<b>sign-up.html</b> This webpage displays a sign-up form where users enter their username, first name, last name, gender, and email. After making a new account, they will be redirected back to the login page.<br><br>

<b>sign-up.js</b> Checks to see if the therapist has entered a username that has not been taken yet.  If the username is available, a new account will be created and the therapist's entered information will be put in Firebase.  If the username is unavailable, alert to enter a different one.<br><br>

### Therapist Home
<b>therapist-home.html</b> This webpage displays two buttons that direct the therapist either to their client list or to the "recommend doctor" page.<br><br>

<b>therapist-home.js</b> Grabs the therapist's name from local storage and displays a personalized greeting.<br><br>

### Client List
<b>client-list.html</b> This webpage displays the therapist's clients, which they can click to view the client's profile. Additionally, they can add a client to by creating a new client account.<br><br>

<b>client-list.js</b> Grab the list of clients from Firebase, and display them on the page with clickable links to their profile.<br><br>

<b>style.css</b> Styles the icons, text, and layout for client-list.html.<br>

### Add Client
<b>add-client.html</b> The webpage displays sign-up form for the user's new client that takes the client's username, first name, last name, gender, age, and select what type of evaluations needed to be implemented for that user. Each type of evaluation is a set of survey questions that the client would need to answer regarding that subject.<br><br>

<b>add-client.js</b> Creates an account for the new client by putting the entered information into Firebase, as well as adding the new client to the therapist's client list.<br><br>

### Client Profile
<b>client-profile.html</b> This webpage displays the client's name, username, sex, age, and the list of evaluations completed by the client, which you can click to see the results of the evaluations (discussed more in the eval-page.html). Additionally, the therapist can assign the client different evaluations if necessary(discussed more in the eval-selection.html).<br><br>

<b>client-profile.js</b> Grabs the client's profile information and assigned evaluations and displays them on the webpage, as well as creating links to the client's evaluation responses.<br><br>

### Evaluation Page
<b>eval-page.html</b> This webpage displays a data visualization of the client's responses over the course of a few days. The visualization is a line graph that displays the client's responses for the selected evaluation.<br><br>

<b>eval-page.js</b> Looks for the client name and evaluation in Firebase, gets all the surveys, creates a table(2d array), then inserts it into Google charts linechart constructor then we render the linechart on the screen.<br><br>

### Evaluation Selection
<b>eval-selection.html</b> This webpage displays a list of evaluation types that therapist can select from to assign certain evaluations to a client.<br><br>

<b>eval-selection.js</b> Grabs what evaluations the therapist has selected for the client and changes the client's assigned evaluations in Firebase.<br><br>

### Doctor Search
<b>doc-search.html</b> This webpage displays the information grabbed from the BetterDoctor API. Since this API displays a list of doctors within the user's location, it asks the user to access their location via Geolocation API. It takes the value of the inputed specialty (and location) and translate that to an HTML url request sent to the BetterDoctor server to receive the data.<br><br>

<b>betterdoc_api.js</b> The JavaScript file gets the BetterDoctor API key from the Firebase and gets the user's location using the Geolocation API. With the API key and location, it sets up a HTML url request to send to the Better server. After receiving the data, it displays that information using the Handlebars function.<br><br>

## Client POV
### Client Home
<b>client-home.html</b> This webpage displays the animation of an animal that is either hungry or full depending on if the client has finished the survey (discussed more in the survey.html). Based on date, if the client hasn't finished the survey that day, then the animation will be "hungry". When the client finishes the survey, then animation will appear full.<br><br>

<b>client-home.js</b> Grabs the username from local storage and displays a personalized greeting.  Grabs the date of the most recent evaluations responses from Firebase.  If the date is not today, display a "hungry cat", and if the date is today (meaning they filled out their evaluations already), display a "full cat".<br><br>

### Survey
<b>survey.html</b> This webpage displays the assigned evaluations the client must complete to feed the animated cat. After each finished set of evaluation, the client feeds the animal until they have finished their survey. <br><br>

<b>survey.js</b> Grabs the client's selected responses and inserts into Firebase if all questions were answered.  The user must answer all the questions before continuing.<br><br>

### Profiles
<b>therapist-profile.html</b> This webpage displays the therapist's profile information.<br><br>

<b>therapist-profile.js</b> Grabs the therapist's profile information from Firebase and displays it.<br><br>

<b>user-profile.html</b> This webpage displays the client's profile information.<br><br>

<b>user-profile.js</b> Grabs the client's profile information from Firebase and displays it.<br><br>

# 2-Minute Demo Video
https://drive.google.com/a/ucsd.edu/file/d/1mwM8l1biB5IaBdZfTRt9XtOMR5tquAgN/view?usp=sharing
One feature could not be displayed while screen recording.
