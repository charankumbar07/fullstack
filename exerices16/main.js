const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/Employee')
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/company');

app.set('view engine', 'ejs');

const getran = (arr) => {
    let ran = Math.floor(Math.random() * (arr.length - 1));
    return arr[ran];
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

app.get('/generate', async (req, res) => {
    // console.log("yes");
    
// deleting data
    await Employee.deleteMany({});
// Creating data
    let RName = ["Charan", "Dhanu", "Ram", "Ramesh"]
    let RLanguage = ["Python", "js", "C++", "Java"]
    let RCity = ["DVG", "HRR", "HVR", "BLG"]
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getran(RName),
            salary: Math.floor(Math.random()*45000)+10000,
            language: getran(RLanguage),
            city: getran(RCity),
        })
        console.log(e);
    }
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})