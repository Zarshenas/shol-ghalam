import { Box, Button, Grid2 } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
function NewestBlogs() {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            mb: 3,
          }}
        >
          <Typography variant="h1" color="text.heading">
            جدید ترین مقالات
          </Typography>
          <Link
            style={{
              textDecoration: "none",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            to={"/category/6"}
          >
            <Button
              sx={{
                backgroundColor: "rgba(68, 75, 255, 0.1)",
                color: "text.heading",
              }}
            >
              مشاهده همه
            </Button>
          </Link>
        </Box>
        <Grid2 container spacing={2} justifyContent={"space-between"}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Grid2>
      </Box>
    </>
  );
}

export default NewestBlogs;
