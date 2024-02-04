import IconButton from '@mui/material/IconButton';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import {
    Box,
    Container,
    Grid,
    Paper,
    Toolbar,
    Typography,
} from "@mui/material";

import { Link as RouterLink } from 'react-router-dom';

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

const ariaLabel = { 'aria-label': 'description' };

const ProfileEditPage: React.FC = () => {
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
            <Typography align = "center" variant="h3" sx={{ p: 4 }}>Edit Profile</Typography>
            
            <Grid container spacing = {2}>
              <Grid item xs = {3}>
                <Typography style={styles.details}>Name</Typography>
              </Grid>
              <Grid item xs = {9}>
                <Input style={styles.details} placeholder="John Doe" inputProps={ariaLabel} />
              </Grid>
              <Grid item xs = {3}>
                <Typography style={styles.details}>Year of Birth</Typography>
              </Grid>
              <Grid item xs = {9}>
              </Grid>
              <Grid item xs = {3}>
                <Typography style={styles.details}>Gender</Typography>
              </Grid>
              <Grid item xs = {9}>
                <Box style={styles.details}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="gender">Gender</InputLabel>
                        <Select
                        labelId="gender"
                        id="gender"
                        value={3}
                        label="Gender"
                        >
                        <MenuItem value={1}>Male</MenuItem>
                        <MenuItem value={2}>Female</MenuItem>
                        <MenuItem value={3}>Others</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
              </Grid>
              <Grid item xs = {3}>
                <Typography style={styles.details}>Email</Typography>
              </Grid>
              <Grid item xs = {9}>
                <Input style={styles.details} placeholder="test@gmail.com" inputProps={ariaLabel} />
              </Grid>
              <Grid item xs = {10.5}>
              </Grid>
              <Grid item xs = {1.5}>
                <IconButton component={RouterLink} to="/profile" aria-label="delete" sx={{ marginRight: "5px" }}>
                    <CloseRoundedIcon />
                </IconButton>
                <IconButton component={RouterLink} to="/profile" aria-label="delete" sx={{ marginRight: "5px" }}>
                    <CheckRoundedIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    );
  };  

export default ProfileEditPage;
