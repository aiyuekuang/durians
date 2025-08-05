import FormPro from '@/components/FormPro';

const columns = [
  // 请根据实际情况补充字段
];

const CustomBeforeSubmitForm = () => (
  <FormPro
    beforeSubmit={(values, record) => {
      // 自定义数据处理逻辑
      return {
        ...values,
        timestamp: Date.now(),
      };
    }}
    fieldProps={{ columns }}
  />
);

export default CustomBeforeSubmitForm;