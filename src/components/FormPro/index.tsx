import { Button, message } from 'antd';
import React, { FC, useRef, useCallback, memo } from 'react';
import { BetaSchemaForm } from "@ant-design/pro-components";
import { ajaxCommon, commonFormHandler } from "../../utils/common";
import { DEFAULT_CONFIG } from "../../utils/constants";
import type { FormProProps } from "../../types";
import ProProviderPro from "../ProProviderPro";

/**
 * 高级表单组件 - 支持模态框和抽屉两种布局的表单组件
 */
const FormPro: FC<FormProProps> = memo(({
  layoutType = DEFAULT_CONFIG.FORM_PRO.LAYOUT_TYPE,
  fieldProps = {},
  url,
  detailUrl,
  record = {},
  ajax = ajaxCommon,
  finishFun = () => {},
  detailSetData,
  setMsg = (data: any) => data?.msg || '操作成功',
  isEdit = DEFAULT_CONFIG.FORM_PRO.IS_EDIT,
  beforeSubmit = (data: any) => data,
  children = <Button>点击我</Button>
}) => {
  const formRef = useRef();

  // 处理表单提交
  const handleFinish = useCallback(async (values: any) => {
    if (!url) {
      console.warn('FormPro: url is required for form submission');
      return false;
    }

    try {
      const processedValues = beforeSubmit ? beforeSubmit(values, record, values) : values;
      let isSuccess = false;

      await ajax(url, processedValues, (data: any) => {
        message.success(setMsg(data));
        finishFun(data, processedValues);
        isSuccess = true;
      });

      return isSuccess;
    } catch (error) {
      console.error('FormPro: Form submission failed:', error);
      message.error('提交失败，请稍后重试');
      return false;
    }
  }, [url, ajax, beforeSubmit, record, setMsg, finishFun]);

  // 处理详情数据获取
  const handleGetDetail = useCallback(async () => {
    if (!detailUrl || !record || !Object.keys(record).length) {
      return record;
    }

    try {
      let detailData = record;
      await ajax(detailUrl, record, (data: any) => {
        detailData = detailSetData ? detailSetData(data) : data;
      });
      return detailData;
    } catch (error) {
      console.error('FormPro: Failed to fetch detail data:', error);
      return record;
    }
  }, [detailUrl, record, ajax, detailSetData]);

  // 处理表单列配置
  const processedColumns = useCallback(() => {
    if (!fieldProps?.columns) {
      return [];
    }

    const columns = typeof fieldProps.columns === 'function'
      ? fieldProps.columns('add')
      : fieldProps.columns;

    return commonFormHandler(columns, ajax, isEdit);
  }, [fieldProps?.columns, ajax, isEdit]);

  return (
    <ProProviderPro>
      <BetaSchemaForm
        formRef={formRef}
        layoutType={layoutType}
        trigger={children}
        onFinish={handleFinish}
        request={handleGetDetail}
        columns={processedColumns()}
        {...fieldProps}
      />
    </ProProviderPro>
  );
});

FormPro.displayName = 'FormPro';

export default FormPro;
