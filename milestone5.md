Team Name: TAAJ <br>
Team Members: Tammy Lee, Allison Patacsil, Amanda Hittelman, Janselle Justo

# Scenario of Target User Population
<b>Primary Target User Population:</b> Therapists treating 8-year-old to 11-year-old children.<br>
<br><b>Secondary Target User Population:</b> 8-year-old to 11-year-old children.<br>
<br>Stacy is a therapist for a 10-year-old girl named Alex who moved from Los Angeles, CA to San Jose, CA. According to Alex's parents, Alex had changing moods and refuses to talk to them about school even though they received complaints about her behavior. After a few weeks of meeting Alex, Stacy is having trouble getting her to talk about her new school and would sit there looking at the clock as the time passes by. By searching ways to help children express themselves, Stacy found the Aminals web-application catered toward therapists where they can monitor their clients' relationships, moods, and activities. Seeing this as a potential solution to get Alex to talk, she made an account for herself and Alex. After a few weeks of using the web-application, Stacy was able to find out that Alex was being bullied in school and blackmailed. Therefore, Stacy made the necessary actions to help Alex by seeking other experts to help her problem at school.<br>

# UI Changes
Since Milestone 4, we have done the following UI changes:
1. Got rid of a webpage named "client-status.html" and moved the information from that webpage to another webpaged named "client-profile.html".
2. Realigned any off center elements throughout the entirety of the UI
3. Added custom icons for different lists in the surveys and evaluations. 
4. Fix the UI for the webpage named "doc-search.html" for the dropdown menu and table.
5. Fix the evaluation lists to make it more aesthetics.
6. Create the final survey questions for the data visualizations.
7. Implement data visualization of client status (explained more in "Data Visualizations").

# Screenshots of updated Webpages
### Login
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/login.png)

### Signup
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/signup.png)

## Therapist POV

### Therapist Home 
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/therapist-home.png)

### Therapist Profile 
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/therapist-profile.png)

### Therapist Updates
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/updates.png)

### Client List
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/client-list.png)

### Add Client 
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/add-client.png)

### Client Profile
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/client-profile.png)

### Client Status
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/client-status.png)

### Evaluation Page - Sleep
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/eval-page-sleep.png)

### Evaluation Selection
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/eval-selection.png)

## Client POV

### Client Home
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/client-home.png)

### Survey 
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/survey.png)

### User Profile 
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/user-profile.png)

### User Profile 
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/user-profile.png)

### Evaluation Page - Sleep
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/eval-page-sleep.png)

### Settings
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/settings.png)


## Data Visualizations - Therapist POV Only
For the data visualizations, we first made dummy data for on client on the Firebase that corresponds numbered "sleep-related" survey questions that would be answered by the client. The data will be displayed along a two dimensional line graph with the y-axis as the answers (rating of 1-4 that respectively corresponds to Strongly Disagree to Strongly Agree) and the x-axis as the dates of when those questions were answered (Refer to <b>"Zoomed-In" Evaluation Results</b>). We then integrated a Google Charts API to display the graph by using that client's data grabbed from the Firebase specifically under "evals" using a coded function named "drawChart" in a JavaScript file. These charts can only be displayed in the Therapist POV because it allows the therapist to see the long-term results of their clients' mental health such that any large discrepancies would initiate a one-on-one meeting or other immediate actions.

### Evaluations Results
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/chart.png)

### "Zoomed-In" Evaluation Results
![](https://github.com/lee-tammy/COGS121/blob/master/images/milestone-5/chart-zoom-in.png)

# Possible Implementations to Visualizations
Compared to our current visualizations, we wish to have an animated visualization that can pinpoint any large discrepancies of the client's answers. From this, the therapist can realize common patterns and initiate actions that are needed to mitigate those discrepancies. Another feature the visualizations would have is the ability to zoom into a specific area on the graph such that it can display a more detailed representation of that area. When zoomed into that area, the maximums or minimums would automatically display the value of the answer (rating of 1-4) and the date of when that value was entered. By doing this, the therapist can ask the client about that specific date when meeting one-on-one. Though these features are beyond the scope of the class and out of our skill level, these features would effectively help therapists review large long-term data from their clients.
