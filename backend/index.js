const express = require("express");
const { chats } = require("./data1/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
// const {notFound, errorHandler} = require("./middleware/errorMiddleware")

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); //to access the json data.

app.get("/", (req,res) => {

    console.log( "api is running");
})


app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);


app.get('/api/chat/:id', (req,res) => {
    console.log(req.params.id);
    const singleChat =  chats.find((c) => c._id === req.params.id)
    res.send(singleChat);

});

// app.use(notFound);
// app.use(errorHandler);
const PORT = process.env.PORT || 7000;
app.listen(7000, console.log(`The server is running on port ${PORT} `.yellow.bold));
