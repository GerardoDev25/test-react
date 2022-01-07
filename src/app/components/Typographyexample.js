import './style.css';
import { Typography } from 'antd';
import { useState } from 'react';

const Typographyexample = () => {
  const [textEdit, settextEdit] = useState('repellendus quibusdam aut incidunt.');

  const { Title, Text, Paragraph } = Typography;

  return (
    <div className="content">
      <div className="content-row">
        <Title>h1</Title>
        <Title level={2}>h2</Title>
        <Title level={3}>h3</Title>
        <Title level={4}>h4</Title>
        <Title level={5}>h5</Title>
      </div>
      <div className="content-row">
        <Text>Default</Text>
        <Text disabled>disabled</Text>
        <Text mark>mark</Text>
        <Text code>code</Text>
        <Text keyboard>keyboard</Text>
        <Text underline>underline</Text>
        <Text delete>delete</Text>
        <Text strong>strong</Text>
        <Text type="secondary">secondary</Text>
        <Text type="danger">danger</Text>
        <Text type="success">success</Text>
        <Text type="warning">warning</Text>
        <Paragraph copyable>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum vel nemo corporis quam alias dicta, sapiente dolores natus
          exercitationem perferendis mollitia ratione. Hic possimus, quam natus repellendus quibusdam aut incidunt.
        </Paragraph>
        <Paragraph editable={{ onChange: settextEdit }}>{textEdit}</Paragraph>
      </div>
    </div>
  );
};

export default Typographyexample;
