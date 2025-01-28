import { Container, Typography } from "@mui/material";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

function VideoReviewSection() {
  return (
    <>
      <Container sx={{my:14}}>
        <Typography variant="h1" textAlign={"center"} mb={3} color="text.heading">نقدر و بررسی ویدیویی</Typography>
        <MediaPlayer
          title="Sprite Fight"
          src="https://files.vidstack.io/sprite-fight/720p.mp4"
        >
          <PlyrLayout
            thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
            icons={plyrLayoutIcons}
          />
          <MediaProvider>
            <Poster
              className="media-poster"
              src="/hero.png"
              alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
            />
          </MediaProvider>
        </MediaPlayer>
      </Container>
    </>
  );
}

export default VideoReviewSection;
