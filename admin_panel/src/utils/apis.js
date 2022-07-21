import axios from "axios";

const login = (username, password) => new Promise((resolve, reject) => {
    axios.post(
        `http://localhost:5000/auth/login`, 
        {
            username: username,
            password: password
        }
    ).then(res => {
        console.log(res);
        console.log(res.data);
        return resolve(res)
      }).catch((err) => {
        console.log(err)
        reject(err)
    })
})

export {
    login
}