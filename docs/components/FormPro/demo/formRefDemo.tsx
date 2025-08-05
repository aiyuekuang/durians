import React, { useRef } from 'react';
import FormPro from '@/components/FormPro';

const columns = [
  // 请根据实际情况补充字段
];

const FormRefDemo = () => {
  const formRef = useRef();

  return (
    <FormPro
      fieldProps={{
        formRef,
        columns,
        // 其他配置
      }}
    />
  );
};

export default FormRefDemo;