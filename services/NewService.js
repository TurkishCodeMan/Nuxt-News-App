import axios from "axios"

const apiClient=axios.create({
    baseURL:"https://my-json-server.typicode.com/TurkishCodeman/Nuxt-News-App/",
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
