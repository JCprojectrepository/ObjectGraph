import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Image from 'next/image'


interface Props{
  localdata: any
}


export default function HomeAbout({localdata}: Props) {
  return (
    <Box id="about" sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#121212' }}>
      <Container>
      <Grid container spacing={3} alignContent="center" justifyContent="center">
          <Grid item xs={10} md={8}>
          <Typography
                component="h2"
                align="center"
                sx={{
                    letterSpacing: 10,
                    position: 'relative',
                    lineHeight: '1.6', 
                    fontSize: { xs: 40, md: 80 },
                    color: 'white',
                    mb:1,
                    fontWeight: '100',
                }}
                >
                C
                <Typography
                component="mark"
                sx={{
                    letterSpacing: 10,
                    position: 'relative',
                    lineHeight: '1.6', 
                    fontSize: { xs: 40, md: 60 },
                    fontWeight: 'light',
                    color: 'white',
                    backgroundColor: 'unset',
                }}
                >
                oncept
                </Typography>
        </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignContent="center" justifyContent="center">
          <Grid item xs={8} md={8}>
          <Typography 
          align="center" 
          variant='body1'
          sx={{ 
            mt:1,
            mb:5,
            letterSpacing: 3,
            lineHeight: 2,
            fontWeight: 'bold',
            color:"white",

             }}>
          {localdata.concept}
            </Typography>
            <Typography 
          align="center" 
          variant='h6'
          sx={{ 
            mt:1,
            mb:5,
            letterSpacing: 3,
            lineHeight: 2,
            fontWeight: 'bold',
            color:"white",
            textDecoration: 'underline',

             }}>
          {localdata.note}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={6} alignContent="center" justifyContent="center">
          <Grid item xs={10} md={10}>
              <Image src="/img/29085535_m 1.png" alt="Hero img" width={1080} height={1980} layout="responsive"style={{width: '100%',height: 'auto' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
