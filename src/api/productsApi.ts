import axiosClient from "./axiosClient"

const productsApi = {
    async getAllProduct() {
        const url = "products"
        try{
            return await axiosClient.get(url)
        }catch(err){
            console.log(err)
        }
    }
}

export default productsApi