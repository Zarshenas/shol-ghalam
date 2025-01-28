import { Box , Typography } from "@mui/material"
import { AlarmOutlined} from '@mui/icons-material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
function BannerSection() {
  return (
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
  )
}

export default BannerSection