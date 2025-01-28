import { Box, Typography } from "@mui/material";
import BlogTag from "../BlogTag";

function BlogCard() {
  return (
    <Box
      sx={{
        maxWidth: 360,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        component="img"
        src="/blogImage.png"
        alt="Descriptive alt text"
        sx={{
          width: "100%",
          height: "243px",
          borderRadius: "2 6px",
          objectFit: "cover",
        }}
      />

      <Box sx={{display:"flex" , gap:1}}>
        <BlogTag tagText={"گیم"} color={{ text: "#444BFF", bg: "rgba(68, 75, 255, 0.1)" }} />
        <BlogTag tagText={"PS5"} color={{ text: "#C11574", bg: "rgba(193, 21, 116, 0.1)" }} />
      </Box>

      <Typography variant="body1" fontWeight="600" color="text.primary">
        جیم رایان: پلی استیشن 5 در مقایسه با پلی استیشن 4 عملکرد بهتری داشته
        است.
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        جیم رایان در مصاحبه‌ای به مقایسه‌ی عملکرد پلی استیشن 5 در ماه‌های ابتدای
        عرضه نسبت به پلی استیشن 4 پرداخته است...
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          component="img"
          src="/blogImage.png"
          alt="Descriptive alt text"
          sx={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <Box>
          <Typography variant="body1" fontWeight="600" color="text.primary">
            علی زرشناس
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            1402/03/12
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BlogCard;
