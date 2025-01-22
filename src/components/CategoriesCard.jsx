import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function CategoriesCard() {
  return (
    <Box sx={{backgroundColor:"white", maxWidth:"800px",margin:"0 auto 100px auto", padding:"10px", borderRadius:"10px", border:"1px solid #ECECEC",display:"flex", gap:"10px" , alignItems:"center",justifyContent:"space-between"}}> 
        <Link   style={{textDecoration:"none"}} to={"/category/1"}><Typography variant="body1" color="initial">موبایل</Typography></Link>
        <Link   style={{textDecoration:"none"}} to={"/category/2"}><Typography variant="body1" color="initial">کامپیوتر</Typography></Link>
        <Link   style={{textDecoration:"none"}} to={"/category/3"}><Typography variant="body1" color="initial">سخت افزار</Typography></Link>
        <Link   style={{textDecoration:"none"}} to={"/category/4"}><Typography variant="body1" color="initial">سیستم عامل</Typography></Link>
        <Link   style={{textDecoration:"none"}} to={"/category/5"}><Typography variant="body1" color="initial">بررسی ویدیویی</Typography></Link>
        <Link   style={{textDecoration:"none"}} to={"/category/6"}>
        <Button>
            مشاهده همه
        </Button>
        </Link>
    </Box>
  )
}

export default CategoriesCard