import request from "../utils/request";

class ProductsApi {
  get(id) {
    return request.get(`/products/${id}`);
  }
}

export default new ProductsApi();
