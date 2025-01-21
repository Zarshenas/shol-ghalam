import { AppBar, Box, Button,  Divider,  Stack,  Toolbar, Typography } from "@mui/material"

function Header() {
  return (
    <AppBar position="static" sx={{backgroundColor:"transparent" , marginBottom:"50px", color:"text.heading"}}>
        <Toolbar disableGutters>
            <Box sx={{
                width:"100%",
                display: 'flex',
                justifyContent: 'space-between', 
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
            }}>
                <Box sx={{display:"flex"}}>
                <Box
                    component="img"
                    alt="logo"
                    src="/Logo.svg"
                    sx={{margin:"0 0 0 16px"}}
                />
                <Typography variant="body1" fontWeight={"bold"} fontSize={"28px"} >قلم</Typography>
                </Box>
                <Stack direction="row" divider={<Divider sx={{margin:"0 8px"}} orientation="vertical" flexItem />}>
                    <Button sx={{backgroundColor:"transparent" , marginRight:"8px"}}>ثبت نام</Button>
                    <Button sx={{backgroundColor:"primary.main", color:"white"}} >ورود</Button>
                </Stack>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header