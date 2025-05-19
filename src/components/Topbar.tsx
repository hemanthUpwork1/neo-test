import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface TopbarProps {
  pageTitle: string;
}

const Topbar: React.FC<TopbarProps> = ({ pageTitle }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" elevation={0} sx={{ background: '#fff', color: '#222', boxShadow: 'none', borderBottom: '1px solid #f0f0f0', height: { xs: 56, sm: 64 }, justifyContent: 'center' }}>
      <Toolbar sx={{ minHeight: { xs: 56, sm: 64 }, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight={600} sx={{ color: '#222', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
          {pageTitle}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="large" color="inherit" sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton size="large" color="inherit" sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <SettingsIcon />
          </IconButton>
          <IconButton size="large" color="inherit" onClick={handleMenu}>
            <Avatar sx={{ width: { xs: 20, sm: 24 }, height: { xs: 20, sm: 24 }, mr: 1 }} src="https://flagcdn.com/us.svg" />
            <Typography variant="body2" sx={{ mr: 0.5, display: { xs: 'none', sm: 'block' } }}>Eng (US)</Typography>
            <LanguageIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Eng (US)</MenuItem>
            <MenuItem onClick={handleClose}>Fr (FR)</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar; 