import * as React from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ListItemButton from "@mui/material/ListItemButton";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FeedbackIcon from "@mui/icons-material/Feedback";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

interface ListItemLinkProps {
  Icon?: React.ElementType;
  text: string;
  route: string;
}

const mainItems = [
  { Icon: HomeIcon, text: "Home", route: "/" },
  { Icon: EmojiEventsIcon, text: "Leaderboard", route: "/leaderboard" },
  { Icon: FilePresentIcon, text: "Certificates", route: "/certificates" },
  { Icon: FeedbackIcon, text: "Feedback", route: "/feedback" },
];

const secondaryItems = [
  { Icon: AccountCircleIcon, text: "Profile", route: "/profile" },
  { Icon: SettingsIcon, text: "Settings", route: "/settings" },
];

const ListItemLink: React.FC<ListItemLinkProps> = ({ Icon, text, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <ListItemButton onClick={handleClick}>
      {Icon && (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export const mainListItems = (
  <React.Fragment>
    {mainItems.map((item, index) => (
      <ListItemLink
        key={index}
        Icon={item.Icon}
        text={item.text}
        route={item.route}
      />
    ))}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {secondaryItems.map((item, index) => (
      <ListItemLink
        key={index}
        Icon={item.Icon}
        text={item.text}
        route={item.route}
      />
    ))}
  </React.Fragment>
);
