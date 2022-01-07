import { Link } from 'react-router-dom';
const HomePages = () => {
  const userid = 9;
  return (
    <div>
      HomePages
      <Link to={`/user/${userid}`}>Usuarios</Link>
    </div>
  );
};

export default HomePages;
