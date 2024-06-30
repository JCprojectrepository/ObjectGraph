'use client';
import {Box, Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { useState,useContext } from "react";
import { GetHeader } from "@/services/getHeader";
import { postData } from "@/services/api";
import { contact_types } from '@/data/contact.data';
import axios, { AxiosError } from 'axios';
import { useErrorHandler } from '@/services/errorHandler';
import SendIcon from '@mui/icons-material/Send';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



interface Props {
    redirectPath: string;
}



export default function ContctForm(props:Props) {
    const { redirectPath } = props;
    const { control, handleSubmit, setError, formState: { errors } } = useForm();
    const [cookies] = useCookies();
    const config = GetHeader({ cookies: cookies });
    const router = useRouter();
    const { handleError } = useErrorHandler();
    const [isBackdropOpen, setBackdropOpen] = useState(false);

    const putContact = async (controlData: any) => {
        setBackdropOpen(true);
        try {
            await postData(
                `api/v1/contact/`,
                {
                    last_name: controlData.last_name,
                    first_name: controlData.first_name,
                    last_name_furigana: controlData.last_name_furigana,
                    first_name_furigana: controlData.first_name_furigana,
                    email: controlData.email,
                    contact_type: controlData.contact_type,
                    message: controlData.message,
                },
                config,true);
            router.push(redirectPath);
        } catch (error) {
            console.error(error);
            if (axios.isAxiosError(error)) {
              handleError(error as AxiosError);
          } else {
              console.error('An unexpected error occurred:');
          }
        }
    }

  return (
    <>
    <Card sx={{ width: 500 }}>
        <CardContent>
        <Box id="contactForm"component="form" onSubmit={handleSubmit(putContact)}>   
              <Box  sx={{ display: 'flex', flexWrap: 'wrap', width: '60ch' }}>
                <div>
                <Controller
                name="last_name"
                control={control}
                defaultValue=""
                rules={{
                    required: { value: true, message: '必須入力' }
                }}
                render={({ field, formState: { errors } }) => (
                      <TextField
                      {...field}
                      required
                      id="last_name"
                      label="苗字"
                      name="last_name"
                      autoComplete="last_name"
                      sx={{ pr: 1,width:"30ch"}}
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      error={errors.last_name ? true : false}
                      helperText={errors.last_name?.message as string}
                      
                  />
                )}
                />
                <Controller
                name="first_name"
                control={control}
                defaultValue=""
                rules={{
                    required: { value: true, message: '必須入力' }
                }}
                render={({ field, formState: { errors } }) => (
                    <TextField
                    {...field}
                    sx={{ pr: 1,width:"30ch"}}
                    required
                    label="名前"
                    size="small"
                    id="first_name"
                    name="first_name"
                    InputLabelProps={{ shrink: true }}
                    error={errors.first_name ? true : false}
                    helperText={errors.first_name?.message as string}
                    />
                )}
                />
                </div>
              </Box>


              <Box  sx={{ display: 'flex', flexWrap: 'wrap',mt:3, width: '60ch' }}>
                <div>
                <Controller
                name="last_name_furigana"
                control={control}
                defaultValue=""
                rules={{
                    required: { value: true, message: '必須入力' }
                }}
                render={({ field, formState: { errors } }) => (
                    <TextField
                    {...field}
                    sx={{ pr: 1,width:"30ch"}}
                    required
                    label="苗字(フリガナ)"
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    error={errors.last_name_furigana ? true : false}
                    helperText={errors.last_name_furigana?.message as string}
                    />
                )}
                />
                <Controller
                name="first_name_furigana"
                control={control}
                defaultValue=""
                rules={{
                    required: { value: true, message: '必須入力' }
                }}
                render={({ field, formState: { errors } }) => (
                    <TextField
                    {...field}
                    sx={{ pr: 1,width:"30ch"}}
                    required
                    id="first_name_furigana"
                    name="first_name_furigana"
                    label="名前(フリガナ)"
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    error={errors.first_name_furigana ? true : false}
                    helperText={errors.first_name_furigana?.message as string}
                    />
                )}
                />
                </div>
              </Box>
              <Box  sx={{ display: 'flex', flexWrap: 'wrap',mt:3 }} >
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
                    fullWidth
                    required
                    sx={{ pr: 1, width: '60ch'}}
                    id="email"
                    name="email"
                    size="small"
                    label="メールアドレス"
                    InputLabelProps={{ shrink: true }}
                    error={errors.email ? true : false}
                    helperText={errors.email?.message as string}
                    />
                )}
                />
                </Box>
                <Box  sx={{ display: 'flex', flexWrap: 'wrap',mt:3 }} >
                <Controller
                    name="contact_type"
                    control={control}
                    defaultValue={contact_types[0].value}
                    rules={{
                        required: { value: false, message: '必須入力' }
                    }}
                    render={({ field, formState: { errors } }) => (
                        <Select
                        {...field}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            fullWidth
                            size="small"
                            sx={{ mb: 2, width: '60ch'}}
                        >
                            {contact_types.map(({ value, label }, index) => (
                                <MenuItem key={index+label} value={value}>{label}</MenuItem>
                                ))}
                        </Select>
                    )}
                />
                </Box>
                <Box  sx={{ display: 'flex', flexWrap: 'wrap',mt:3 }} >
              <Controller
                name="message"
                control={control}
                defaultValue=""
                rules={{
                    required: { value: true, message: '必須入力' }
                }}
                render={({ field, formState: { errors } }) => (
                    <TextField
                    {...field}
                    fullWidth
                    required
                    size="small"
                    multiline
                    rows={4}
                    name="message"
                    label="お問い合わせ内容"
                    sx={{width: '60ch'}}
                    InputLabelProps={{ shrink: true }}
                    error={errors.message ? true : false}
                    helperText={errors.message?.message as string}
                    />
                )}
                />  
                </Box>
                <Button color="primary" size="small" type="submit" variant="contained" sx={{color:"white",fontSize:12,mt:2}} endIcon={<SendIcon />}>
        送信する
    </Button>
    </Box>
            </CardContent>
        </Card>
    </>
  );
}