import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { SignUp } from "../../../../features/auth/api/Signup";

export const SignupPage = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const result = await SignUp(data);
      if (result) {
        // 에러 발생
        alert(result);
      } else {
        // 성공
        alert("회원가입이 성공적으로 완료되었습니다.");
        // 여기에 회원가입 성공 후 처리 로직 추가 (예: 로그인 페이지로 리다이렉트)
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          회원가입
        </Typography>
        {/* <Box component='form' noValidate sx={{ mt: 3 }}> */}
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
         

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='메일(로그인 아이디)'
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='비밀번호'
                type='password'
                id='password'
                autoComplete='new-password'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete='given-name'
                name='nickName'
                required
                fullWidth
                id='nickName'
                label='이름(실명)'
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='role'
                required
                fullWidth
                id='role'
                label='역할'
                autoFocus
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            위 정보로 가입하기
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link href='/login' variant='body2'>
                로그인 페이지로 이동
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
