import express from 'express'
import User from '../models/user'
import bcript from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../config'

const router = express.Router()

router.post('/', (req, res) => {
    const {identifier, password} = req.body;
    User.query({
        where: {username: identifier},
        orWhere: {email: identifier}
    }).fetch().then((user) => {
        if (user) {
            if (bcript.compareSync(password, user.get('password_digest'))) {
                const token = jwt.sign({
                    id: user.get('id'),
                    username: user.get('username')
                }, config.jwtSecret);
                res.json({token});
            } else {
                res.status(401).json({errors: {form: 'Invalid Credentials'}})
            }
        } else {
            res.status(401).json({errors: {form: 'Invalid Credentials'}})
        }
    }).catch((err) => {
        res.status(401).json({errors: {form: 'Invalid Credentials'}})
    })
})


export default router
