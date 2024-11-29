const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", (req, res)=>{
    res.send(hey);
})

app.get("/create", async(req, res)=>{
    let user = await userModel.create({
        username: "harsh",
        age:25,
        email:"harsh@gmail.com"
    })
    res.send(user);
})

app.get("/post/create", async (req, res)=>{
    let post = await postModel.create({
        postdata: "hello saare log kaise ho",
        user: "6748a5bfa4b61ab48fff4966"
    })

    let user = await userModel.findOne({_id:"6748a5bfa4b61ab48fff4966"});
    user.posts.push(post._id)
    await user.save();
    res.send({post, user})

    res.send(post);
})


app.listen(3000);