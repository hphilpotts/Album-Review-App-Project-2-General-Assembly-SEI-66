# Project 2 Readme - Harry      

## Day 01 - Planning:       
08/09/22        
Planning stage.     
- Finalised idea of DIY Blog App.       
- ERD and Wireframes completed.     

## Day 02 - Production:     
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

_First significant merge conflicts, on_ `server.js`_as expected, due to parallel edits. Eventually resovled through VSCode merge editor._       

Landing page integrated into auth views/ctrl/route.     

Milos working on signup functionality.      

I am now on Read, Update and Delete functionality for Instructions:         
- Instructions index and detail read routes all working ok!     
- Edit functionality is working ok, also populates with previous values.        
- Delete functionality working ok.      

Committing changes.     

## Day 03 - Production 2        
12/09/22        

Milos has added the majority of auth functionality over the weekend. Pair coded in order to debug, tested working ok.       

'Welcome User' message and login/logout button hide when not relevant functionality added.      

_Significant change made to project: we have decided to change direction in order to make an Album review app instead._     

Completing rewrites: workload split between editing all directly 'instructions'-related files/folders and editing all other references to Post/Instruction outside of this.     

Cue judicious use of `find + replace`..._taking great care to match case / singluar or plural_.     

Edits completed on both sides, attempting merge:        


