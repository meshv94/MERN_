const express = require("express")
const dotenv = require('dotenv')
const cors = require("cors")
const app = express()
dotenv.config()

const connect_DB = require("./DB");
const auth_router = require("./router/auth-router");
const contact_router = require("./router/contact_router")
const admin_router = require("./router/admin-router")

app.use(express.json())
app.use(cors(
    {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
))

app.use("/api/user", auth_router)
app.use("/api/contact", contact_router)
app.use("/api/admin", admin_router)

app.get("/", (req, res) => {
    res.send('welcome')
})


connect_DB();
app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running at ${process.env.PORT}`)
})
