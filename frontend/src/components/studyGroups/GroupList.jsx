import { Link } from 'react-router-dom';

const GroupList = ({ groups }) => {
  return (
    <ul>
      {groups.map((group) => (
        <li key={group.id}>
          <Link to={`/groups/${group.id}`} className="text-blue-500">{group.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default GroupList;
