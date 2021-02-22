const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const allowedOrigin='localhost:3001';

app.use(cors(allowedOrigin));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const dummy = require('./routes/dummy_data')
 app.use('/api', dummy);

 const CreateUser=require('./routes/user_routes')
 app.use('/api',CreateUser);

 const login=require('./routes/user_routes')
 app.use('/api',login);

 const CreatePost=require('./routes/post.routes')
 app.use('/api',CreatePost); 

 const updatePost=require('./routes/post.routes')
 app.use('/api',updatePost);

 const getUsers=require('./routes/user_routes')
  app.use('/api',getUsers);

const getPostsByType=require('./routes/post.routes');
app.use('/api',getPostsByType);

const getPostsByUploadedBy=require('./routes/post.routes');
app.use('/api',getPostsByUploadedBy);

const getPosts=require('./routes/post.routes')
app.use('/api',getPosts); 

const student=require('./routes/student.route');
app.use('/api',student);

const subject=require('./routes/subject.route');
app.use('/api',subject);

app.use('/', (req, res) => {
  res.status(200).json({
      message: "Test server working"
  });
})

//  const db = require('./models/index')
//  db.sequelize.sync({force:true});

const port = process.env.PORT || 3000;
 app.listen(port, () => {
     console.log(`Listening on: http://localhost:${port}`);
});
