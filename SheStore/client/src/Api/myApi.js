import Axios from 'axios'

const baseApiUrl = "http://localhost:5000";

const myApi = {
  getCategories: async () => {
    try {
      const url = baseApiUrl + "/category" + "/category";
      var result = await Axios.get(url);
      return result.data;
    } catch (error) {
      console.error(error);
    }
  },
  getProducts: async()=>{
    try {
        const url = baseApiUrl + "/product" + "/products";
        var result = await Axios.get(url);
        return result.data;
      } catch (error) {
        console.error(error);
      }
  },
  login: async(value)=>{
    try {
      const url = baseApiUrl + "/user" + "/login";
      var result = await Axios.post(url,value);
      return result.data;
    } catch (error) {
      console.error(error);
    }
  },
  buyNow: async(value)=>{
    try {
      const url = baseApiUrl + "/product" + "/products/"+ value.productID;
      var request= {
        userID: value.userID,
        soldPrice: value.soldPrice
      }
      var result = await Axios.post(url,request);
      return result.data;
    } catch (error) {
      console.error(error);
    }
  },
};
export default myApi;
