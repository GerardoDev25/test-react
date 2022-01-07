import { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './style.css';

const Inputs = () => {
  const [input, setInput] = useState({ input: '' });

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  return (
    <div className="content">
      <div className="content-row">
        <Input size="large" prefix={<SearchOutlined />} placeholder="first input large" />
        <Input size="middle" prefix={<SearchOutlined />} placeholder="first input middle" />
        <Input size="small" prefix={<SearchOutlined />} placeholder="first input small" />
        <Input onChange={handleInput} name="input" prefix={<SearchOutlined />} placeholder="first input small" />
        <Input.Password placeholder="password" bordered={false} max={2}/>
      </div>
    </div>
  );
};

export default Inputs;
