import {  Box,Stack, Button, Checkbox, CssBaseline,  FormControl, FormControlLabel, FormLabel, Link, TextField, Typography} from '@mui/material';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import {PersonOutline , Password} from '@mui/icons-material';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

function SignUp() {
  return (
    <>
    <CssBaseline enableColorScheme />
    <SignInContainer direction="column" justifyContent="space-between">
      <Card variant="outlined">
      <Box
  component="img"
  sx={{
    width:"50px",
    margin:"0 auto",
    borderRadius:"50%"
  }}
  alt="The house from the offer."
  src="/ghalam.png"
/>
        <Typography
          component="h1"
          variant="h4"
          alignSelf={'center'}
          sx={{ fontSize: 'clamp(24px, 10vw, 16px)' }}
        >
        ورود
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 2,
          }}
        >
          <FormControl >
            <FormLabel htmlFor="email" sx={{display:"flex"}}>
              ایمیل
            <PersonOutline />
            </FormLabel>
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>
          <FormControl>
          <FormLabel htmlFor="email" sx={{display:"flex"}}>
            رمز عبور
            <Password/>
          </FormLabel>
            <TextField
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="مرا به خاطر بسپار"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
          >
            ورود
          </Button>
          <Link
            component="button"
            type="button"
            variant="body2"
            sx={{ alignSelf: 'center' , fontWeight : 700 ,textDecoration:"none",borderBottom: 1 ,borderBottomStyle:"dashed"}}
          >
            رمز عبور خود را فراموش کرده اید؟
          </Link>
        </Box>
        
          <Typography sx={{ textAlign: 'center' }}>
          هنوز حساب کاربری ندارید؟
            <Link
              href="/signup"
              variant="body2"
              sx={{ alignSelf: 'center', fontWeight : 700 ,textDecoration:"none",borderBottom: 1 ,borderBottomStyle:"dashed"}}
            >
              ثبت نام
            </Link>
          </Typography>
      </Card>
    </SignInContainer>
    </>
  );
}

export default SignUp