import { Box } from "@mui/material";
import { GridOverlay } from "@mui/x-data-grid";

const CustomLoader = () => {
  return (
    <GridOverlay>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          svg: {
            width: "64px",
            height: "48px",
            "& polyline": {
              fill: "none",
              strokeWidth: 3,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            "& #back": {
              stroke: "#ff4d5033",
            },
            "& #front": {
              stroke: "#ff4d4f",
              strokeDasharray: "48, 144",
              strokeDashoffset: 192,
              animation: "dash_682 1.4s linear infinite",
            },
          },
          "@keyframes dash_682": {
            "72.5%": {
              opacity: 0,
            },
            to: {
              strokeDashoffset: 0,
            },
          },
        }}
      >
        <svg>
          <polyline
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
            id="back"
          />
          <polyline
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
            id="front"
          />
        </svg>
      </Box>
    </GridOverlay>
  );
};

export default CustomLoader;
