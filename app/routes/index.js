const router = require('express').Router();

const requestRoute = require('./requestRoute');

router.get('/test', (req, res, next) => res.send('Yeah it works!'));

router.use('/requests', requestRoute());
// router.use('/users', userRoute());
// router.use('/recommendation', recommendationRoute());
// router.use('/payment', paymentRoute());

module.exports = router;
