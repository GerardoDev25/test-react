// import { useState } from 'react';
import { message, Button } from 'antd';
// import {} from '@ant-design/icons';

import './style.css';

const GridSystem = () => {
  const handleClick = (e) => {
    console.log(e);
  };

  const handleSuccess = () => {
    message.success('Success');
  };

  const handleError = () => {
    message.error({ content: 'error', className: 'nombreClase', onClick: handleClick });
  };

  const handleInfo = () => {
    message.info('info', 10);
  };

  const handleWarning = () => {
    message.warn('warn');
    message.warning('warning');
  };

  const handleLoader = () => {
    message.loading('loading');
  };

  return (
    <div className="content">
      <div className="content-row">
        <Button type="primary" onClick={handleSuccess}>
          Success
        </Button>

        <Button onClick={handleError} danger>
          Error
        </Button>

        <Button onClick={handleInfo} type="default">
          Info
        </Button>

        <Button onClick={handleWarning} type="link">
          warnig
        </Button>

        <Button onClick={handleLoader} type="primary">
          Loader
        </Button>
      </div>
    </div>
  );
};

export default GridSystem;
