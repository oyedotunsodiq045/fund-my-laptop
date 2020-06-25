const router = require('express').Router();

const accrualRoute = require('./accrualRoute');
const authRoute = require('./authRoute');
const favouriteRoute = require('./favouriteRoute');
const recommendationRoute = require('./recommendationRoute');
const requestRoute = require('./requestRoute');
const transactionRoute = require('./transactionRoute');
const userRoute = require('./userRoute');
const verificationRoute = require('./verificationRoute');

router.get('/test', (req, res, next) => res.send('Yeah it works!'));

router.use('/accruals', accrualRoute());
router.use('/auth', authRoute());
router.use('/favourites', favouriteRoute());
router.use('/recommendations', recommendationRoute());
router.use('/requests', requestRoute());
router.use('/transactions', transactionRoute());
router.use('/users', userRoute());
router.use('/verifications', verificationRoute());

module.exports = router;
