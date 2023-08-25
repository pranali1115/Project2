const express = require('express')
const path = require('path')
require('./db/conn')
const User = require('./models/user')
const hbs = require('hbs')

const app = express()

// setting the path:
const staticpath = path.join(__dirname, "../public")
const templatepath = path.join(__dirname, "../templates/views")
const partialpath = path.join(__dirname, "../templates/partials")

// middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")))
app.use(express.static(staticpath))
app.use(express.urlencoded({extended:false}))

// setting view engine:

app.set('view engine', 'hbs')
app.set('views', templatepath)
hbs.registerPartials(partialpath)


// routing 
app.get("/", (req, resp) => {
    resp.render("index")

})
app.get("/about", (req, resp) => {
    resp.render("about")

})
app.get("/services", (req, resp) => {
    resp.render("services")

})

app.get("/mywork", (req, resp) => {
    resp.render("mywork")

})
app.get("/contact", (req, resp) => {
    resp.render("contact")

})
app.post("/contact", async (req, resp) => {
    try {
        // resp.send(req.body)
        const userData = new User(req.body)
        await userData.save()
        resp.status(201).render("index")
    }
    catch (error) {
        resp.status(500).send(error)
    }

})

app.get("/rangoli_photo", (req, resp) => {
    resp.render("rangoli_photo")

})

app.get("/painting_photo", (req, resp) => {
    resp.render("painting_photo")

})
app.get("/pottery_photo", (req, resp) => {
    resp.render("pottery_photo")

})
app.get("/mandala_photo", (req, resp) => {
    resp.render("mandala_photo")

})
app.get("/macrame_photo", (req, resp) => {
    resp.render("macrame_photo")

})
app.get("/craft_photo", (req, resp) => {
    resp.render("craft_photo")

})




app.listen(4500)