import axios from 'axios'

// axios.create({
//     baseURL:'http://localhost:3000/',
// });

const baseURL = 'http://localhost:3000/'

function getVersion(){
    axios.get(baseURL+'version', {}).then((res) => {
        console.log(res.data);
    }, (err) => {
        console.log(err);
    });
}

function login(){
    axios.post(baseURL+'login', {
        username: 'admin',
        password: 'admin!23'
    }).then((res) => {
        console.log(res.data);
    }, (err) => {
        console.log(err);
    });;
}


console.log("index.js running...")
// getVersion();
login()
