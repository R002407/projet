const express = require('express');
const userRouter = require('./routes/user');

exports.router = (function(){
    const userRouter = express.Router();
    
    userRouter.route('/users/register/').post(user.register);
    userRouter.route('/users/login/').post(user.login);

    return userRouter;
});