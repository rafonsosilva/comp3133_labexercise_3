const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addressSchema = new Schema({
  building: {
    type: String,
  },
  street: {
    type: String,
  },
  zipcode: {
    type: String,
  },
});

const restaurantSchema = new Schema(
  {
    address: addressSchema,
    restaurant_id: {
      type: String,
    },
    city: {
      type: String,
    },
    cuisine: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = {
  Restaurant: mongoose.model("Restaurant", restaurantSchema),
};
