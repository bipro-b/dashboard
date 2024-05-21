// src/components/Dashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { CiHome } from "react-icons/ci";
import { TbReportSearch } from "react-icons/tb";
import { CiVideoOn } from "react-icons/ci";
import BarsDataset from './BarDataset';

const iconMapping = {
    Accounting:" ",
    Dashboard: <CiHome />,
    Account: <CiVideoOn />,
    Reports: <TbReportSearch />,
  };
const Dashboard = () => {
  const [state, setState] = useState({
    left: false,
  });

  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleNavigation = (path) => {
    navigate(path);
    setState({ ...state, left: false }); // Close the drawer after navigation
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'left' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Accounting','Dashboard', 'Account', 'Reports'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleNavigation(`/${text.toLowerCase().replace(' ', '-')}`)}>
              <ListItemIcon>
              {iconMapping[text]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className=''>
    <div className='flex flex-row w-full justify-center align-items-center'>
        <div className='flex-1'>
            1
        </div>
        <div className='flex-1'>
        2
        </div >
        <div className='flex-1'>
        3
        </div>
    </div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Accounting</Button>
          <Drawer
          
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
          <Box
            sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Full viewport height
          marginLeft:'100px'
        }}
        className="container"
          >
          <BarsDataset/>
          </Box>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Dashboard;
