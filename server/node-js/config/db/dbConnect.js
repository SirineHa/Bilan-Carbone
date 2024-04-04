const mongoose = require("mongoose");
const User = require("../../models/User");

require('dotenv').config()

const dbConnect = () => {
  mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING)
    .then(() => {
      console.log("Db is Connected Successfully");
      // ajouter des données 
      (async () => {
        try {
            // Insert a user
            const insertedUser = await User.createUser({
                username: 'user1',
                email: 'user1@example.com'
            });
            console.log('Inserted user:', insertedUser._id);
/*
            // Insert a review
            const insertedReview = await Review.createReview({
                user: insertedUser._id,
                survey_questions: [
                    { question: 'Question 1', response: 'Response 1' },
                    { question: 'Question 2', response: 'Response 2' }
                ]
            });
            console.log('Inserted review:', insertedReview._id);

            // Insert a statistic
            const insertedStatistic = await Statistic.createStatistic({
                // Your statistical data
            });
            console.log('Inserted statistic:', insertedStatistic._id);

            // Insert an admin
            const insertedAdmin = await Admin.createAdmin({
                name: 'Admin Name',
                email: 'admin@example.com',
                password: 'hashed_password'
            });
            console.log('Inserted admin:', insertedAdmin._id);

            // Query users
            const users = await User.find({});
            console.log('Users:', users);

            // Query reviews
            const reviews = await Review.find({});
            console.log('Reviews:', reviews);

            // Query statistics
            const statistics = await Statistic.find({});
            console.log('Statistics:', statistics);

            // Query admins
            const admins = await Admin.find({});
            console.log('Admins:', admins);*/
        } catch (error) {
            console.error('Error performing operations:', error);
        } finally {
            // Close the connection when done
            mongoose.connection.close();
        }
      })(); 
    })
    .catch (error =>{
    console.log(`Error ${error.message}`);
  });
};

module.exports = dbConnect;