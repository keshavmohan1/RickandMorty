import * as CONSTANT from '../Utils/Constant';
//Api fetch Calls Helper functiuon
export function ApiHelper(url, method = 'GET') {
    return fetch(CONSTANT.BASEURL+url, {  // Return promise
        method: method
    })
    .then(res => res.json())
    .then((result) => {
        return result;
    }, (error) => {
        return error;
    })
}
