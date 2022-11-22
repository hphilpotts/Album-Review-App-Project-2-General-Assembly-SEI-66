<p align="center">
    <img src="public/readme/GA-header.png">
</p>

# 'Album Review App' : SEI Project 2             

## Description:       

<!-- TODO : link to Milos' GitHub profile -->

This is a full-stack web app - _Album Review App_: a site where users can add and then review music albums - built as part of a paired project with [Milos Jocic](https://github.com/milosjocic1) over the course of a week, for the second project in GA London's Software Engineering Immersive course. The app uses an Express framework, Node.js platform and an Atlas-hosted MongoDB NoSQL database. The deployed project was presented to my GA Instructional Team and fellow SEI cohort on 26/08/22.        

I was 'Team Leader' for this project, taking responsibility for Git version control and deployment of the completed app. I worked on broader functionality across the site both in Frontend and Backend: setting up `server.js` config, creating Models, writing routes and APIs, implementing Views, forms and user input. I also took ownership of UI styling and mobile responsive formatting.        

![Main app image](./public/readme/project2_main.png)        

## Links:        

[Deployment link](http://albumsei66.herokuapp.com/auth/landing)      
[Google Doc README](https://docs.google.com/document/d/1NRj3XemKBEfr_EkvYh_mGM_67lGeFrmeTPrK0aQonyQ/edit#heading=h.164sp507m3e)    

## Getting started & Install:       

Please feel free to sign in as user: `guest@guest.com` // pw: `London2012`, or you can create your own account with 'Sign Up'.      

Please note that at present, there is an issue with image upload where Heroku's ephemeral file storage deletes any newly uploaded images after less than 24 hours. As such, many of the image links are currently broken where uploaded files have been removed, and any images newly uploaded will not persist past a 24 hour period before breaking.           

To contribute, please fork from [GitHub](https://github.com/hphilpotts/Album-Review-App-Project-2-General-Assembly-SEI-66) and then run `npm i` to install the required dependencies, alternatively see `package.json`, submitting a pull request for any completed contributions.      

## Technologies used:       

- HTML5, CSS3, ES6 JavaScript, EJS, Mongoose        
- Express, Node.js, Atlas-hosted MongoDB        
- Express-EJS-Layouts, Multer image upload, Heroku app hosting       
- Visual Studio Code, MongoDB Compass       

## Brief & Project aims:        

The brief for this project was to build a web app as a pair 'from scratch', using an Express framework. Technical requirements included:        
- Use Express, Mongoose, Node.js and MongoDB to build the app, host the completed app on Heroku.              
- Employ MVC architecture in building the app.      
- Include a User resource, with signup/in and authentication/authorisation.            
- Include two other resources with full CRUD functionality.          

Stretch goals included:     
- Make the app mobile responsive.       
- Make use of a CSS library such as Bootstrap.      
- Add image upload functionality.       

The aim of the project was to consolidate our learning from weeks 4 & 5 of the course: in particular the concepts of 'Frontend' and 'Backend', OOJS, and non-relational database associations, as well as the use of Express, EJS, Mongoose, and MongoDB. In addition to consolidating knowledge, this project provided a first experience of working with another developer, with all the additional considerations and necessities, for example management of Git/GitHub process, communication and planning, and collaborative problem-solving.        

## Key takeaways and learnings:     

This was a really exciting project for me, as it was the first time I had properly collaborated with another developer on a piece of work. We had been given relatively little in the way of guidance or instructions when it came to working as a pair; as a result, we had to very much learn how best to code together 'on the fly' which was both challenging and rewarding. I am really grateful for the fact that Milos and I had a great working dynamic: our skills and approaches complemented each other and we had fun working on this project together - for me this was a great start to collaborative coding!       

Much of the project was completed using very close collaboration, particularly using screen sharing. The benefits of working together became apparent very quickly: two pairs of eyes catch bugs more quickly, and one person may remember a small but crucial tidbit of information from a past lecture where the other does not. Equally, the challenges of working as a pair rather than solo also became apparent very quickly: Git & GitHub become significantly more complicated to use compared to lone working, code conflicts are many and frequently encountered, and time management becomes more important.       

Ultimately, this project was really enjoyable, and the feeling of collaboratively producing something you are proud of made me feel excited for my future working in software development. I learned a lot both technically and in terms of how best to work as a team, and came away from the project more confident in my skills and knowledge.

Some key learnings from this project were as follows:       

- Git discipline is key: as soon as this slips, things start to go wrong quickly. A methodical, structured approach combined with clear and consistent communication was crucial for smooth merges and seamless pull requests. Further to this, merge issues are not a disaster: they are part and parcel of collaborative coding; don't panic and don't rush resolving conflicts!        
- Debugging as a pair is a great way of resolving issues quickly when you have run out of ideas working solo. Fresh eyes and a new perspective are often the key to unlocking a problem straight away!      
- It's fine to change your project idea (if you do it early enough).     
- Even if it is initially unfamiliar, EJS is 'still just JavaScript' (albeit with some differences and limitations): at first I struggled to translate my understanding of JS into using EJS, but once I got over the few differences it just 'clicked'. This was a great feeling! Also, Express-EJS-layouts template-based views are a quick, powerful and efficient way of building and managing a web app - I really enjoyed using these.           
- Finding the 'right' communication is key: for us, this was about striking a balance between consistent and frequent communication in order to collaborate effectively, without needlessly breaking each others' concentration when working. Slack messages were great for non-urgent comms, whereas zoom was great for more immediate communication. Our [Trello board](https://trello.com/b/0mU24NKC/project-2-express-album) below was key to keeping track of who was doing what:         

![Trello Board screenshot](public/readme/Trello.png)      

- Lastly, bugs and errors are part and parcel of coding and shouldn't be a source of panic. Crucially, chasing bugs should never lead to the loss of work and code. Calm decisions are good decisions, rushed and impulsive decisions are typically **not** good decisions.       

## Successes and Challenges:      

Main 'wins' and successes from this project included:       
- Gaining confidence working with the Express framework, implementing CRUD operations, writing in EJS. Also, building a clearer understanding around the concepts of frontend/client-side and backend/server-side.          
- Getting experience working as a team rather than solo, as well as building confidence using Git/GitHub version control as a pair, and resolving merge conflicts. Further to this, I really enjoyed the experience of being a Team Lead for this project: particularly setting direction, providing support, having responsibility for the main GitHub repository, and hosting the finished app on Heroku.      
- Building confidence working with CSS: at times I struggled with CSS in Unit/Project 1, however during this project I found the concepts that previously seemed challenging - for example, positioning and flexbox - started to make more and more sense the longer I worked on them and the more issues I resolved.       
- Seeing an API work correctly after a lot of work was a great feeling and very quickly got me interested in working on backend code.              

Challenges faced during the project included:       
- Managing Git/GitHub repositories, forks, branches and merges between two contributors for the first time. At points this was challenging, however this also made for a great learning experience (despite some dark moments where time and/or work was lost).      
- Facing merge conflicts: at first we assumed this was because we were doing something wrong - and indeed that merge conflicts were something to be worried about rather than expected - and this led to moments of panic (which is _not_ the right way to approach coding).        
- Backend error terminal messages were daunting at first, being longer and less transparent than typical frontend messages, however in time we learned that the key bits are normally at the start or end of the message.       
- Finding a balance between using Bootstrap to quickly add pre-made styling and elements, and using CSS to build and style our app in a more precise way that better suited our needs. Bootstrap is great for specific, quick, polished additions to the app, however I found that if Bootstrap did not provide exactly what we needed, it was quicker to 'custom make' elements of our site rather than lose significant amounts of time to trying to amend and wrangle Bootstrap into doing what we wanted! Further to this, conflicts can arise between Bootstrap CSS and vanilla CSS if care is not taken.        
- Lastly, integrating image uploads (and getting this to work correctly) proved a challenge - doubly so when the app is hosted on Heroku rather than locally.       

## Bugs & Issues:       

![Broken image links](public/readme/brokenimages.png)       

- Uploaded images are lost (and therefore `<img src=''/>` links break) after <24 hours: this is due to Heroku's ephemeral filesystem.        
- Upload functionality on 'Edit Albums' view is not working.        
- User sessions do not save consistently, as such login is occasionally required again during a single session.         
- User views not implemented, header link instead directs to the main page.     

## Future improvements:     

- All image upload functionality fixed and stabilised.      
- Full mobile-responsive formatting.        
- Delete album functionality hidden, edit functionality protected.      
- Spotify API for album info, artwork.      
- Change ‘add review’ functionality where the user can click an ‘add review’ button on any album.             
- Search and filter by users, artists, genres.      
- Refactor code and remove unneeded comments, console.logs() etc.       
- Come up with a better name...!        

## Production Process:      

### 08/09/22 | Day 0 | Brief issued, planning:      

Our initial project idea was a 'DIY' app where users could upload and share instructions and projects. I set up our Trello board, and using Figma's 'multiplayer' collaboration we jointly wireframed our project and wrote out our ERD [here](https://www.figma.com/file/G63VmlG1NHGvTbEyLctO6H/DIY-Blog-Wireframes?node-id=0%3A1).               

![ERD on Figma](public/readme//ERD.png)     

![Wireframe 1 from Figma](public/readme/wireframe1.png)     

![Wireframe 2 from Figma](public/readme/wireframe2.png)     

This idea was changed to an Album Review App on day 2: this was an idea that we were both more excited about and therefore both bought into more.       
    
### 09/09/22 | Day 1 | Production:      

My primary focus today was on getting the app structure setup: server config, MVC architecture, key dependencies; and getting our respective repositories set up correctly.      

After setting up the app, adding config to `server.js`, and creating our Models based on our ERD, I then moved on to my first CRUD APIs and views.      

We decided early on that clearly and cleanly splitting workstreams was helpful, as it minimised the time we spent editing the same files at the same time (thus reducing conflicts) and reduced the likelihood of duplication of work.       

Despite this, we still ran into merge issues early on. In hindsight, the issues seen could have been minimised by running `git fetch` in the forked repo and resolving merge issues there, rather than pushing two strongly differing versions at the same time and resolving in the main repo. Eventually through screen sharing we were able to fix merge issues and get going again.      

### 12/09/22 | Day 2 | Production:      

After the weekend we made the decision to switch project direction and go for an Album Review App rather than a DIY one - I'm really glad we did this, and it was early enough in the project that judicious use of 'find + replace' was enough to quickly complete the needed changes.        

I quickly found when trying to implement 'add another input field to form' functionality that 'vanilla' JS DOM manipulation wasn't working as expected when I wrote:        

```
<%  const newInput = document.createElement("input");
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('name', 'trackList');
    newInput.setAttribute('class', 'form-control');
    const parentElement = document.getElementById('track-parent');
    function newElement(){
        parentElement.appendChild(newInput);
    }
    document.getElementById("add-field").addEventListener(click, newElement);
%>
```

I was getting `document is not defined` - a quick bit of googling revealed that "_You can't use document inside your ejs tags because that code is executed on the server_.". A change of approach was required!      

First, using similar code in a `main.js` file allowed for just one input box to be added. I then tried using jQuery instead like so and it worked:      

![jQuery to the rescue](public/readme/jquery.png)       

Outside of the above 'puzzle', this was a productive day. Importantly I had learned important lessons about (and gained confidence in) using EJS vs. JS as above!       

### 13/09/22 | Day 3 | Production:      

After some difficulty getting data from the database to populate, it turned out (surprise, surprise) that I needed...`.populate()` within my APIs:          

![use of populate()](public/readme/populate.png)        

Ensuring Album documents and User documents are updated correctly when reviews are added was a challenge but also a key step. Milos implemented User association through using a hidden input field for `currentUser._id` within 'Create Review' form, I implemented associating by reference with Album as follows:        

![associating review-album](public/readme/albumRelation.png)        
_- Update Albums with reviews in reviews controller._       

A further challenge faced was displaying linked reviews within Album Detail GET views, as well as then also displaying the Users who created the displayed reviews. Eventually - after a lot of documentation and _stackoverflow.com_ - I sought advice from instructors who guided me to the below solution:       

```
    Album.findById(req.query.id).populate({ 
        path: 'review',
        populate: {
          path: 'createdBy',
          model: 'User'
        } 
```

_Not something I think I could have worked out solo - an important reminder that sometimes, asking for help is the best thing to do!_       

The last key challenge of the day was where in the Review model, `createdBy` was an array:        

![createdBy field in Review model](public/readme/reviewModel.png)       

Which - after some trial and error - required the following code (including use of `index 0`) to correctly display in `album/detail.ejs`:   

`<div> Reviewed by: <a href="/review/detail?id=<%= review._id %>"><%= review.createdBy[0].username %></a>, rating: <%= review.rating %></div>`      

### 14/09/22 | Day 4 | Production:      

I predominantly spent this day on UX and styling as the presentation deadline approached. I chose a 'retro', _Rolling Stone_ magazine-inspired style for the app.           

One snippet I was pleased with was a bit of EJS that dynamically punctuated the 'genre' array in album detail:      

<!-- TODO : insert screenshot of this in action! -->        

![Dynamically punctuate genre array in album detail view](public/readme/genrepunctuation.png)       

Also, displaying avg. review rating:        

<!-- TODO : insert screenshot here! -->     

![Display average rating in friendly format](public/readme/avgrating.png)       

### 15/09/22 | Day 5 | Final day of production:     

This was a challenging day: getting Bootstrap to display album cards how we wanted (as per Wireframe) proved difficult to the point that we eventually reverted to vanilla CSS. A lesson learned in that Bootstrap is great for many things but not all things!     

On the other hand, Bootstrap proved particularly useful for things like mobile-responsive headers:     

![mobile responsive header](public/readme/mobresponsiveheader.png)      

I did, however, have to remove a lot of CSS positioning to allow Bootstrap to 'do its thing'. In some cases, this was not enough to give proper responsiveness. As such, I used `display: hide` as part of a media query to remove less important information in order to view on a smaller screen:      

![media query in CSS](public/readme/mobileresponsive.png)       

At this point, things started to go drastically wrong for us when uploaded images started to disappear. As we did not at the time know that Heroku's file storage was behind this, we started reverting back to previous commits in order to purge the error that (unsurprisingly) we could never quite pinpoint.       

I then made the critical mistake of editing in the `master` branch in error, meaning that merging with Milos' parallel edits in `dev` caused a vast amount of conflicts. With the deadline close approaching (and a 'broken' project), we rushed the merge, meaning that my eariler work on mobile responsiveness was lost. This was a major lesson learned and a key point in my coding journey so far - _never again_!      

### 16/09/22 | Day 6 | Presentation:        

We agreed to no further edits on presentation day, and were able to present a working app (with all images present).        

The image loss issue appeared again, some research turned up the following from _stackoverflow.com_:        

```
I'm not sure why your uploads aren't being saved; you should be able to save them temporarily.
But this won't work long-term. Heroku's filesystem is ephemeral: any changes you make will be lost the next time your dyno restarts, which happens frequently (at least once per day).
Heroku recommends storing uploads on something like Amazon S3. Here's a guide for doing it specifically with Node.js.
Once you've stored your files on S3 you should be able to retrieve them using an appropriate library or possibly over HTTP, depending on how you've configured your bucket.
```     

...mystery solved! Which was a satisfying end to a project that - whilst challenging at times - proved to be an important milestone in my learning journey, as well as a really enjoyable week of collaborative coding for the first time!      

---