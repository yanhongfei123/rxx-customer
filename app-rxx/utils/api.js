/**
 * @Author: PerfectYan
 */

import fetch from './fetch';

import {
	API_DOMAIN
} from './config';


/**
 * @param {string} type   请求方式
 * @param {string} action 接口请求地址
 * @param {object} params [params={}]
 */
const fetchApi = (type, action, params = {}, isNeedToken = true) => {
	return fetch(type, `${API_DOMAIN}${action}`, params, isNeedToken)
};

const authLogin = (params) => {
	return fetchApi('POST', '/login', params).then(res => res)
};
const logout = (params) => {
	return fetchApi('POST', '/logout', params).then(res => res)
};
const registerCustomer = (params) => {
	return fetchApi('POST', '/register_customer', params, false).then(res => res)
};
const updateUserinfo = (params) => {
	return fetchApi('POST', '/updateuserinfo_customer', params).then(res => res)
};
const getProductList = (params) => {
	return fetchApi('POST', '/getproductlist', params, false).then(res => res)
};
const getOrderbyCustoner = (params) => {
	return fetchApi('POST', '/getOrderbyCustoner', params).then(res => res)
};
const getproductbytype = (params) => {
	return fetchApi('POST', '/getproductbytype', params, false).then(res => res)
};
const getcycle = (params) => {
	return fetchApi('GET', '/getcycle', params, false).then(res => res)
};
const createOrder = (params) => {
	return fetchApi('POST', '/createOrder', params).then(res => res)
};
const orderScore = (params) => {
	return fetchApi('POST', '/order_score', params).then(res => res)
};
const feedbackCreate = (params) => {
	return fetchApi('POST', '/feedbackCreate', params).then(res => res)
};
const sendMsg = (params) => {
	return fetchApi('POST', '/sendMsg', {...params, usertype: 1}, false).then(res => res)
};
const forgetPas = (params) => {
	return fetchApi('POST', '/forget', params, false).then(res => res)
};
// 
const weixinLogin = (params) => {
	return fetchApi('GET', '/weichatLogin_xcx', params).then(res => res)
};

const weixinPay = (params) => {
	return fetchApi('POST', '/wechatpay_xcx', params, false).then(res => res)
};

// 查询代理产品H5宣传页，关于我们
const getDailiProductH5 = (params) => {
	return fetchApi('GET','/getdailiproducth5', params).then(res => res);
}

export default {
	weixinPay,
	weixinLogin,
	authLogin,
	logout,
	registerCustomer,
	getProductList,
	getOrderbyCustoner,
	updateUserinfo,
	getproductbytype,
	getcycle,
	createOrder,
	orderScore,
	feedbackCreate,
	sendMsg,
	forgetPas,
	getDailiProductH5
	

};
