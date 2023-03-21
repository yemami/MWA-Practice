Project Report 

 

Title: Door Dash (A door dash web app clone with similar feature) 

Description 

The app lets users sign up using their personal details like name, email, phone number, address... and can also log in and view nearby restaurants. 

Each restaurant has a name, location, and a list of menus with their prices. 

Users can place orders and checkout the cart. 

Technologies used: 

Backend: 

Nodejs: a cross-platform, open-source server environment that runs on the V8 JS engine and executes JS code outside a web browser. 

Express: Backend web application framework for building REST APIs with NodeJS. 

MongoDB on Atlas: A multi-cloud developer data platform. MongoDB is a NoSQL document-oriented database system that uses JSON-like documents with flexible schema. 

Frontend: 

Angular: Open-source web application framework based on TypeScript. 

Things we learned/ problems and solutions: 

CSS Styling 

Lazy-loading modules 

Gmail integration using nodemailer: For sending emails to the users. 

Third party API integration such as freemaptools for converting zip codes to coordinates 

Building custom Angular components 

Using MongoDB on Atlas: Cloud database service for MongDB. 

Daily schedule 

Apart from Teams group chat, we met three times in person, two times for working on the project and share ideas on how to implement certain features and the last time to wrap up everything we have done for submission. 

Daily Tasks: 

Day 1: Friday February 3, 2023 

Creating backend routes for restaurants, orders, and users - Gedeon 

Creating controllers to handle user signup and login - Abel 

Creating controllers for CRUD operation on restaurants and orders – Gedeon 

Creating controllers for user accounts details- Romeo 

Styling frontend pages - Gedeon 

Day 2: Saturday February 4, 2023 

Setting up MongoDB on Atlas - Romeo 

Building components - Abel 

Configuring and authorizing Gmail API for sending emails - Romeo 

Integration of freemaptools for converting ZIP codes to coordinates - Gedeon 

Day 3: Tuesday February 7, 2023 

Wrapping up the project, manual testing, and adjusting a few things. Gedeon, Abel, Romeo 

Sprint - 1
 # Pages:
1. HomePage 
 - publicly accessible and should have nice ui with picture, feature popular restarunts near by the visiting clients location, should have meny for login and signup
2. Logged in User Homepage
- render different components or update the components on the public homepage when a user logs in. Show the users favorite restaurant and give the ability to search and place orders
3. Restaurant 
-  display a restarutnt with all its menu with a functionality to add a menu to a cart
4. Cart
-show items in a cart and have button to checkout page
5. checkout
-place order and show success message. maybe send an email

6. Orders
-show the users order
7. Account
-display the users account information with the functionality to edit it




[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=9992129)
This repository should be "Accepted/Forked" by team leaders only. Team leaders will add their team members as "collaborators" so they could collaborate and push their code.  
  
# MWA-Final-Project-January-2023
### Final Project
### Application specifications and requirements
It’s up to you to decide your project specs and requirements. Take your time to plan your project idea, write down a short description for it, set your goals, and have a clear scope. Your project must use the following:  
* Implement a login-based system with JWT.  
* Use at least one featured lazy-loaded module in the frontend and proper REST design in the backend.
* Projects must have proper UI complies with the web standards.
  
Note: Chat and e-commerce/cart applications are not allowed. Set a more challenging goal.
  
### Technical information
* You must use all the technologies we learned in our course (MEAN stack).
* Design your own NoSQL DB schemas and app structure (let me know if you need help with this). Start by planning your screens. (use DB as a service – Atlas).
* All Angular routes should be protected from public access by JWT (except sign-up and sign-in routes)
* All Express routes should be protected from public access by JWT (except sign-up and sign-in routes)
* A daily push is required to track your code and performance. If you miss a push that will affect your final grade.
* Do not push any private key of any service to Git. (If found, your account will be terminated and you may be legally sued by service providers). Write your keys in a config file (npm i dotenv) and add the filename to .gitignore
* Do not spend more than two hours on a problem, move on, or find an alternative.
  
### Notes and daily routine
You are free to work from any comfortable spot you may choose and are not required to come or to be in the classroom. I'm available to assist you any day through Teams from 10:00 AM to 12:30 PM, and from 2:00 PM to 3:00 PM, including the weekend. The classroom will be open and available all days.
    
### Final Evaluation
The last push should be performed before Tuesday 9 pm. I will meet online with every team individually on Wednesday and Thursday mornings and evaluate the final project code. 
  
It is required from every team lead to send me a report to asaad@miu.edu on Tuesday before 9 pm with the following details:
* A summary of the project idea.
* A list of all problems/solutions/new things you learned during the project. 
* Your daily schedule, including the daily tasks assigned to each team member.
* Copy/paste your config file (all secret keys) and include that in the email.
    
Good luck and happy coding!
  
Groups should not work with each other or share or copy code from any source. Remember to respect the code honor submission policy. All written code must be original. Presenting something as one’s own work when it came from another source is plagiarism and is forbidden. Plagiarism is a very serious thing in all American academic institutions and is guarded against vigilantly by every professor. 
