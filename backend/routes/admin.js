const express = require('express');
const { loginAdmin } = require('../controller/admin');
const { getReservations, deleteReservation } = require('../controller/reservation');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/login', loginAdmin);
router.get('/reservations', protect, getReservations);
router.delete('/reservations/:id', protect, deleteReservation);

module.exports = router;






// const express = require('express');
// const jwt = require('jsonwebtoken');
// const router = express.Router();

// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   // Hardcoded test credentials
//   const testUsername = 'sahitya';
//   const testPassword = '1234';

//   // Check if provided credentials match test credentials
//   if (username === testUsername && password === testPassword) {
//     try {
//       // Generate JWT token
//       const token = jwt.sign({ username }, process.env.JWT_SECRET, {
//         expiresIn: '1h', // Adjust token expiration as needed
//       });
//       res.status(200).json({ success: true, token });
//     } catch (error) {
//       console.error('Error generating token:', error);
//       res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }
//   } else {
//     res.status(401).json({ success: false, message: 'Invalid credentials' });
//   }
// });

// module.exports = router;





// const express = require('express');
// const jwt = require('jsonwebtoken');
// const router = express.Router();

// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   // Hardcoded test credentials
//   const testUsername = 'sahitya';
//   const testPassword = '1234';

//   // Check if provided credentials match test credentials
//   if (username === testUsername && password === testPassword) {
//     try {
//       // Generate JWT token
//       const token = jwt.sign({ username }, process.env.JWT_SECRET, {
//         expiresIn: '1h', // Adjust token expiration as needed
//       });
//       res.status(200).json({ success: true, token });
//     } catch (error) {
//       console.error('Error generating token:', error);
//       res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }
//   } else {
//     res.status(401).json({ success: false, message: 'Invalid credentials' });
//   }
// });

// module.exports = router;
