const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
/* Review pages */
router.get('/location/review/add',ctrlLocations.addReview)
/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;