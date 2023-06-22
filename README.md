
# URL Shortener

The purpose of this project is to give user a shortened URL , clicking on which will redirect the user to same webpage as that of given URL and also to track the number of times a particular url is clicked. The search functionality is also added to search from already shortened URLs.

## Installation

Install node.js on your device for the backend part of the project.

Install express , mongoose , ejs , shortid , dependencies :

```npm i express mongoose ejs shortid```

Install nodemon as a dev dependency :

```npm i --save-dev nodemon```








    
## Getting Started
To start the server we can go to package file and add script : ```"devStart": "nodemon server.js"``` 

then give below command to start the server :

```npm run devStart```


## Internal Working

When we start the server the frontend sends the requests to backend to fetch the data then the backend sends data to frontend which we can see on the main webpage . When we input some URL to be shortened and the note corresponding to it than a post request is send to backend to short the URL and add original URL , Note , shortened URL and the number of clicks to the database and display it on the main webpage :
```
app.post('/shortUrls',async (req,res)=>{
    await ShortUrl.create({full: req.body.fullUrl, note: req.body.note})
    res.redirect('/')
 }) 
 ```

 Every time a user clicks on the shortened URL the number of clicks get incremented by 1 for that URL and on refreshing the page we can see the changes . For the database functioning a Schema object was created containing the structure to store the above described data and then a model was created based on that Schema object using ```mongoose.model()```. The model will allow us to perform database operations on corresponding collection . For search functionality when we input some text in the search bar the search request is processed and we get the filtered data from the database by the help of find() function : 
 ```
 app.get('/search',async (req,res)=>{  
    try {  
        const data = await ShortUrl.find({$or:[{full:{'$regex':req.query.dsearch}},{note:{'$regex':req.query.dsearch}},{short:{'$regex':req.query.dsearch}}]})
        res.render('index',{data:data});  
    }catch(error){  
        console.log(error);  
    }  
    })
 ``` 
The search feature is applied to full url , note and the shortened Url also for the user convenience.
## Lessons Learned

1) Learned more about HTML , Javascript , MongoDB , EJS and most importantly Node.js .

2) Working with Bootstrap :

     By using various bootstrap classes to implement the UI of the website.

3) Search functionality :
    
     By learning to work with $regex operator of MongoDb and the find function .

**Morever some lessons learned apart from the technical lessons are :**

1) Effective Planning and time management :

    Working on your regular tasks together with a project having a deadline teaches you how to plan your tasks efficiently and manage your time between them.

2) Presentation skills :

Presenting your information in a clear and compelling manner is very important which I have learned by this project and this readme file (although its not professional) .


## References & Resources used
1) HTML tutorial :

```https://www.youtube.com/watch?v=pQN-pnXPaVg```

2) CSS tutorial :

```https://www.youtube.com/watch?v=yfoY53QXEnI```

3) JavaScript tutorial :

```https://www.youtube.com/watch?v=PkZNo7MFNFg```

4) Node.js and Express.js tutorial :

```https://youtu.be/Oe421EPjeBE```

5) EJS tutorial :

```https://www.youtube.com/watch?v=VM-2xSaDxJc```

6) Mongoose tutorial :

```https://www.youtube.com/watch?v=DZBGEVgL2eE```

7) MongoDB tutorial :

```https://youtu.be/oSIv-E60NiU```

**Other Resources used :**

a) Visual Studio Code (editor) :

```https://code.visualstudio.com/```

b) Bootstrap (for handling CSS part) :

```https://getbootstrap.com/```

c) Node.js (runtime environment) :

```https://nodejs.org/en```

d) MongoDB Atlas (cloud Database) :

```https://www.mongodb.com/atlas/database```

e) $regex operator of MongoDB (search functionality)

```https://www.mongodb.com/docs/manual/reference/operator/query/regex/#:~:text=Atlas%20Search%20documentation.-,Definition,8.42%20with%20UTF%2D8%20support.```

f) Render (to host the website) :

```https://render.com/```
