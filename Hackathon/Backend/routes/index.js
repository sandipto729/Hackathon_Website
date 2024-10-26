const express = require('express');
const router = express.Router();
const UserSignUp = require('../controller/User/UserSignUp');
const UserSignIn= require('../controller/User/UserSignin');
const AuthToken= require('../Middlewares/authToken');
const UserFetch= require('../controller/User/UserFetch');
const FetchProject= require('../controller/Project/FetchProject');
const UserProjectSignUp= require('../controller/Project/userProjectSignUp');
const UserLogout= require('../controller/User/UserLogout');

router.post('/signup', UserSignUp);
router.post('/signin', UserSignIn);
router.get('/fetchuser', AuthToken, UserFetch);
router.get('/fetchproject', FetchProject);
router.post('/userprojectsignup', AuthToken, UserProjectSignUp);
router.post('/logout', AuthToken, UserLogout);

module.exports = router;
