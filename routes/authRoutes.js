const { Router } = require('express');
const authController = require('../controllers/authControllers');
const {validate , validateChange , verifyToken } = require('../validation/validation');

const router = Router();

router.get('/signup' , authController.signup_get); 

router.post('/signup' , validate , authController.signup_post);

router.get('/login' ,authController.login_get);

router.post('/login' ,validate, verifyToken , authController.login_post);

router.post('/changepw' , validateChange , verifyToken , authController.changepw); 

router.get('/verification' ,authController.verification_get);

router.post('/forgotpw' ,validate , authController.forgotpw_post);

router.post('/forgotpw2' ,validate ,validateChange , authController.forgotpw_post2);

module.exports = router;