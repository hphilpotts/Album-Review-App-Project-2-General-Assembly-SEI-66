# Project 2 Readme - Harry      

(see readme.pdf for full readme)

## Day 00 - Planning:       
08/09/22        
Planning stage.     
- Finalised idea of DIY Blog App.       
- ERD and Wireframes completed.     

## Day 01 - Production:     
09/09/22        
App production started. Main focus today on basic structure of app.    

GitHub Repo established and successfully forked & cloned.              
- now setting up server config, installing key dependencies:        
    - express       
    - mongoose      
    - ejs   
    - dotenv        
    - express-ejs-layouts
- adding MVC structure and other directories.        

Split workstream into layouts/landing page and models.        

I will be creating models files:       
- User model added - possibility of changing firstName/lastName to screenName if wanted.        
- Post model added.      
    - May need to check if image datatype should be `String`.       
    - Also, have decided to do away with difficulty property and instead access this from the relationed instructions database      
- Instruction model added - needed further commit due to naming error.      
- Milos completed layout.ejs including link buttons.        

_Had a few merging difficulties - discussed with Ana, we are to send any error logs across in future._      

Milos building landing page and route etc.      

I am now moving to setting up 'Create Instructions':        
- added `add detail edit index .ejs` files, empty for now. Moving to `add.ejs`.     
- `add.ejs` completed, GET API and controller set up. Had been missing `app.set('view engine', 'ejs');` from `server.js`. Now tested working ok.        
- now POST API added, tested working ok.        

_First significant merge conflicts, on_ `server.js` _as expected, due to parallel edits. Eventually resovled through VSCode merge editor._       

Landing page integrated into auth views/ctrl/route.     

Milos working on signup functionality.      

I am now on Read, Update and Delete functionality for Instructions:         
- Instructions index and detail read routes all working ok!     
- Edit functionality is working ok, also populates with previous values.        
- Delete functionality working ok.      

Committing changes.     

## Day 02 - Production, Rewrites:              
12/09/22        

Milos has added the majority of auth functionality over the weekend. Pair coded in order to debug, tested working ok.       

'Welcome User' message and login/logout button hide when not relevant functionality added.      

_Significant change made to project: we have decided to change direction in order to make an Album review app instead._     

Completing rewrites: workload split between editing all directly 'instructions'-related files/folders and editing all other references to Post/Instruction outside of this.     

Cue judicious use of `find + replace`..._taking great care to match case / singluar or plural_.     

Edits completed on both sides, attempting merge:        
- _Eventually resolved one expected conflict in routes - we found the GitHub GUI to be preferable to CLI or VSC Merge Editor_       
- changes debugged using pair programming, latest changes pushed.       

Next two workstreams: Review views & create review functionality, dynamic 'add input box' functionality to add track listing.       

Firstly, I am attempting to achieve 'add input box' functionality through embedded 'vanilla' JS, using DOM manipulation.        
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
Did not work, `document is not defined`, googling turned up: "You can't use document inside your ejs tags because that code is executed on the server."     

Using similar code but as frontend in `main.js` I am able to add an input box, but no more than one. On a positive note, both input boxes created accept and pass values correctly!     

I'm now going to try jQuery.        
Tested working, although the button floats above any added inputs!      
And fixed with another div.     

Now moving to its own `.js` file, replicating this for genre as well.       

Tested working ok. Replicating functionality for Edit page.     

Done and tested working ok: input fields populate with values, add input fields working and updating in DB.     

**Consider including this code in the presentation!**       

Views, paths, controllers and routes for Reviews well under way: pushing to finish before close of day.     

## Day 03 - Production:       
13/09/22        

Got '/' working - if not signed in, this brings a landing page. If signed in, this goes to reviews home.        

Now I am updating Review title so that it populates from the album list. Completed after some difficulty. Needed to use `.populate`...!     

Two workstreams: the reverse of the above, where albums are updated with attached reviews; and reviews have a user attached based upon currentUser.     

Album update implemented as below:      
```
    review.save()
    .then(() => {
        req.body.album.forEach(album => {
            Album.findById(album, (error, album) => {
                album.review.push(review);
                album.save();
            })
        })
        res.redirect("/review/index")
    })
```

User attached to reviews by Milos, using currentUser in hidden input field as follows:     
`<input type="hidden" name="createdBy" value="<%= currentUser._id %>" />`       

User firstName and lastName combined into username.     

Linked reviews within albums eventually linking to usernames.       
_This part required a solution from Saad, specifically:_        
```
    Album.findById(req.query.id).populate({ 
        path: 'review',
        populate: {
          path: 'createdBy',
          model: 'User'
        } 
```
**One to highlight in presentation!**       

Due to the fact that `createdBy` was set as an array, we required the following in `album/detail.ejs`:      
`<div> Reviewed by: <a href="/review/detail?id=<%= review._id %>"><%= review.createdBy[0].username %></a>, rating: <%= review.rating %></div>`      
This also includes a hyperlink to the review document!      

Splitting workstream into protecting routes with IsLoggedIn and IsCorrectUser, and basic CSS formatting.        

Basic formatting completed using bootstrap and CSS on `layout.ejs`.     

Milos: IsCorrectUser removed, instead 'edit'/'delete' buttons are hidden to non-creators using EJS.        

Further fomatting done across album index, detail.      

## Day 04 - Production:     
14/09/22        

Further formatting work done on reviews pages. Further links added, paths adjusted to make app more user-friendly.      

Milos working on Cloudinary Image uploads.     

Ultimately decided to go with `Multer` - now up and running.        

Formatting continues site-wide.     

Milos working on Bootstrap Cards for Review index.      

_Very pleased with this code snippet:_      
```
    <div><span class="med-text highlighted-text">Genres:&nbsp;&nbsp;</span>
        <% let counter = 0;
        album.genre.forEach(function(genre) { 
        counter++ %>
        <a href="">
            <span class="med-text highlighted-text">
            <%= genre %>
        <% if (counter < album.genre.length) { %>
            <%= ', ' %>&nbsp;
        <% } else {%>
            <%= '.' %>
        <% } %>
            </span>
        </a>
        <% }) %>
    </div>
```
I attempted to set a transparent background...without success.      

Efforts now switched to ensure mobile responsiveness.       

## Day 05 - Production:     
15/09/22        

A challenging day today for both of us:     

Getting cards working through Bootstrap caused us such issues that on Ana's advice we made the call to switch the cards to vanilla CSS. I think the issue lies with a) conflict between main.css styles and Bootstrap styles, and b) what we wanted was outside the scope of Bootstrap customisation.       

The good news is that Milos has now got the cards working, looking good and responding to screen size changes.      

On my side, I had a good start to the day, with great progress made on mobile responsiveness. This was largely achieved through removing CSS positioning and leaning on Bootstrap in order to resize.       

In some cases, this was not enough, esp. on tables. In order to get around this, I used `display: hide` classes within a media query in order to hide unneeded information when viewed on a smaller screen.     

Progress ground to a halt when we found that uploaded album art started disappearing. The cause was not clear which triggered a revert to earlier commits. This did not solve the problem - _not surprisingly as the code edited should not have affected images or Multer_ - but meant losing a lot of work and time.      

Progress further ground to a halt when attempting to merge branches / repos. As we had been editing in parallel - Milos working on the new review index view, I had been working on the old one - and I had made the mistake of editing in `master`, when we came to merge at the end of the day we saw conflict after conflict.        

Finally at about 5:45pm (now the evening before presentation day) we managed to merge and host our code, albeit with minimal content.       

## Day 06 - Presentation        
16/09/22        

I'm making minor (and I mean **minor**) edits prior to presentation: added a couple of CSS classes and a `review.createdBy` EJS snippet to `/review/index.ejs`.     

Aaaand of course we see problems: it turns out that when a new push is sent to heroku, album art uploaded since the last push is lost. Fortunately, we only lost a small amount of work. _And, crucially, we now know what the problem is_!

I have promised **no more** `master` **edits or pushes** until after we present so that we don't lose any more content!     

Initially, I had planned to clean up code in the `dev` branch, removing `console.log()` statements, taking out comments no longer needed, refactoring etc. _Ultimately, changed my mind in the end and decided to leave things as they were!_       

**Presentation completed successfully!**

A few hours after the presentation, the disappearing image issue happened again. Some research came up with the following from _stackoverflow.com_:     
```
I'm not sure why your uploads aren't being saved; you should be able to save them temporarily.

But this won't work long-term. Heroku's filesystem is ephemeral: any changes you make will be lost the next time your dyno restarts, which happens frequently (at least once per day).

Heroku recommends storing uploads on something like Amazon S3. Here's a guide for doing it specifically with Node.js.

Once you've stored your files on S3 you should be able to retrieve them using an appropriate library or possibly over HTTP, depending on how you've configured your bucket.
```     










