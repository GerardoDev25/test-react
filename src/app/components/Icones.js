import { PieChartOutlined, BoldOutlined, AlibabaOutlined, DeleteFilled } from '@ant-design//icons';

const Icones = () => {
  return (
    <div>
      <PieChartOutlined style={{ fontSize: '90px', color: 'red' }} />
      <BoldOutlined style={{ fontSize: '90px', color: '#555' }} rotate={-30} />
      <AlibabaOutlined style={{ fontSize: '90px', color: 'green' }} />
      <DeleteFilled style={{ fontSize: '90px', color: '#111' }} spin />
    </div>
  );
};

export default Icones;
