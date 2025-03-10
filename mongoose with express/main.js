import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js"
import { log } from "console";

let con = await mongoose.connect("mongodb://localhost:27017/Todo")
const app = express()
const port = 3000

app.get('/',async (req, res) => {
    const todo = new Todo({ title: "Hey i am charan", desc: "This is for testing", Days:Math.floor(Math.random()*10)})
    todo.save()
    // await Todo.deleteOne({})
    res.send('Hello World!')
})

app.get('/a',async (req, res) => {
    let todo = await Todo.findOne({})
    res.json({tital: todo.title ,desc: todo.desc})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})