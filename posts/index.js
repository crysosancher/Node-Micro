const express= require ('express');

const bodyParser= require ('body-parser');

const {randomBytes}= require ('crypto');

const app= express();
app.use(bodyParser.json());

const posts={};

app.get('/posts', (req, res)=>{
	res.send(posts);
    
});

app.post('/posts', (req, res)=>{
	const id= randomBytes(4).toString('hex');
	//k5lk3j4jpia34nk23n4
	const {title}= req.body;
	posts[id]={
		id,title
	};
	res.status(201).send(posts[id]);

});
app.listen(3000, ()=>{
	    console.log('Server is running on port 3000');
})
