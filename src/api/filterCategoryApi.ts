import axiosClient from "./axiosClient";

const filterCategoryApi = {
    async getListFilter() {
        const url = 'filters'
        try {
            return await axiosClient.get(url)
        } catch (err) {
            console.log(err);
        }
    }
}

export default filterCategoryApi