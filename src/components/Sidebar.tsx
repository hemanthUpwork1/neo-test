import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const menu = [
  {
    section: 'Neo Analytics',
    icon: <HomeIcon />,
    items: [
      { text: 'Dashboard', path: '/dashboard' },
    ],
  },
  {
    section: 'Operations',
    icon: <AssignmentIcon />,
    items: [
      { text: 'Supervisor', path: '/supervisor' },
      { text: 'All Autotask', path: '/autotask' },
      { text: 'L1 Queue', path: '/l1-queue' },
      { text: 'L2 Queue', path: '/l2-queue' },
      { text: 'Azure', path: '/azure' },
    ],
  },
  {
    section: 'Neo AI',
    icon: <ChatIcon />,
    items: [
      { text: 'Chat Assistant', path: '/chat-assistant' },
      { text: 'knowledge Base', path: '/knowledge-base' },
      { text: 'Skills', path: '/skills' },
      { text: 'Workflows', path: '/workflows' },
    ],
  },
  {
    section: 'Accounts',
    icon: <PeopleIcon />,
    items: [
      { text: 'Customers', path: '/customers' },
      { text: 'Integrations', path: '/integrations' },
    ],
  },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth0();
  
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const handleSectionClick = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isSidebarExpanded ? 240 : 64,
        flexShrink: 0,
        transition: 'width 0.2s',
        [`& .MuiDrawer-paper`]: { 
          width: isSidebarExpanded ? 240 : 64, 
          boxSizing: 'border-box', 
          background: '#fff', 
          borderRight: '1px solid #f0f0f0',
          transition: 'width 0.2s',
          overflowX: 'hidden'
        },
      }}
    >
      <Box sx={{ 
        height: 64, 
        display: 'flex', 
        alignItems: 'center', 
        pl: 2,
        justifyContent: isSidebarExpanded ? 'flex-start' : 'center'
      }}>
        {isSidebarExpanded ? (
          <>
            <img src="/logo192.png" alt="Neo" style={{ width: 36, marginRight: 8 }} />
            <Typography variant="h6" fontWeight={700}>Neo</Typography>
          </>
        ) : (
          <img src="/logo192.png" alt="Neo" style={{ width: 36 }} />
        )}
        <IconButton 
          onClick={toggleSidebar}
          sx={{ 
            ml: 'auto',
            mr: 1,
            display: { xs: 'none', sm: 'flex' }
          }}
        >
          {isSidebarExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>
      <Divider />
      <List>
        {menu.map((section, idx) => (
          <Box key={section.section + idx}>
            <ListItemButton
              onClick={() => handleSectionClick(section.section)}
              sx={{ 
                pl: isSidebarExpanded ? 2 : 1,
                pt: 2,
                justifyContent: isSidebarExpanded ? 'flex-start' : 'center'
              }}
            >
              {section.icon}
              {isSidebarExpanded && (
                <>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      pl: 1, 
                      color: '#888', 
                      flex: 1,
                      fontWeight: 600 
                    }}
                  >
                    {section.section}
                  </Typography>
                  {expandedSections[section.section] ? <ExpandLess /> : <ExpandMore />}
                </>
              )}
            </ListItemButton>
            {isSidebarExpanded && (
              <Collapse in={expandedSections[section.section]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {section.items.map(item => (
                    <ListItem key={item.text} disablePadding>
                      <ListItemButton
                        selected={location.pathname === item.path}
                        onClick={() => navigate(item.path)}
                        sx={{ pl: 6 }}
                      >
                        <ListItemText 
                          primary={item.text} 
                          primaryTypographyProps={{
                            variant: 'body2'
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          p: 2,
          borderTop: '1px solid #f0f0f0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          minWidth: 0,
        }}
      >
        {isAuthenticated && user && isSidebarExpanded && (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <Avatar
                src={user.picture}
                alt={user.name}
                sx={{ width: 48, height: 48, mr: 2 }}
              />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: 'block', lineHeight: 1.2 }}
                >
                  Helpdesk Technician
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={700}
                  sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                  {user.name}
                </Typography>
              </Box>
              <IconButton 
                size="small" 
                sx={{ ml: 1 }}
                onClick={() => logout()}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, width: '100%' }}>
              <Box>
                <Box
                  sx={{
                    background: '#6d604a',
                    color: '#fff',
                    borderRadius: 1,
                    px: 1.5,
                    py: 0.5,
                    fontSize: 13,
                    fontWeight: 500,
                    display: 'inline-block',
                  }}
                >
                  Account Info
                </Box>
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  ml: 2,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontSize: 14,
                  flex: 1,
                }}
              >
                {user.email
                  ? user.email.length > 15
                    ? `${user.email.slice(0, 15)}...`
                    : user.email
                  : ''}
              </Typography>
            </Box>
          </>
        )}
        {/* Collapsed state: just avatar centered */}
        {isAuthenticated && user && !isSidebarExpanded && (
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Avatar
              src={user.picture}
              alt={user.name}
              sx={{ width: 40, height: 40, cursor: 'pointer' }}
            />
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default Sidebar;