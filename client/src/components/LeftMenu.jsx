import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CiHome } from "react-icons/ci";
import { TbReportSearch } from "react-icons/tb";
import { CiVideoOn } from "react-icons/ci";

const iconMapping = {
  Accounting: " ",
  Dashboard: <CiHome />,
  Account: <CiVideoOn />,
  Reports: <TbReportSearch />,
};

const drawerWidth = 240;

const LeftMenu = () => {
  
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const drawer = (
    <Box sx={{ width: drawerWidth }} role="presentation">
      <List>
        {["Accounting", "Dashboard", "Account", "Reports"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() =>
                handleNavigation(`/${text.toLowerCase().replace(" ", "-")}`)
              }
            >
              <ListItemIcon>{iconMapping[text]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: `${drawerWidth}px`, // Adjust for drawer width
        }}
      >
        
      </Box>
    </Box>
  );
};

export default LeftMenu;