import NewService from "@/services/NewService"



const actions = {
    async getAllGroups({ commit }) {
        try {
            let { data: groups } = await NewService.getGroups();
            commit("SET_GROUPS", groups)
        } catch (error) {

            return error;
        }
    },
    async getGroup({commit},id){
        try {
            let { data: group } = await NewService.getGroup(id);
            commit("SET_GROUP", group)
        } catch (error) {
            return error;
        }
    }
}

export default actions
