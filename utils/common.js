import request from "umi-request";
import { message } from "antd";
export var ajaxCommon = function ajaxCommon(url, params, callback) {
  var isApi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var api_ = "";
  if (isApi) {
    api_ = "api";
  }
  return request.post(api_ + url, {
    data: params
  }).then(function (data) {
    if (data.code == 0) {
      callback(data);
    } else {
      message.error(data.msg);
    }
  }).catch(function (error) {
    console.log(error);
  });
};