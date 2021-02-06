const { Restaurant } = require("./../model/Restaurant");

const GetRestaurants = async ({ sort }) => {
  let res;
  if (sort === "ASC") {
    res = await Restaurant.find({}).sort("id cuisines name city restaurant_id");
  } else if (sort === "DESC") {
    res = await Restaurant.find({}).sort(
      "-id -cuisines -name -city -restaurant_id"
    );
  } else {
    res = await Restaurant.find({});
  }
  console.log(res)
  return res;
};

const GetRestaurantsWithCuisine = async (nationality) => {
  const res = await Restaurant.find({ cuisine: nationality });
  return res;
};

module.exports = {
  GetRestaurants,
  GetRestaurantsWithCuisine,
};