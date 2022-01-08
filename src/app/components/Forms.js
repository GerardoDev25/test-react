// import { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
// import {} from '@ant-design/icons';

import './style.css';

const Forms = () => {
  const { Password } = Input;
  const { Item } = Form;

  const handleSubmit = (e) => {
    console.log('handleSubmit', e);
  };
  const handleSubmitError = (e) => {
    console.log('handleSubmitError', e);
  };

  return (
    <div className="content">
      <Form
        name="formulario"
        className="dorde"
        initialValues={{ recordar: true }}
        onFinish={handleSubmit}
        onFinishFailed={handleSubmitError}
      >
        <Item label="usuario" rules={[{ required: true, message: 'user name' }]}>
          <Input />
        </Item>

        <Item label="password" rules={[{ required: true, message: 'password' }]}>
          <Password />
        </Item>

        <Item name="recordar" valuePropName="checkbox">
          <Checkbox checked>Recordar Uuario</Checkbox>
        </Item>

        <Item>
          <Button type="primary" htmlType="submit">
            Iniciar secion
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default Forms;
