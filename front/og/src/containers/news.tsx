import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Link from 'next/link'
import { newsList } from './news.data'
import SectionTitle from '@/components/SectionTitle';
import SectionDescription from '@/components/SectionDescription';
import Box from '@mui/material/Box';




export default function NewsTable() {
  return (
    <Box id="news" sx={{}}>
    <Container sx={{py: { xs: 8, md: 7 } }}>
      <SectionTitle>News</SectionTitle>
      <Grid container spacing={2} alignItems={"left"} justifyContent={{md:"left",xs:"center"}} >
          {newsList.map((news, index) => (
          <Grid item xs={5} md={4} key={index}>
            <Box >
            <Card >
              <CardActionArea
                component={Link}
                href={news.url}
                rel="noopener noreferrer">
                <CardMedia
                  component="img"
                  image={news.image}
                  alt={news.name}
                />
                <CardContent>
                  <Typography 
                      variant="body2" 
                      component="h3"  
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: 12, md: 16 },
                      }}>
                  {news.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Box>
          </Grid>
          ))}
  </Grid>
</Container>
</Box>
  );
}