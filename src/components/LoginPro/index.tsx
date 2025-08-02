import {LockOutlined, MobileOutlined, UserOutlined,} from '@ant-design/icons';
import {LoginForm, ProFormCaptcha, ProFormCheckbox, ProFormText,} from '@ant-design/pro-components';
import {message, Tabs, theme} from 'antd';
import React, {FC, useEffect, useRef, useState} from 'react';
import "./index.less"
import {ajaxCommon, encrypted} from "../../utils/common";
import {cun, cuns, quObj} from "esn";


type LoginType = 'phone' | 'account';


let autoLogin = "autoLogin";

const LoginPro: FC<{
  /**
   * @description 通用ajax实现方法
   * @default (url: string, params: object, callback: Function, isApi = true) => {
   *     let api_ = "";
   *     if (isApi) {
   *         api_ = "api";
   *     }
   *
   *     return request.post(api_ + url, {data: params}).then((data) => {
   *         if (data.code == 0) {
   *             callback(data)
   *         } else {
   *             message.error(data.msg)
   *         }
   *     }).catch(function (error) {
   *         console.log(error);
   *     })
   * }
   */
  ajax?: any;
  /**
   * @description 点击登录的url
   * @default -
   */
  url?: string;
  /**
   * @description 发送短信验证码的url
   * @default -
   */
  captchaUrl?: string;
  /**
   * @description antd-pro登录表单的props
   * @default {}
   */
  loginFormFieldProps?: object;
  /**
   * @description 是否有短信登录模式
   * @default false（无）
   */
  hasSmsLogin?: boolean;
  /**
   * @description 是否有账号密码登录模式
   * @default true
   */
  hasAccountLogin?: boolean;
  /**
   * @description 发送短信验证码接口，发送手机号的字段
   * @default true
   */
  phoneField?: string;
  /**
   * @description CryptoJS的加密方式，还有其他形式的如MD5，SHA-1，SHA-256/SHA-384/SHA-512，RIPEMD
   * @default SHA256
   */
  encryption?: string;
  /**
   * @description 额外的密码混淆文本
   * @default ""
   */
  extraPasswordText?: string;
  /**
   * @description 秘钥,AES加密
   * @default ""
   */
  secretKey?: string;
  /**
   * @description 返回结果的处理
   * @default (data:any)=>{
   *           return data.data
   *   }
   */
  setData?: Function;
  /**
   * @description 登录成功之后的处理
   * @default (data:any)=>{
   *
   *   }
   */
  callback?: any;
  /**
   * @description 返回结果的处理
   * @default (data:any)=>{
   *           return data.data
   *   }
   */
  tokenField?: string;
  /**
   * @description 用户名字段
   * @default -
   */
  usernameField?: string;
  /**
   * @description 密码字段
   * @default -
   */
  passwordField?: string;
  /**
   * @description 验证码字段
   * @default -
   */
  captchaField?: string;
  /**
   * @description 底部自定义组件
   * @default -
   */
  BottomDom?: any;
  /**
   * @description 自定义加密函数，第一个参数是密码，第二个参数是秘钥，返回一个加密后的密码
   * @default -
   */
  encrypt?: any
  /**
   * @description 忘记密码的DOM
   * @default - () => {
   *           return (
   *             <a
   *               style={{
   *                 float: 'right',
   *               }}
   *             >
   *               忘记密码
   *             </a>
   *           )
   *         }
   */
  ForGetPassword?: any
}> = ({
        ajax = ajaxCommon,
        url,
        captchaUrl,
        loginFormFieldProps,
        hasSmsLogin = false,
        hasAccountLogin = true,
        phoneField = "mobile",
        usernameField = "username",
        passwordField = "password",
        captchaField = "captcha",
        extraPasswordText = "",
        secretKey = null,
        setData = (data: any) => {
          return data.data
        },
        tokenField = "token",
        callback = () => {
        },
        BottomDom = () => <></>,
        encrypt,
        ForGetPassword = () => {
          return (
            <a
              style={{
                float: 'right',
              }}
            >
              忘记密码
            </a>
          )
        }
      }) => {

  const {token} = theme.useToken();
  const [loginType, setLoginType] = useState<LoginType>('account');

  const formRef: any = useRef();

  let loginFun = (values: any) => {
    let _values = {...values};
    _values[passwordField] = secretKey ? encrypted(_values[passwordField] + extraPasswordText, secretKey, secretKey) : _values[passwordField];
    if (encrypt) {
      _values[passwordField] = encrypt(_values[passwordField])
    }
    ajax(url, _values, (data: any) => {
      cuns(tokenField, setData(data))

      if (values.autoLogin) {
        cun(autoLogin, values)
      }

      callback(data)
    }, false)
  }

  useEffect(() => {
    let autoLoginValues = quObj(autoLogin);
    if (autoLoginValues) {
      formRef.current.setFieldsValue(quObj(autoLogin))
    }
  }, []);


  return (
    <div style={{backgroundColor: token.colorBgContainer}} className="crm_login_body">
      <LoginForm
        formRef={formRef}
        // logo="https://www.56008.com/images/newsimg/scm128.jpg"
        title="登录"
        subTitle="欢迎登录系统"
        initialValues={{
          [usernameField]: "",
          [passwordField]: ""
        }}
        onFinish={async (values) => {
          const val1 = await formRef.current.validateFields();
          if (val1) {
            loginFun(values);
          }
          return true;
        }}
        {...loginFormFieldProps}
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
        >
          <Tabs.TabPane key={'account'} tab={'账号密码登录'} disabled={!hasAccountLogin}/>
          <Tabs.TabPane key={'phone'} tab={'手机号登录'} disabled={!hasSmsLogin}/>
        </Tabs>
        {loginType === 'account' && (
          <>
            <ProFormText
              name={usernameField}
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'}/>,
              }}
              placeholder={'用户名'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name={passwordField}
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'}/>,
                strengthText:
                  '密码应包含数字、字母和特殊字符，长度至少为8个字符',
                statusRender: (value) => {
                  const getStatus = () => {
                    if (value && value.length > 12) {
                      return 'ok';
                    }
                    if (value && value.length > 6) {
                      return 'pass';
                    }
                    return 'poor';
                  };
                  const status = getStatus();
                  if (status === 'pass') {
                    return (
                      <div style={{color: token.colorWarning}}>
                        强度：中
                      </div>
                    );
                  }
                  if (status === 'ok') {
                    return (
                      <div style={{color: token.colorSuccess}}>
                        强度：强
                      </div>
                    );
                  }
                  return (
                    <div style={{color: token.colorError}}>强度：弱</div>
                  );
                },
              }}
              placeholder={'请输入密码'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
          </>
        )}
        {loginType === 'phone' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: <MobileOutlined className={'prefixIcon'}/>,
              }}
              name={phoneField}
              placeholder={'手机号'}
              rules={[
                {
                  required: true,
                  message: '请输入手机号！',
                },
                {
                  pattern: /^1\d{10}$/,
                  message: '手机号格式错误！',
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'}/>,
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder={'请输入验证码'}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${'获取验证码'}`;
                }
                return '获取验证码';
              }}
              phoneName={phoneField}
              name={captchaField}
              rules={[
                {
                  required: true,
                  message: '请输入验证码！',
                },
              ]}
              onGetCaptcha={async (phone) => {
                let obj: any = {};
                obj[phoneField] = phone
                ajax(captchaUrl, {...obj}, (data: any) => {
                  message.success('验证码已发送，请查看手机短信');
                })
              }}
            />
          </>
        )}
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>

          <ForGetPassword/>
        </div>
        <BottomDom/>
      </LoginForm>
    </div>
  );
};
export default LoginPro;
