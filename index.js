const express = require("express");
const mongoose = require("mongoose");
const { Restaurant } = require("./model/Restaurant");

const {
  GetRestaurants,
  GetRestaurantsWithCuisine,
} = require("./service/RestaurantService");

const app = express();

app.get("/restaurants", async (req, res) => {
  if (req.query.sortBy) {
    res.json(
      await GetRestaurants({
        sort: req.query.sortBy === "ASC" ? "ASC" : "DESC",
      })
    );
  } else {
    res.json(await GetRestaurants({ sort: "" }));
  }
});

app.get("/restaurants/cuisine/:nationality", async (req, res) => {
  res.json(await GetRestaurantsWithCuisine(req.params.nationality));
});

app.get("/restaurants/Delicatessen", async (req, res) => {
  res.json(
    await Restaurant.find({
      cuisine: "Delicatessen",
      city: { $ne: "Brooklyn" },
    })
  );
});

const db_uri = "mongodb://localhost:27017/comp3133_fullStack_2";

mongoose
  .connect(db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log(`MongoDB connected`))
  .catch((err) => console.log(`MongoDB connection FAILED`, err));

app.listen(9000, () => {
  console.log("Server running");
});
