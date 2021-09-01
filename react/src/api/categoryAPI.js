import { axiosClient , axiosClient2 } from './axiosClient';
const CategoryAPI = {
    getAll(){
        const url = `/category`;
        return axiosClient2.get(url);
    },
    get(id){
        const url = `/category/${id}`;
        return axiosClient2.get(url);
    },
    add(data,userID, token){
        const url =`/category/${userID}`;
        return axiosClient2.post(url, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        },
    remove(id,userID, token){
        const url = `/category/${id}/${userID}`;
        return axiosClient2.delete(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
    },
    update(id, data,userID, token){
        const url = `/category/${id}/${userID}`;
        return axiosClient2.put(url, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
    }
}

export default CategoryAPI;