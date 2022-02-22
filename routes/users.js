import express from "express"

const router = express.Router();

const users = [

    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },

    {
        firstName: "Jane",
        lastName: "Doe",
        age: 20
    }

]

// all routes in here start with /users therefore we have to use here only /
router.get('/', (req, res) => {
    console.log(users)
    res.send(users);
})

export default router;   