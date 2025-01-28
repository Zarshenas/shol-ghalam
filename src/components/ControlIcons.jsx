import Typography from "@mui/material/Typography";
import { Grid2, IconButton } from "@mui/material";
import { FastRewind } from "@mui/icons-material";
import { FastForwardSharp } from "@mui/icons-material";
import { PlayArrowSharp } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { VolumeUp } from "@mui/icons-material";
import { Fullscreen } from "@mui/icons-material";

const ControlIcons = () => {
  const PrettoSlider = styled(Slider)({
    height: 5,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 16,
      width: 16,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#52af77",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });
  return (
    <div className="controls__div">
      {/* Top Segment */}
      <Grid2
        container
        direction="row"
        alignItems="center"
        justifyContent="start"
        style={{ padding: 16 }}
      >
        <Grid2>
          <Typography variant="h5" style={{ color: "white" }}>
            Player
          </Typography>
        </Grid2>
      </Grid2>

      {/* Middle Segment */}
      <Grid2
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <IconButton className="controls__icons" aria-label="reqind">
          <FastForwardSharp fontSize="large" style={{ color: "white" }} />
        </IconButton>

        <IconButton className="controls__icons" aria-label="reqind">
          <PlayArrowSharp fontSize="large" style={{ color: "white" }} />
        </IconButton>

        <IconButton className="controls__icons" aria-label="reqind">
          <FastRewind fontSize="large" style={{ color: "white" }} />
        </IconButton>
      </Grid2>

      {/* Bottom Segment */}
      <Grid2
        container
        direction="column"
        justifyContent="flex-start"
        style={{ padding: 16 }}
      >
        <Grid2>
          <Typography variant="h5" style={{ color: "white" }}>
            Tears Of Steel
          </Typography>
        </Grid2>
        <Grid2>
          <PrettoSlider min={0} max={100} defaultValue={0} />
        </Grid2>
      </Grid2>

      <Grid2 container direction="row-reverse" justifyContent="space-between">
        <Typography variant="h7" style={{ color: "white" }}>
          00:26
        </Typography>
        <Typography variant="h7" style={{ color: "white" }}>
          12:30
        </Typography>
      </Grid2>

      <Grid2 container alignItems="center" spacing={2} direction="row-reverse" width={"100%"} >
        <Grid2>
          <IconButton className="controls__icons" aria-label="reqind">
            <PlayArrowSharp fontSize="large" style={{ color: "white" }} />
          </IconButton>
        </Grid2>
        <Grid2>
          <IconButton className="controls__icons" aria-label="reqind">
            <VolumeUp fontSize="large" style={{ color: "white" }} />
          </IconButton>
        </Grid2>
        <Grid2 size={{ xs: 'grow', md: 6 }}>
            <Slider
              min={0}
              max={100}
              defaultValue={100}
              className="volume__slider"
            />
            <Typography style={{ color: "#fff", paddingTop: "5px" ,display:"inline-block" }}>
              40
            </Typography>
        </Grid2>
      </Grid2>

      <Grid2>
        <Button variant="text" className="bottom__icons">
          <Typography>1X</Typography>
        </Button>

        <IconButton className="bottom__icons">
          <Fullscreen fontSize="large" />
        </IconButton>
      </Grid2>
      {/* </Grid2> */}
    </div>
  );
};

export default ControlIcons;
