import { AppBar, Box, Button,  Container,  Divider,  Stack,  Toolbar, Typography } from "@mui/material"

function Header() {
  return (
    <AppBar position="static" sx={{backgroundColor:"transparent" , marginBottom:"50px", color:"text.heading"}}>
        <Container>
            <Toolbar disableGutters >
                <Box sx={{
                    width:"100%",
                    display: 'flex',
                    justifyContent: 'space-between', 
                    p: 1,
                    m: 1,
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
                        <Button sx={{backgroundColor:"transparent" , marginRight:"8px" , color:"text.primary"}}>ثبت نام</Button>
                        <Button >ورود</Button>
                    </Stack>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header