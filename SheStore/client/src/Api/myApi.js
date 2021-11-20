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
  }
};
export default myApi;
