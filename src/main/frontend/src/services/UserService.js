import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8081/api/user"
const USER_LOGIN_API_BASE_URL="http://localhost:8081/api/user/login"
class UserService{

    getUser()
    {
        return axios.get(USER_API_BASE_URL);   //get the data from the API mentioned
    }

    loginUser(user)
    {
        console.log('in login user service', user.emailId);
        return axios.post(USER_LOGIN_API_BASE_URL,user);   //get the data from the API mentioned

    }


    createUser(user)
    {
        console.log('in create user service', user.emailId);
        return axios.post(USER_API_BASE_URL,user);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }


}
export default new UserService()   //exporting the object of this class