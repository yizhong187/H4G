import {
  Box,
  Container,
  Grid,
  Toolbar,
  TextField,
  Button,
  Stack,
  Paper,
  IconButton,
  InputBase,
} from "@mui/material";
import EventCard from "../components/EventCard";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { sampleEvent } from "../interfaces/EventModel";
import { useState } from "react";

const HomePage: React.FC = () => {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Handler for search input changes
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Handler for initiating search
  const handleSearch = () => {
    console.log("Search for:", searchQuery);
    // You can perform the search logic here or pass the searchQuery to a parent component
  };

  // Handler for enter key press in search bar
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

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
        {/* Add this Stack for search and filter */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ mb: 4 }}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <IconButton
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={handleSearch}
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleKeyPress}
            />
            {/* TODO: Implement filtering function */}
            <IconButton type="button" sx={{ p: "10px" }}>
              <FilterListIcon />
            </IconButton>
          </Paper>
        </Stack>
        <Grid item xs={12}>
          <EventCard event={sampleEvent} />
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
