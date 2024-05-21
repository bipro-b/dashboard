// src/components/Dashboard.js
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
import BarsDataset from "./BarDataset";

const iconMapping = {
  Accounting: " ",
  Dashboard: <CiHome />,
  Account: <CiVideoOn />,
  Reports: <TbReportSearch />,
};

const drawerWidth = 240;

const Dashboard = () => {
  const childStyle = {
    height: "160px",
    width: "350px",
    backgroundColor: "#F6EBDB",
  };

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
            height: "100%", // Full viewport height
          }}
          className="container"
        >
          <div className="flex flex-row w-full mr-5 mb-5 gap-4">
            <div className="flex-1" style={childStyle}>
              1
            </div>
            <div className="flex-1" style={childStyle}>
              2
            </div>
            <div className="flex-1" style={childStyle}>
              3
            </div>
          </div>
          <BarsDataset />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
