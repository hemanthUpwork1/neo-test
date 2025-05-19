import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Autotask from './pages/Autotask';
import L1Queue from './pages/L1Queue';
import L2Queue from './pages/L2Queue';
import Azure from './pages/Azure';
import ChatAssistant from './pages/ChatAssistant';
import KnowledgeBase from './pages/KnowledgeBase';
import Skills from './pages/Skills';
import Workflows from './pages/Workflows';
import Customers from './pages/Customers';
import Integrations from './pages/Integrations';
import PrivateRoute from './auth/PrivateRoute';

const App: React.FC = () => {
  const location = useLocation();
  
  const getPageTitle = (path: string) => {
    const pathMap: { [key: string]: string } = {
      '/': 'Dashboard',
      '/dashboard': 'Dashboard',
      '/autotask': 'Autotask',
      '/l1-queue': 'L1 Queue',
      '/l2-queue': 'L2 Queue',
      '/azure': 'Azure',
      '/chat-assistant': 'Chat Assistant',
      '/knowledge-base': 'Knowledge Base',
      '/skills': 'Skills',
      '/workflows': 'Workflows',
      '/customers': 'Customers',
      '/integrations': 'Integrations'
    };
    return pathMap[path] || 'Dashboard';
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', background: '#f8fafc' }}>
      <Sidebar />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Topbar pageTitle={getPageTitle(location.pathname)} />
        <Box sx={{ flex: 1, p: 0 }}>
          <Routes>
            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/autotask" element={<PrivateRoute><Autotask /></PrivateRoute>} />
            <Route path="/l1-queue" element={<PrivateRoute><L1Queue /></PrivateRoute>} />
            <Route path="/l2-queue" element={<PrivateRoute><L2Queue /></PrivateRoute>} />
            <Route path="/azure" element={<PrivateRoute><Azure /></PrivateRoute>} />
            <Route path="/chat-assistant" element={<PrivateRoute><ChatAssistant /></PrivateRoute>} />
            <Route path="/knowledge-base" element={<PrivateRoute><KnowledgeBase /></PrivateRoute>} />
            <Route path="/skills" element={<PrivateRoute><Skills /></PrivateRoute>} />
            <Route path="/workflows" element={<PrivateRoute><Workflows /></PrivateRoute>} />
            <Route path="/customers" element={<PrivateRoute><Customers /></PrivateRoute>} />
            <Route path="/integrations" element={<PrivateRoute><Integrations /></PrivateRoute>} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default App; 