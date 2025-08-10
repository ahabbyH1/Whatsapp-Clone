import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Routes from './router/route.js';

dotenv.config();
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

async function main() {
    await mongoose.connect(
        `mongodb+srv://${username}:${password}@cluster0.r7bierf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
}

main()
    .then(() => {
        console.log("Connection successful");

        // Mount routes only after DB connection
        app.use("/", Routes);

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.log("Mongo connection error:", err);
    });
