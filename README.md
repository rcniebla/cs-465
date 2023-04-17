# cs-465
CS-465-T4243 Full Stack Development I 23EW4
Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

Going from express's handling the front end to Angular with a SPA is completely differrent.  SPA pages are quicka as they onlu load once, the development for them is more streamlined as they can share common code, with developer options it is a lot earies to tell what is going on in the network. The same cant be said for multi page apps.

Why did the backend use a NoSQL MongoDB database?

In the MEAN stack we use mongo specifically we are using NoSQL because they have less limitations than traditional databases which allows us to do more freely.  However that amount of freedom can be a detriment without a solid schema to back it up. 

Functionality
How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON and Java script are different things so I am not exactly sure how to approach this question.  JSON is Javascript Object Notation and JavaScript is an entire languague.  If we are just comparing objects though I would say that JSON objects are more strict than javascript objects with can be way too flexible at times. JSON objects are widely used to transmit data from the front end to the back end and vice versa.  

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

A perfect example wouyld be refactoring from multipage app to a single page app.  The befits with the SPA are the SPA is faster as it only loads once so the common chunks like imports of googleFonts done have to happen for every individual page. Spas can use the developer tools in chome and firefox more effectively as all that data goes through one page so you can see where the data is coming and going without having to reload. 

Testing
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.  

Testing endpoints with security is not really very difficult, at least with the setups I have seen and used.  Essentailly you get a bearers token and add it into the bearer token section of postman.  The more difficult part for me is to remember which enpoints need which fields so we can get a 200. An enpoint is basically a entry point to receive ans transmit data from the API. The reason the enpoints need to be secured is the same answer.  If someone is trying to get unauthorized access to the system some the best method would be to attach the endpoints and without security you have no way of preventing them from haveing complete access to your data.

Reflection
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has helped me get more experienced with different tech stacks as the only one I have had significant experience with is Angular/Java/Mongo.  Seeing how the MEAN stack is set up it makes me more curious to see other setups and how they approach some common problems differently. 
