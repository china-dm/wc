// 代理商信息
import {
    get,
    post
} from '../util/wancAxios';

export const getOrderDetail = params => get('/rest/my/order/detail', params);

export const submitPay = params => post('/rest/pay/submitpay/web', params);








