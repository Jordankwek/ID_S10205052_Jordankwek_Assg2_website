## Expense tracker
link : https://jordankwek.github.io/ID_S10205052_Jordankwek_Assg2_website/
## Purpose of website :
- XPTRACKER is an expense tracker which aims to help the users keep track of their expenditure. This is done by setting a daily or monthly goal. By doing so, users will be able to save extra income and not exceed their budget. With the use of pie charts, they will know the percentage of what they spend on. There are also other features that will help the users keep track of their expenses which will be further discussed in the later parts of the ReadMe.
  
## Existing Features :
Found in every pages:
1) Collapsable hamburger mobile menu
   - When users change the size of the screen from a computer screen to the mobile screen, the navigation bar will change to a hamburger which displays the links to the other parts of the website
  
2) Dark mode
   - When users click on the dark mode button, the color scheme of the current page the user is on will turn dark which reduces eye strain and improves battery life
  
3) Logo
   - brings the user to the home page upon clicking it which explains to them what the website is about and the functions inside the website

4) Monthly
   - Brings the user to the page which allows them to set a monthly and daily budget on what they will spend on

5) History
   -Brings the user to the page where they can update on what they spent on

## Main page (Click on XPTRACKER Logo) :
1) Form
   - When user enter some input data and submits the form, a pie chart will be displayed on the right side of the form to indicate the percentage of how much the users spend on food, beauty, transport, entertainment and others. This is done so as to allow users to know how much they should allocate on what they spend.
  
2) Purpose
   - The user will be able to understand the use of this website to know what they are currently going to be able to do using this website

3) Functions
   - Allows the users to know what are the various functions in the website

## Monthly page:
1) Total budget/ daily budget/ amount spent
   - It display how much the users set for their budget and how much they have spent. The amount spent will also be deducted from the total budget and daily budget.
  
2) Reddit feed
   - Using reddit's api, the reddit feed will display the latest tips on how the user can save money. 

3) Update budget
   - It updates the amount spent by user and displays in the top part of the page
  
4) Set Budget
   - It sets the monthly and daily budget 

5) Color scheme change
   - If the user exceeds the their daily or monthly budget, the color scheme of the page will turn red 

## History :
1) Past Records
   - Retrieves input from form below and displays it in the table
  
2) Add records into table
   - Prompts user for name of item spent on, the category and the price of it. Upon submission, the data gets stored in the local storage. The data is then retrieved and display in the table

## Future features :
1) Calandar
   - Using google's calendar api, users' will be able to add in items that they might spend on, in the calender in the future. The items added amount will then be updated to the monthly buget

## Technologies used :
1) HTML
   - Create webpages
2) CSS
   - for resetting stylesheet
   - for styling the website
3) JSON
   - Storing and retrieving data from local storage as well as the reddit api
4) Javascript
   - Allows the website to be more interactive
5) Adobe XD
   - for wireframe
6) Google pie chart
   - display pie chart
7) Reddit API
   - display post from reddit

8) JQuery
   - Simplify DOM manipulation

9)  BootStrap
    - designing of website

10) Validator
    - css validator
    - html validator
    - javascript validator
  
## Deployment
Steps to push code from visual studio to github
1) Go to source control
2) Stage all changes 
3) commit the changes
4) add in the commit message
5) push the code to my github

## Credits


The images used in this website were obtained from: 

1) https://www.freshbooks.com/blog/wp-content/uploads/2018/02/tracking-expenses-blog-852x568.png

Resources used: 
1) https://codeactually.com/googlecharts.html (pie chart)
2) https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp (darkmode)
3) https://www.reddit.com/r/MoneySaving/hot.json (api)
4) https://fonts.gstatic.com (fonts)

Inspired by:
1) https://iq.opengenus.org/get-list-of-posts-using-reddit-api/
2) https://www.youtube.com/watch?v=gXkqy0b4M5g

Validators used: 
1) https://validator.w3.org/ (For HTML)
2) https://jigsaw.w3.org/css-validator/ (For CSS)
3) https://jshint.com/ (For Javascript)
