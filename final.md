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
1. Storboard #1
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
## Therapist POV
### Login
<b>login.html</b> The webpage displays the login form where the therapist or client can log into the web-application to their prospective home pages. There is also the functionality to make and start a therapist account (discussed more in the sign-up.html section).<br><br>

<b>login.js</b><br><br>

<b>therapist-home.js</b><br><br>

<b>style.css</b> Styles the icons, text, and layout for login.html.<br>

### Sign-up
<b>sign-up.html</b> The webpage displays a sign-up form where it would take the user's username, first name, last name, gender, and email. After making a new account, the page would redirect you to the login page.<br><br>

<b>login.js</b><br><br>

<b>sign-up.js</b><br><br>

<b>style.css</b> Styles the icons, text, and layout for sign-up.html.<br>

### Therapist Home
<b>therapist-home.html</b> The webpage displays two different buttons. <br><br>

<b>style.css</b> Styles the icons, text, and layout for client-list.html.<br>

### Client List
<b>client-list.html</b> The webpage displays the list of clients under the user's account. The webpage also gives the user an opportunity to make an account for new clients (discussed more in the add-client.html section). <br><br>

<b>client-list.js</b><br><br>

<b>add-client.js</b><br><br>

<b>style.css</b> Styles the icons, text, and layout for client-list.html.<br>

### Add Client
<b>add-client.html</b> The webpage displays sign-up form for the user's new client that takes the client's username, first name, last name, gender, age, and select what type of evaluations needed to be implemented for that user. Each type of evaluation is a set of survey questions that the client would need to answer regarding that subject.<br><br>

<b>client-list.js</b><br><br>

<b>add-client.js</b><br><br>

<b>style.css</b> Styles the icons, text, and layout for add-client.html.<br>

### Client Profile
<b>client-profile.html</b> Depending on the client, the webpage displays the client's name, username, sex, age, and the list of evaluation results that were taken by that client. When you click on one of the evaluations, it will redirect the user to eval-page.html (discussed more in the eval-page.html). The user has the ability to change the evaluation type (discussed more in the eval-selection.html).<br><br>

<b>client-profile.js</b><br><br>

<b>style.css</b> Styles the icons, text, and layout for client-profile.html.<br>

### Evaluation Page
<b>eval-page.html</b> The webpage displays a data visualization of the client's responses over the course of a few days. The visualization is a line graph that displays the client's responses for each evaluation type.<br><br>

<b>eval-page.js</b><br><br>

<b>style.css</b> Styles the icons, text, and layout for eval-page.html.<br>

### Evaluation Selection
<b>eval-selection.html</b> The webpage displays a list of evaluation types the user would like to use or change based on that client.<br><br>

<b>eval-selection.js</b><br><br>

<b>style.css</b> Styles the icons, text, and layout for eval-selection.html.<br>

### Doctor Search
<b>doc-search.html</b> The webpage displays the information grabbed from the BetterDoctor API. Since this API displays a list of doctors within the user's location, it asks the user to access their location via Geolocation API. It takes the value of the inputed specialty (and location) and translate that to an HTML url request sent to the BetterDoctor server to receive the data.<br><br>

<b>betterdoc_api.js</b> The JavaScript file gets the BetterDoctor API key from the Firebase and gets the user's location using the Geolocation API. With the API key and location, it sets up a HTML url request to send to the Better
server. After receiving the data, it displays that information using the Handlebars function.<br><br>

<b>style.css</b> Styles the icons, text, and layout for doc-search.html.<br>

## Client POV
### Client Home
<b>client-home.html</b> The webpage displays the animation of an animal that is either hungry or full depending on if the client has finished the survey (discussed more in the survey.html). Based on date, if the client hasn't finished the survey that day, then the animation will be "hungry". When the client finishes the survey, then animation will appear full.<br><br>

<b>client-home.js</b><br><br>

<b>style.css</b> Styles the icons, text, and layout for client-home.html.<br>

### Survey
<b>survey.html</b> The webpage displays a list of questions the client must answer to feed the animation. After each finished set of evaluation, the client feeds the animal until they have finished their survey. <br><br>

<b>survey.js</b><br><br>

<b>style.css</b> Styles the icons and layout for survey.html.<br>

# 2-Minute Demo Video
Insert Link HERE
