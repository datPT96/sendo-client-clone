import axiosClient from "./axiosClient"

const categoryApi = {
    async getAllCategory() {
        const url = 'categories'
        try{
            return await axiosClient.get(url)
        }catch(err)
        {
            console.log(err)
        }
    }
}

export default categoryApi