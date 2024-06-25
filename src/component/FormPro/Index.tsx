import { Layout, Row, Typography } from 'antd';
import React from 'react';
import styles from './index.less';

interface Props {
    /**
    * 名称
    * */
  name: string;
}

// 脚手架示例组件
const Index: React.FC<Props> = ({name="1111"}) => {
  return (
    <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          欢迎使用 <strong>{name}</strong> ！
        </Typography.Title>
      </Row>
    </Layout>
  );
};

export default Index;
