import React from "react";
import { Typography, Card, CardContent, Grid } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { EventModel } from "../interfaces/EventModel";

//this is a new edit to test git

type EventCardProps = {
  event: EventModel;
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ margin: "auto", marginTop: 2, marginBottom: 1 }}>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{ fontSize: 14 }}
            >
              Posted by&nbsp;
            </Typography>
            <Typography
              variant="button"
              onClick={() => {}} //TODO: make a popup similar to teams with intro about the guy
              color="primary"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
                fontWeight: 500,
                textTransform: "none",
              }}
            >
              {event.personInCharge}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <Typography
              variant="caption"
              color="textSecondary"
              align="right"
              sx={{ fontSize: 14 }}
            >
              {event.location} {event.date}
            </Typography>
          </Grid>
          <Typography
            variant="h5"
            component="div"
            mt={1}
            sx={{ fontWeight: 500 }}
          >
            {event.title}
          </Typography>
          <Typography variant="body2" mt={1} sx={{ fontSize: 16 }} noWrap>
            {event.description}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EventCard;
