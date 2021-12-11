import axios from 'axios';

const ACTIVITY_API_BASE_URL="http://localhost:8081/api/activity"

const ACTIVITY_API_BASE_URL_JOIN="http://localhost:8081/api/activity/join"

class UserService{

    getActivity()
    {
        return axios.get(ACTIVITY_API_BASE_URL);   //get the data from the API mentioned
    }

    createActivity(activity)
    {
        console.log('in create activity service', activity.sportName);
        return axios.post(ACTIVITY_API_BASE_URL,activity);
    }

    getActivityById(activityId){
        return axios.get(ACTIVITY_API_BASE_URL + '/' + activityId);
    }

    joinActivity(activity_id,user_id)
    {
        console.log(activity_id)
        console.log(user_id)
        return axios.put(ACTIVITY_API_BASE_URL_JOIN+'/'+activity_id)
    }
    // getUserById(userId){
    //     return axios.get(ACTIVITY_API_BASE_URL + '/' + userId);
    // }

    // updateUser(user, userId){
    //     return axios.put(ACTIVITY_API_BASE_URL + '/' + userId, user);
    // }

    // deleteUser(userId){
    //     return axios.delete(USER_API_BASE_URL + '/' + userId);
    // }


}
export default new UserService()   //exporting the object of this class