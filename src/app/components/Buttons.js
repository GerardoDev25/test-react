import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './style.css';

const Buttons = () => {
  return (
    <div className="content">
      <div>
        <Button type="primary" size="large">
          Primary
        </Button>
        <Button type="default" size="middle">
          default
        </Button>
        <Button type="dashed" size="small">
          dashed
        </Button>
        <Button type="ghost">ghost</Button>
        <Button type="link" target="_blank" href="https://www.google.com">
          link
        </Button>
        <Button type="text">text</Button>
      </div>
      <div>
        <Button danger>text</Button>
        <Button ghost>text</Button>
        <Button disabled>text</Button>
        <Button loading>text</Button>
      </div>
      <div>
        <Button type="primary" icon={<SearchOutlined />} shape="round">
          search
        </Button>
      </div>
    </div>
  );
};

export default Buttons;
