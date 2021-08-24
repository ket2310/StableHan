const Horse = require('./Horse');
const Rider = require('./Rider');
const Instructor = require('./Instructor');
const Lesson = require('./Lesson')

Rider.belongsToMany(Horse, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Lesson,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'rider_horse'
});

Location.belongsToMany(Traveller, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'location_travellers'
});

module.exports = { Traveller, Location, Trip };
