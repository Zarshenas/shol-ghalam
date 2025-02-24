import {  Box,Stack, Button, Checkbox, CssBaseline,FormControlLabel, FormLabel, TextField, Typography} from '@mui/material';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import {PersonOutline , Password} from '@mui/icons-material';
import { Link, replace, useNavigate } from 'react-router-dom';
import { useForm ,Controller  } from "react-hook-form"
import { login, selectAuth } from '../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';

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

function SignIn() {
  const navigate = useNavigate()
  const { clearErrors,control, handleSubmit , formState: { errors },} =useForm();
  const dispatch = useDispatch();
const {status , token , error} = useSelector(selectAuth)
  const onSubmit = (data) => {
    clearErrors()
    dispatch(login(data)).unwrap();
    if(status ==="succeeded" && error === null){
      Cookies.set("token",token,{secure:true , expires:1 })
      toast.success('خوش آمدید.')
      navigate('/',{replace:true})
    }
    if(status ==="failed" && error !== null){
      toast.error(error || 'مشکلی در ورود شما به وجود آمد.')
    }
    
  };
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
          }}
          alt="Logo"
          src="/Logo.svg"
        />
          <Typography
            component="h1"
            variant="h4"
            alignSelf={'center'}
            sx={{ fontSize: 'clamp(24px, 10vw, 16px)' }}
          >
          ورود
          </Typography>
          <Box onSubmit={handleSubmit(onSubmit)}
            component="form"
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
                <FormLabel htmlFor="email" sx={{display:"flex"}}>
                  ایمیل
                <PersonOutline />
                </FormLabel>
                
            <Controller name="email"
                control={control}
                rules={{
                  required: 'ایمیل را وارد کنید',
                  pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'ایمیل معتبر نمی باشد',
          },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type='email'
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                  />
                )}
              />
              <FormLabel htmlFor="password" sx={{display:"flex"}}>
                  رمزعبور
                <Password />
                </FormLabel>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: 'رمز عبور را وارد کنید',
                  minLength: {
                    value: 6,
                    message: 'حداقل 6 کاراکتر وارد کنید',
                  },
                }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="password"
                      variant="outlined"
                      fullWidth
                      error={!!errors.password}
                      helperText={errors.password ? errors.password.message : ''}
                    />
                  )}
                />  
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="مرا به خاطر بسپار"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={status ==="loading"}
            >
              ورود
            </Button>
            <Link
              style={{ alignSelf: 'center' , fontWeight : 700 ,textDecoration:"none",borderBottom: 1 ,borderBottomStyle:"dashed" }}
            >
              <Typography variant="body1" color="text.heading">
                رمز عبور خود را فراموش کرده اید؟
              </Typography>
            </Link>
          </Box>
          
            <Typography sx={{ textAlign: 'center' }}>
            هنوز حساب کاربری ندارید؟
              <Link
              to={'/signup'}
                style={{ alignSelf: 'center', fontWeight : 700 ,textDecoration:"none",borderBottom: 1 ,borderBottomStyle:"dashed"}}
              >
                <Typography variant="body" color="text.heading">
                ثبت نام
                </Typography>
              </Link>
            </Typography>
        </Card>
        <Toaster position='bottom-right'/>
      </SignInContainer>
    </>
  );
}

export default SignIn