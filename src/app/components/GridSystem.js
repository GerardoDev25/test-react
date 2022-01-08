// import { useState } from 'react';
import { Row, Col, Divider } from 'antd';
// import {} from '@ant-design/icons';

import './style.css';

const GridSystem = () => {
  return (
    <div className="content">
      <Divider>1 columna (24)</Divider>
      <Row gutter={[4, 4]}>
        <Col span={24}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna</div>
        </Col>
      </Row>

      <Divider>2 columna (12)</Divider>
      <Row gutter={[8, 8]}>
        <Col span={12}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 2</div>
        </Col>
        <Col span={12}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 2</div>
        </Col>
      </Row>

      <Divider>3 columna (8)</Divider>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 3</div>
        </Col>
        <Col span={8}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 3</div>
        </Col>
        <Col span={8}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 3</div>
        </Col>
      </Row>

      <Divider>4 columna (6)</Divider>
      <Row gutter={[32, 32]}>
        <Col span={6}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 4</div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 4</div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 4</div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 4</div>
        </Col>
      </Row>

      <Divider>3 columna (6/6)</Divider>
      <Row gutter={[16, 16]}>
        <Col flex={2}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 3</div>
        </Col>
        <Col flex={1}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 3</div>
        </Col>
        <Col flex={3}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 3</div>
        </Col>
      </Row>

      <Divider>2 columna (200px , auto)</Divider>
      <Row gutter={[8, 8]}>
        <Col flex="200px">
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 2</div>
        </Col>
        <Col flex="auto">
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 2</div>
        </Col>
      </Row>

      <Divider>responsive</Divider>
      <Row gutter={[8, 8]}>
        <Col xs={24} sm={12}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 2</div>
        </Col>
        <Col xs={24} sm={12}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 2</div>
        </Col>
      </Row>

      <Divider>responsive 2</Divider>
      <Row gutter={[8, 8]}>
        <Col xs={24} sm={12} md={8}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 2</div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 2</div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }}>columna 2</div>
        </Col>
      </Row>
    </div>
  );
};

export default GridSystem;
