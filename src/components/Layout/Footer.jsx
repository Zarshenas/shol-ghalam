import { Box, Button, Container, Grid2, InputAdornment, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
function Footer() {
  return (
    <>
    <Box sx={{backgroundColor:"#F4F5F7" ,py:4,flexGrow:"2" ,zIndex:-2 }}>
      <Container sx={{position:"relative"}}> 
        <Grid2 container gap={2}>
          <Grid2 size={3} sx={{display:"flex" ,flexDirection:"column" , gap:1 ,}}>
            <Typography variant="body1" fontWeight={600} color="text.heading">حامیان ما</Typography>
            <Link style={{textDecoration:"none" , width:"max-content"}} to={'./'}>
              <Typography variant="body1" color="text.primary">پارس پک | میزبانی و پشتیبانی</Typography>
            </Link>
            <Link style={{textDecoration:"none", width:"max-content"}} to={'./'}>
              <Typography variant="body1" color="text.primary">وب رخ | حس خوب پیکسل ها</Typography>
            </Link>
          </Grid2>
          <Grid2 sx={{display:"flex" ,flexDirection:"column" , gap:1 ,}} size={2}>
          <Typography variant="body1" fontWeight={600}>پرطرفدارترین صفحات</Typography>
              <Link style={{textDecoration:"none", width:"max-content"}} to={'./'}>
                  <Typography color="initial" variant="body1">تکنولوژی</Typography>
              </Link>
              <Link style={{textDecoration:"none", width:"max-content"}} to={'./'}>
                <Typography color="initial" variant="body1">بررسی ویدیویی</Typography>
              </Link>
              <Link style={{textDecoration:"none", width:"max-content"}} to={'./'}>
                <Typography color="initial" variant="body1">موبایل</Typography>
              </Link>
              <Link style={{textDecoration:"none", width:"max-content"}} to={'./'}>
                <Typography color="initial" variant="body1">آنباکسینگ</Typography>
              </Link>
          </Grid2>
          <Grid2 sx={{display:"flex" ,flexDirection:"column" , gap:1 ,}} size={2}>
              <Typography variant="body1" fontWeight={600}>دسترسی سریع</Typography>
              <Link style={{textDecoration:"none", width:"max-content"}} to={'./'}>
                <Typography color="initial" variant="body1">تماس با ما</Typography>
              </Link>
              <Link style={{textDecoration:"none", width:"max-content"}} to={'./'}>
                <Typography color="initial" variant="body1">درباره ما</Typography>
              </Link>
              <Link style={{textDecoration:"none", width:"max-content"}} to={'./'}>
                <Typography color="initial" variant="body1">استخدام نویسنده</Typography>
              </Link>
          </Grid2>
          <Grid2 sx={{display:"flex" ,flexDirection:"column" , gap:1}} size={4}>
          <Typography variant="body1" fontWeight={600}>
            برای اطلاع از آخرین اخبار  عضو شوید 
          </Typography>
          <Box sx={{display:"flex" , alignContent:"center" , justifyContent:"flex-end" , gap:1}}>
          <TextField
            hiddenLabel
            placeholder="ایمیل خود را وارد کنید"
            variant="standard"
            slotProps={{
              input: {
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlinedIcon sx={{margin:"0 0 0 10px "}} />
                      </InputAdornment>
                    ),
                  },
            }}
            sx={{backgroundColor:"white" , borderRadius:"8px" , fontSize:"12px", padding:"8px", width:"100%"}}
            />
          <Button>عضویت</Button>
          </Box>
          </Grid2>
        </Grid2>
      <Box
          sx={{
            opacity:"0.2",
            width: '25px',
            height: '23px',
            position:"absolute",
            top:"35%" ,
            right:"25%",
            backgroundImage:'url(/Logo.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            scale:5,
            rotate:"24deg",
            zIndex:-1,
            objectFit:"cover"
          }}
        >
          <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "90%",
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #F4F5F7 100%)",
        }}
      ></Box>
        </Box>
        <Box
          sx={{
            opacity:"0.2",
            width: '25px',
            height: '23px',
            position:"absolute",
            backgroundImage:'url(/Logo.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            rotate:"-24deg",
            zIndex:-1,
            top:"15%" ,
            left:"0%" , 
            scale:2,
            objectFit:"cover"
          }}
        >
<Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "90%",
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #F4F5F7 100%)",
        }}
      ></Box>
        </Box>
      </Container>
    </Box>
    
      <Box sx={{backgroundColor:"primary.main" , textAlign:"center" , padding:"15px 0"}}>
        <Typography variant="body1" color="primary.contrastText" >© کلیه حقوق مادی و معنوی دوره ها متعلق به این قلم می باشد.</Typography>
      </Box>
      </>
      )
}

export default Footer