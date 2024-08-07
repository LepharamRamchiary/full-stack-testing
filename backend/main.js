import express from "express";
import 'dotenv/config'

const app = express();
const port = process.env.PORT;

app.use(express.static("dist"));

// get a list of jokes
app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A joke",
            content: "This is a first joke"
        },
        {
            id: 2,
            title: "A joke2",
            content: "This is a 2 joke"
        },
        {
            id: 3,
            title: "A joke3",
            content: "This is a 3 joke"
        },
        {
            id: 4,
            title: "A joke4",
            content: "This is a 4 joke"
        }
    ];
    res.send(jokes);
});

app.listen(port, () => {
    console.log(`Server is live on: ${port}`)
});