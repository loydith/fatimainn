const db = require('../models');
const express = require('express');
const router = express.Router();
const passport = require('../passport');
// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.post(
	'/login',
	(req, res) => {
		console.log(req.body);
        db.User.findOne({
            where: {
                username:req.body.username
            }
        }).then((dbUser) => {
            res.json(dbUser)  
        })
	}
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy(()=>{
            res.clearCookie('connect.sid') // clean up!
            return res.json({ msg: 'logging you out' })
        })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	console.log(req.body)
	// ADD VALIDATION
	db.User.create(req.body).then((dbUser) => {
        res.json(dbUser)
    })
})

module.exports = router;