import axios from 'axios';
import { axiosClient, axiosClient2} from './axiosClient';

const ProductAPI = {
    getAll(){
        const url = `/product`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    add(data,userID, token) {
        const url =`/product/${userID}`;
        return axiosClient2.post(url, data,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
    
    },
    remove(id,userID, token) {
        const url = `/product/${id}/${userID}`;
        return axiosClient2.delete(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
    },
    update(id, data,userID, token) {
        const url = `/product/${id}/${userID}`;
        return axiosClient2.put(url,data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
    }
}
export default ProductAPI;