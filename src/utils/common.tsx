import request from "umi-request";
import {message} from "antd";

export const ajaxCommon = (url: string, params: object, callback: Function, isApi = true) => {
    let api_ = "";
    if (isApi) {
        api_ = "api";
    }

    return request.post(api_ + url, {data: params}).then((data) => {
        if (data.code == 0) {
            callback(data)
        } else {
            message.error(data.msg)
        }
    }).catch(function (error) {
        console.log(error);
    })
}
