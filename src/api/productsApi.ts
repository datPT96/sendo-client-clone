import axiosClient from './axiosClient';

const productsApi = {
    async getAllProduct() {
        const url = 'products/list';
        try {
            return await axiosClient.get(url);
        } catch (err) {
            console.log(err);
        }
    },

    // async findByName(params?: string | null) {
    //     const url = 'products/product-search';
    //     try {
    //         return await axiosClient.get(url, { params: { name: params } });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },

    async filterByCondition(params?: any) {
        const url = 'products/filter';
        try {
            return await axiosClient.get(url, { params });
        } catch (error) {
            console.log(error);
        }
    },
};

export default productsApi;
