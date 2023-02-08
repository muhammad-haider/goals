const express = require("express");
const swaggerUi = require("swagger-ui-express")
const dotenv = require("dotenv").config();
const { errorHandler } = require("../beckend/middleware/errorMiddleware");
const color = require("colors");
const connectDB = require("../beckend/config/db");
const swaggerJSDoc = require("swagger-jsdoc");
const port = process.env.PORT;

connectDB();
const app = express();

const swaggerOptions = {
    definition: {
        info: {
            title: 'Goals API',
            version: '1.0.0'
        }
    },
    apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);


app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => console.log(`Server Started on ${port}`));
