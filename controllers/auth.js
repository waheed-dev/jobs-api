const register = (req,res) => {
    res.status(200).send('register route')
}

const login = (req,res) => {
    res.status(200).send('login route')
}

module.exports = {register,login}
