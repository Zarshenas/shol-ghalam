import { Box, Container, Divider, Grid2,  } from "@mui/material"
import CategoriesCard from "../components/Home/CategoriesCard"

import HeroSection from "../components/Home/HeroSection";
import BannerSection from "../components/Home/Banner";
import NewestBlogs from "../components/Home/NewestBlogs";
import VideoReviewSection from "../components/Home/VideoReviewSection";
import BlogCard from "../components/Home/BlogCard";
import MostViewedTags from "../components/Home/MostViewedTags";
function Home() {
  return (
    <>
    
      <Container maxWidth="lg">
        <HeroSection/>
        <CategoriesCard/>
        <BannerSection/>
        <NewestBlogs/>
        <VideoReviewSection/>
        <Grid2 container spacing={2} justifyContent={"space-between"}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Grid2>
        <Divider sx={{my:8}}/>
        <MostViewedTags/>
      </Container>
      <Box sx={{
        width: '100%',
        position:"absolute",
        top:"0",
        right:"0",
        height: { xs: '300px', sm: '400px', md: '798px'},
        backgroundImage:'url(/Squares.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
        objectFit:"cover",
      }}>
        <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "20%", // Adjust based on how much gradient you want
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, white 100%)",
        }}
      >
    </Box>
    </Box>
      </>
  )
}

export default Home