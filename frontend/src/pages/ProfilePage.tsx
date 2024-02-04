// IMPORTS
import Card from "@mui/material/Card";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import {
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";

import { Link as RouterLink } from 'react-router-dom';

import UserModel from "../interfaces/UserModel";

const styles = {
  details: {
    padding: "1rem",
    borderTop: "1px solid #e1e1e1"
  },
  value: {
    padding: "1rem 2rem",
    borderTop: "1px solid #e1e1e1",
    color: "#899499"
  }
};

const ProfilePage: React.FC = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper
          sx={{
            maxWidth: 900,
            width: "100%",
            margin: "auto",
            p: 4,
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 120, height: 120, margin: "auto" }}
          />
          <Typography align = "center" variant="h2" sx={{ p: 4 }}>John Doe</Typography>
          
          <Grid container spacing = {2}>
            <Grid item xs = {3}>
              <Typography style={styles.details}>Name</Typography>
            </Grid>
            <Grid item xs = {9}>
              <Typography style={styles.details}>John Doe</Typography>
            </Grid>
            <Grid item xs = {3}>
              <Typography style={styles.details}>Year of Birth</Typography>
            </Grid>
            <Grid item xs = {9}>
              <Typography style={styles.details}>01 March 2023</Typography>
            </Grid>
            <Grid item xs = {3}>
              <Typography style={styles.details}>Gender</Typography>
            </Grid>
            <Grid item xs = {9}>
              <Typography style={styles.details}>Male</Typography>
            </Grid>
            <Grid item xs = {3}>
              <Typography style={styles.details}>Email</Typography>
            </Grid>
            <Grid item xs = {9}>
              <Typography style={styles.details}>test@gmail.com</Typography>
            </Grid>
            <IconButton component={RouterLink} to="/profileedit" aria-label="delete" sx={{ marginLeft: "auto" }}>
              <EditIcon />
            </IconButton>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ProfilePage;