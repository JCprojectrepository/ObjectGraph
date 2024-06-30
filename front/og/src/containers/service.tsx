import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { serviceList } from './service.data';
import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import SectionDescription from '@/components/SectionDescription';
import Box from '@mui/material/Box';

export default function Service() {
  return (
    <Box id="service" sx={{}}>
    <Container sx={{py: { xs: 8, md: 7  } }}>
    <SectionTitle>Service</SectionTitle>
    <Grid container spacing={3} justifyContent={{md:"left",xs:"center"}}  >
    {serviceList.map((service, index) => (
      <Grid item xs={10} md={6}key={index}>
        <Card >
          <CardActionArea
            component={Link}
            href={service.url}
            rel="noopener noreferrer">
            <CardMedia
              component="img"
              image={service.image}
              alt={service.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {service.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {service.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </Grid>
      ))}
  </Grid>
</Container>
</Box>
  );
}
