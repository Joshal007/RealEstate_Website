const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./model/user')

dotenv.config({
    path: './.env'
})
const app = express();
app.use(express.json())
app.use(cors())

const connectDatabase = async () => {

    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })

    console.log("MongoDB Connection Successfully")

}
connectDatabase();

app.get("/", (req, res) => {
    res.send("Connected");
})
app.post("/postemail", async (req, res) => {
    const { email } = req.body;
    console.log(email);
    const d = await User.findOne({ emailid: email });
    if (d) {
        res.status(400).json({
            success: true,
            message: "Data Already Present"
        })
    }
    else {
        await User.create({
            emailid: email
        })
        return res.status(201).json({
            success: true
        })
    }

})
app.listen(5000, () => {
    console.log("Server listening the port http://localhost:" + 5000);
})