import { Box, Container, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import CategoriesCard from "../components/CategoriesCard"
import { AlarmOutlined} from '@mui/icons-material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
function Home() {
  return (
    <>
    
      <Container maxWidth="lg">
        <Box
          sx={{ textAlign:"center", margin:"100px 0",display:"flex",flexDirection:"column", gap:"35px" ,position:"relative"}}
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
        <CategoriesCard/>
        <Box sx={{position:"relative" , margin:"0 0 100px 0"}}>
          <Box component={"img"} src="/hero.png" alt="hero" sx={{width:"100%" , borderRadius:"32px"}}/>
          <Box sx={{position:"absolute" ,borderRadius:"30px" , border:"2px solid white",marginLeft: "auto",marginRight: "auto",left: "0",right: "0" , bottom:"-50px",background: "linear-gradient(#6d78de, #9f9dee)" , width:{sm:"80%",md:"60%"} , height:"100px" , color:"white" , display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}> 
          <Typography variant="h2" fontWeight={800}> عرضه ویندوز ۱۲ با هوش مصنوعی </Typography>
          <Typography variant="body1" fontWeight={500}> ویندوز ۱۱ به‌لطف هوش مصنوعی قرار است تغییراتی قابل‌توجه به خود ببیند...</Typography>
          </Box>
          <Box sx={{display:"flex",color:"white", gap:"10px", position:"absolute", top:"20px", left:"20px",  padding:"10px"}}>
            <AlarmOutlined/>
            <Typography variant="body1" fontWeight={800}> زمان مطالعه : ۱۵ دقیقه </Typography>
          </Box>
          <Box sx={{display:"flex",color:"white", gap:"10px", position:"absolute", right:"20px", top:"20px",  padding:"10px"}}>
            <CalendarMonthOutlinedIcon/>
            <Typography variant="body1" fontWeight={800}> تاریخ انتشار : 1403/03/12</Typography>
          </Box>
        </Box>
        <Link to={"/signup"}>signup</Link>
        <Link to={"/login"}>login</Link>
      </Container>
      <Box sx={{
        width: '100%',
        position:"absolute",
        top:"0",
        right:"0",
        height: { xs: '300px', sm: '400px', md: '798px'},
        backgroundImage: 'url(/Squares.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
      }}>
    </Box>
      </>
  )
}

export default Home