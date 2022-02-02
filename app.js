const { response } = require("express");
const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static('public'));

app.get("/", (req, res, next) => res.render("home"));
app.get("/contact", (req, res, next) => res.render("contact"));

const boatDetails = {
    title: "Boat",
    price: 100,
    categories: ["leisure", "basic"],
    imgSrc: "https://m.media-amazon.com/images/I/71iLHfq8yPL._AC_SL1500_.jpg",
};

const jetskiDetails = {
    title: "Jetski",
    price: 3000,
    categories: ["leisure", "sports"],
    imgSrc: "https://checkyeti.imgix.net/images/prod/products/16829/jet-ski-hire-on-kamari-beach-in-santorini-kamari-beach-watersports-santorini.jpg",
};

const yachtDetails = {
    title: "Yacht",
    price: 1000000,
    categories: ["luxury", "toys"],
    imgSrc: "https://yachtharbour.com/static/images/y/large_146_0d06c.jpg",
};

app.get("/boat", (req, res, next) => res.render("product", boatDetails));
app.get("/jetski", (req, res, next) => res.render("product", jetskiDetails));
app.get("/yacht", (req, res, next) => res.render("product", yachtDetails));


app.listen(3000, () => {
    console.log("server listening...")
});