// seedAdmin.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs'); // If you are using bcrypt for password hashing

// Load environment variables from the backend .env file
dotenv.config({ path: '../backend/.env' });

// Connect to MongoDB using mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Define your admin user schema and model
const Admin = mongoose.model('Admin', {
  username: String,
  password: String,
});

// Seed admin user
const seedAdmin = async () => {
  try {
    // Check if an admin already exists
    const existingAdmin = await Admin.findOne({ username: 'sahitya' });
    if (existingAdmin) {
      console.log('Admin already exists!');
      return;
    }

    // Create a new admin user
    const hashedPassword = await bcrypt.hash('1234', 10); // Replace '1234' with your desired password
    const newAdmin = new Admin({
      username: 'sahitya',
      password: hashedPassword,
    });

    // Save the admin user to MongoDB
    await newAdmin.save();
    console.log('Admin seeded successfully!');
  } catch (error) {
    console.error('Error seeding admin:', error);
  } finally {
    mongoose.disconnect(); // Disconnect from MongoDB after seeding
  }
};

// Call the seedAdmin function
seedAdmin();
