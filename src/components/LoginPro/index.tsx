import {LockOutlined, MobileOutlined, UserOutlined,} from '@ant-design/icons';
import {LoginForm, ProFormCaptcha, ProFormCheckbox, ProFormText,} from '@ant-design/pro-components';
import {message, Tabs, theme} from 'antd';
import React, {FC, useRef, useState} from 'react';
import "./index.less"
import {ajaxCommon} from "../../utils/common";
import CryptoJS from "crypto-js";
import {cun} from "esn";

type LoginType = 'phone' | 'account';

const LoginPro: FC<any> = ({
                             ajax = ajaxCommon,
                             url,
                             captchaUrl,
                             loginFormFieldProps,
                             hasSmsLogin = false,
                             hasAccountLogin = true,
                             phoneField = "mobile"
                           }) => {
  const {token} = theme.useToken();
  const [loginType, setLoginType] = useState<LoginType>('account');

  const formRef: any = useRef();


  return (
    <div style={{backgroundColor: token.colorBgContainer}} className="crm_login_body">
      <LoginForm
        formRef={formRef}
        // logo="https://www.56008.com/images/newsimg/scm128.jpg"
        title="登录"
        subTitle="欢迎登录系统"
        initialValues={{
          username: "admin",
          password: "111111"
        }}
        onFinish={async (values) => {
          const val1 = await formRef.current.validateFields();
          if (val1) {
            let _values = {...values};
            _values.password = CryptoJS.SHA256(values.password).toString(CryptoJS.enc.Base64)
            ajax(url, _values, (data: any) => {
              cun("token", data.data)
            }, false)
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
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'}/>,
              }}
              placeholder={'用户名: admin or user'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
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
              placeholder={'密码: 111111'}
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
              name="captcha"
              rules={[
                {
                  required: true,
                  message: '请输入验证码！',
                },
              ]}
              onGetCaptcha={async (phone) => {
                let obj:any = {};
                obj[phoneField] = phone
                ajax(captchaUrl, {...obj}, (data:any) => {
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
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginForm>
    </div>
  );
};
export default LoginPro;
