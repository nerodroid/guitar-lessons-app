import User from "../models/user.js";
import bcrypt from 'bcrypt';

const addUser = async (req, res, next) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    let userObject = { ...req.body }
    userObject.password = hashedPassword;

    const user = new User(userObject)
    user.save((error, user) => {
        if (error) {
            if (error.code === 11000) {
                res.status(409).send({ "message": "User already exists with this username" })
            } else {
                next(error)
            }
            console.error("Error while adding user.")
        } else {
            res.status(200).send({ "message": "User added" })
        }
    })
}

const getUsers = async (req, res) => {
    const usersProjection = {
        password: false,
        _id: false,
        __v: false
    };

    User.find({}, usersProjection, (error, users) => {
        if (error) {
            next(error)
            console.error("Error while adding user.")
        } else {
            res.status(200).send(users)
        }
    })
}

const getUser = async (req, res) => {
    const usersProjection = {
        password: false,
        _id: false,
        __v: false
    };

    User.findOne({username: req.params.username}, usersProjection, (error, user) => {
        if (error) {
            next(error)
            console.error("Error while retrieving user.")
        } else {
            res.status(200).send(user)
        }
    })
}

export {
    addUser,
    getUsers,
    getUser
}