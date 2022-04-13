import axios from 'axios';

function login(body){
    const promise = axios.post('http://localhost:5000/sign-in', body);
    promise.then((res) =>{
        console.log(res.data);
        storeToken(res.data.token);
    })
}
function storeToken(token){
    const serialToken = JSON.stringify(token);
  localStorage.setItem('token', serialToken);

}
function getStoredToken() {
    const serialToken = localStorage.getItem('token');
    const token = JSON.parse(serialToken);
    return token;
  }

export { login, getStoredToken,};

