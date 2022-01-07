// import { useState } from 'react';
import { Select } from 'antd';
import {} from '@ant-design/icons';

import './style.css';

const Selects = () => {
  const { Option } = Select;

  const handleChange = (e) => {
    console.log(e);
  };
  const handlefocus = (e) => {
    console.log(e);
  };
  return (
    <div className="content">
      <div className="content-row">
        <Select
          placeholder="seleccione un pais"
          size="large"
          showSearch
          mode="multiple"
          style={{ width: '30rem' }}
          onChange={handleChange}
          optionFilterProp="children"
          defaultValue={['bolivia', 'argentina']}
          onFocus={handlefocus}
          onBlur={handlefocus}
        >
          <Option value="mejico">mejico</Option>
          <Option value="colombia">colombia</Option>
          <Option value="peru">peru</Option>
          <Option value="argentina">argentina</Option>
          <Option value="ecuador">ecuador</Option>
          <Option value="bolivia">bolivia</Option>
          <Option value="chile">chile</Option>
        </Select>
      </div>
    </div>
  );
};

export default Selects;
