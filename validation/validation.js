const { body } = require('express-validator');

var validate =  [// username must be an email
    body('email').not().isEmpty().isEmail(),
    // password must be at least 5 chars long
    body('password').not().isEmpty().isLength({ min: 5 }),
]

var validateChange =  [// username must be an email
       // password must be at least 5 chars long
    body('oldpw').not().isEmpty().isLength({ min: 5 }),
    body('newpw').not().isEmpty().isLength({ min: 5 }),
    body('rnewpw').not().isEmpty().isLength({ min: 5 }),
]

function verifyToken(req,res,next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        //forbidden
        res.sendStatus(403);
    }
}

module.exports = {validate , validateChange ,  verifyToken} ;
