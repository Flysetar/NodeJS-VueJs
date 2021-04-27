import axios from "axios"



class AuthService {
  login(user){
    return axios.post(API_URL + "/signin", {
      email: user.email,
      password: user.password
    }).then(response => {
      if(response.data.jwt){
        localStorage.setItem('jwt', JSON.stringify(response.data.jwt))
      }
      return response.data;
    })
  }

  logout(){
    localStorage.removeItem('jwt');
  }

  register(user){
    return axios.post(API_URL, {
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      password: user.password,
    }).then(response => {
      return response.data;
    })
  }
}

export default AuthService;