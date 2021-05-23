import axios from "axios"

const apiClient=axios.create({
    baseURL:"http://localhost:4000",
    withCredentials:true,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    }
})

export default{
     getGroups(){
        return  apiClient.get("/groups");
    },

    getGroup(id){
        return apiClient.get("/groups/"+id)
    }
}