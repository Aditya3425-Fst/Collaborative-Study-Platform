import { useParams, Link } from 'react-router-dom';

const GroupDetailsPage = () => {
  const { groupId } = useParams();

  return (
    <div>
      <h1>Group Details for Group {groupId}</h1>
      <Link to={`/groups/${groupId}/discussions`} className="text-blue-500">View Discussions</Link>
      <Link to={`/groups/${groupId}/resources`} className="text-blue-500 ml-4">View Resources</Link>
    </div>
  );
};

export default GroupDetailsPage;
