import { useParams } from 'react-router-dom';
const UsersPage = () => {
  const { userId } = useParams();

  return (
    <div>
      User : <h1>{userId}</h1>
    </div>
  );
};

export default UsersPage;
