import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
        <li><Link to="/groups" className="hover:underline">Groups</Link></li>
        <li><Link to="/groups/create" className="hover:underline">Create Group</Link></li>
        <li><Link to="/groups/1/resources" className="hover:underline">Resources</Link></li>
        <li><Link to="/login" className="hover:underline">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
