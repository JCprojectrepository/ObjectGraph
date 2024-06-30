import Box from '@mui/material/Box'
import React from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

export default function Hero() {    
  return (
    <Box id="hero" sx={{ position: 'relative',  py: { xs: 27, md:20 }  }}>
      <Container>
      <Grid container spacing={0} alignItems={"center"} justifyContent={{md:"center",xs:"center"}}  >
          <Grid item xs={5} md={2}>
          <Box  >
            <Image 
              src={"/img/logo/logo_text.png"} 
              alt="alto software logo"
              width={1280} height={1080} layout="responsive" />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={0} alignItems={"center"} justifyContent={{md:"center",xs:"center"}}  >
          <Grid item xs={10} md={8}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'center' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h5"
                  component="h1"
                  sx={{
                    position: 'relative',
                    letterSpacing: 1.5,
                    lineHeight: 1.6,
                    fontSize: { xs: 15, md: 30 },
                  }}
                >
                  Creating a society where everyone can receive high-quality education through the power of digital.
                </Typography>
              </Box>
            </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
          </Grid>
        </Grid>
      </Container>
    </Box>
    
  )
}