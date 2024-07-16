"use client"
 
import { useState } from "react";
import { supabase } from "../utils/supabase";
import {Box, Button, Container,Stack} from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import { useForm, Controller } from "react-hook-form"
import { Typography } from '@mui/material';
import SimpleBackdrop from '@/components/backdrop/SimpleBackdrop';
import FormError from '@/components/snackbar/FormError';
import Link from 'next/link';
import { signIn } from 'next-auth/react'
import { error } from 'console';
 
const Auth = () => {
    const {control, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState<string>();
    const [isBackdropOpen, setBackdropOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
 
  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      alert("Login successful!");
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };
 
  const handleSignUp = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      alert("Sign up successful!");
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };
 
  return (
    <>
    <SimpleBackdrop isOpen={isBackdropOpen} />
        <Grid container spacing={3} alignContent="center" justifyContent="center">
        <Grid item xs={12} md={3}>
        <Box component="form" onSubmit={handleLogin}>
          <Stack spacing={4} p={3}>
          <FormError message={errorMessage} />
            <Box>
                  <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                      required: { value: true, message: '必須入力' }
                  }}
                  render={({ field, formState: { errors } }) => (
                      <TextField
                      {...field}
                      label="メールアドレス"
                      fullWidth
                      size="small"
                      error={errors.text ? true : false}
                      helperText={errors.text?.message as string}
                      InputLabelProps={{ shrink: true }}
                      />
                  )}
                  />
              </Box>
              <Box>
                  <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                      required: { value: true, message: '必須入力' }
                  }}
                  render={({ field, formState: { errors } }) => (
                      <TextField
                      {...field}
                      label="パスワード"
                      fullWidth
                      type='password'
                      size="small"
                      error={errors.text ? true : false}
                      InputLabelProps={{ shrink: true }}
                      helperText={errors.text?.message as string}
                      />
                  )}
                  />
          </Box>
          <Box textAlign="center">
                <Button variant="contained" color="primary" onClick={handleLogin}>
                  <Typography variant="h6" align='center' sx={{  color:"white"}}>
                  ログイン
                  </Typography>
                </Button>
              </Box>
          </Stack>
        </Box>
      </Grid>
      </Grid>
      </>
  );
};
 
export default Auth;