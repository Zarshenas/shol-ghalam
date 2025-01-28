import { Box, Typography } from "@mui/material"
function HeroSection() {
  return (
    <Box
          sx={{ textAlign:"center", margin:"150px 0 100px 0",display:"flex",flexDirection:"column", gap:"35px" ,position:"relative"}}
        >
          <Typography variant="h1" color="text.heading">
          به قلم خوش آمدید
          </Typography>
          <Typography variant="h2" fontWeight={500} >
          اینجا جدیدترین مطالب حوزه تکنولوژی قرار داده می شود
          </Typography>
          <Box
                        component="img"
                        alt="triangles"
                        src="/2triangles.svg"
                        sx={{margin:"0 0 0 16px", position:"absolute", top:"-50px", right:{sm:"5%" , lg:"20%"}, zIndex:"-1"}}
                        width={"75px"}
                        />
        </Box>
  )
}

export default HeroSection