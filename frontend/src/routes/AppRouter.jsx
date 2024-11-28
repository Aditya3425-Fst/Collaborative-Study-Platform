import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../pages/Auth/LoginPage';
import RegisterPage from '../pages/Auth/RegisterPage';
import ForgotPasswordPage from '../pages/Auth/ForgotPasswordPage';
import UserDashboard from '../pages/Dashboard/UserDashboard';
import AdminDashboard from '../pages/Dashboard/AdminDashboard';
import GroupListPage from '../pages/Groups/GroupListPage';
import CreateGroupPage from '../pages/Groups/CreateGroupPage';
import GroupDetailsPage from '../pages/Groups/GroupDetailsPage';
import DiscussionPage from '../pages/Discussions/DiscussionPage';
import DiscussionThreadPage from '../pages/Discussions/DiscussionThreadPage';
import ResourceLibraryPage from '../pages/Resources/ResourceLibraryPage';
import UploadResourcePage from '../pages/Resources/UploadResourcePage';
import TaskListPage from '../pages/Tasks/TaskListPage';
import CreateTaskPage from '../pages/Tasks/CreateTaskPage';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<PublicRoutes><LoginPage /></PublicRoutes>} />
        <Route path="/register" element={<PublicRoutes><RegisterPage /></PublicRoutes>} />
        <Route path="/forgot-password" element={<PublicRoutes><ForgotPasswordPage /></PublicRoutes>} />
        
        {/* Private Routes */}
        <Route path="/dashboard" element={<PrivateRoutes><UserDashboard /></PrivateRoutes>} />
        <Route path="/admin-dashboard" element={<PrivateRoutes><AdminDashboard /></PrivateRoutes>} />
        
        {/* Study Groups */}
        <Route path="/groups" element={<PrivateRoutes><GroupListPage /></PrivateRoutes>} />
        <Route path="/groups/create" element={<PrivateRoutes><CreateGroupPage /></PrivateRoutes>} />
        <Route path="/groups/:groupId" element={<PrivateRoutes><GroupDetailsPage /></PrivateRoutes>} />
        
        {/* Discussions */}
        <Route path="/groups/:groupId/discussions" element={<PrivateRoutes><DiscussionPage /></PrivateRoutes>} />
        <Route path="/groups/:groupId/discussions/:threadId" element={<PrivateRoutes><DiscussionThreadPage /></PrivateRoutes>} />
        
        {/* Resources */}
        <Route path="/groups/:groupId/resources" element={<PrivateRoutes><ResourceLibraryPage /></PrivateRoutes>} />
        <Route path="/groups/:groupId/resources/upload" element={<PrivateRoutes><UploadResourcePage /></PrivateRoutes>} />
        
        {/* Tasks */}
        <Route path="/groups/:groupId/tasks" element={<PrivateRoutes><TaskListPage /></PrivateRoutes>} />
        <Route path="/groups/:groupId/tasks/create" element={<PrivateRoutes><CreateTaskPage /></PrivateRoutes>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
