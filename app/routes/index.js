const router = require('express').Router();

const requestRoute = require('./requestRoute');

router.get('/test', (req, res, next) => res.send('Yeah it works!'));

router.use('/accruals', accrualRoute());
router.use('/auth', authRoute());
router.use('/favourites', favouriteRoute());
router.use('/recommendations', recommendationRoute());
router.use('/requests', requestRoute());
router.use('/transactions', transactionRoute());
router.use('/users', userRoute());
router.use('/verifications', verificationRoute());
// router.use('/payment', paymentRoute());

module.exports = router;
