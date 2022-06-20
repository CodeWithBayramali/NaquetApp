import axios from 'axios';

const sellerApiEndpoint = "http://192.168.0.10:5000/api/seller/";
const popularSeller = "http://192.168.0.10:5000/api/seller/popularseller/";
const categoryApiEndpoint = "http://192.168.0.10:5000/api/category/";
const productApiEndpoint = "http://192.168.0.10:5000/api/product/";
const registerEndpoint = "http://192.168.0.10:5000/api/register"
const loginEndpoint = "http://192.168.0.10:5000/api/login"
const userInfoEndpoint = "http://192.168.0.10:5000/api/getalluserinfo"

/**AUTH */
export const SignIn = async (userData) => await axios.post(loginEndpoint,userData)
export const SignUp = async (userData) => await axios.post(registerEndpoint,userData)

/**PRODUCT */

export const fetchProducts = async () => await axios.get(productApiEndpoint);
export const createProduct = async (productData) => await axios.post(productApiEndpoint,productData);


/** CATEGORY */
export const fetchCategory = async () => await axios.get(categoryApiEndpoint);
export const fetchCategoryById = async (id) => await axios.get(`${categoryApiEndpoint}${id}`);


/** SELLER */
export const fetchPopularSeller = async () => await axios.get(popularSeller);
export const fetchSeller = async () => await axios.get(sellerApiEndpoint);

/** USER */
export const getUserInfo = async (id) => await axios.get(`${userInfoEndpoint}/${id}`)