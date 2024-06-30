import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SectionTitle from '@/components/SectionTitle';
import SectionDescription from '@/components/SectionDescription';
import Image from 'next/image'

export default function Mission(){
    return(
        <>
        <Box id="mission" sx={{position: 'relative',backgroundColor:""}}>
            <Container sx={{py: { xs: 8, md: 10 } }}>
            <Grid container spacing={3} alignItems={"center"} justifyContent={{md:"center",xs:"center"}} >
            <Image src="/img/other/mission_bg.png" alt="チャットgpt ログイン 日本語" layout={`fill`}   style={{objectFit: 'cover',zIndex:-1000 }} />
          <Grid item xs={10} md={10} >
          <Typography 
                gutterBottom 
                variant="h4"
                component="h2"
                color="white"
                fontWeight={700}
                align='center'
                fontSize={{md:30,xs:25}}
                lineHeight={1.8}
                sx={{pt:3,pb:1}}>
                デジタルの力で質の高い教育を全ての人が受けられる社会に
            </Typography>
            </Grid>
            <Grid item xs={10} md={7} >
            <Typography
                gutterBottom 
                variant="h6" 
                component="h3"
                color="white"
                fontSize={{md:20,xs:16}}
                lineHeight={{md:1.8,xs:2.2}}
                align='center'>
            私たちは、すべての人がテクノロジーを活用し、未来を切り拓ける世界を実現します。そのために、年齢、環境、価値観などの枠を超えて、ひとりひとりに寄り添った質の高いIT教育を提供します。
            </Typography>
            </Grid>
            </Grid>
            </Container>
        </Box>
        </>
    )
}