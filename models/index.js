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

Horse.belongsToMany(Rider, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Lesson,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'horse_rider'
});

Instructor.hasMany(Lesson, {
  foreignKey: 'instructor_id',
  onDelete: 'CASCADE'
})

Lesson.belongsTo(Instructor, {
  foreignKey: 'instructor_id'
})

module.exports = { Rider, Horse, Lesson, Instructor };
