import { Box, Container, Grid2, Typography } from '@mui/material'
import BlogTag from '../BlogTag'

function MostViewedTags() {
  return (
    <Container>
        <Box sx={{display:"flex" , alignItems:"center" ,justifyContent: "center", gap:2 , flexGrow: 1 }}  >
            <Grid2 container direction={"row"} spacing={0.5} columns={2}  sx={{
                justifyContent: "center",
                alignItems: "flex-end",
                width:"30px",
  }}>
                <Grid2 size={1}>
                    <Box sx={{width:"14px" , height:"14px" ,backgroundColor:"#d9d9d95e" , borderRadius:"3px" }}></Box>
                </Grid2>
                <Grid2 size={1}>
                    <Box sx={{width:"14px" , height:"14px" ,backgroundColor:"#d9d9d9" , borderRadius:"3px" }}></Box>
                </Grid2>
                <Grid2 size={1}>
                    <Box sx={{width:"14px" , height:"14px" ,backgroundColor:"#d9d9d95e" , borderRadius:"3px" }}></Box>
                </Grid2>
                <Grid2 size={1}>
                    <Box sx={{width:"14px" , height:"14px" ,backgroundColor:"#d9d9d95e" , borderRadius:"3px" }}></Box>
                </Grid2>
            </Grid2>
            <Typography variant="h2" color="text.primary">پربازدیدترین دسته بندی ها</Typography>
        </Box>
            <Box sx={{margin:"24px auto",display:"flex" , flexWrap:"wrap" , alignItems:"center" , justifyContent:"center",gap:2 , maxWidth:"400px"}}>
                <BlogTag tagText={"سخت افزار"} color={{text:"rgba(129, 130, 132, 1)" , bg:"rgba(228, 230, 233, 1)"}}/>
                <BlogTag tagText={"راهنمای خرید"} color={{text:"rgba(100, 86, 174, 1)" , bg:"rgba(230, 230, 255, 1)"}}/>
                <BlogTag tagText={"بررسی ویدیویی"} color={{text:"rgba(103, 179, 195, 1)" , bg:"rgba(221, 254, 246, 1)"}}/>
                <BlogTag tagText={"موبایل"} color={{text:"rgba(184, 99, 132, 1)" , bg:"rgba(255, 239, 247, 1)"}}/>
                <BlogTag tagText={"گیمینگ"} color={{text:"rgba(123, 151, 77, 1)" , bg:"rgba(229, 255, 179, 1)"}}/>
                <BlogTag tagText={"شاتر"} color={{text:"rgba(96, 123, 194, 1)" , bg:"rgba(215, 237, 254, 1)"}}/>
                <BlogTag tagText={"لپ تاپ"} color={{text:"rgba(189, 134, 54, 1)" , bg:"rgba(252, 247, 218, 1)"}}/>
            </Box>
    </Container>
  )
}

export default MostViewedTags