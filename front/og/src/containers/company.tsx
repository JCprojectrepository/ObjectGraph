import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Map from '@/components/map/googlemap'
import SectionTitle from '@/components/SectionTitle';
import SectionDescription from '@/components/SectionDescription';

interface ConpanyData {
    label: string;
    text: string;

  }

export const companyData: ConpanyData[] = [
    {
        label: "会社名",
        text: "Alto Software株式会社",
    },
    {
        label: "住所",
        text: "〒150-0001 東京都渋谷区神宮前六丁目23番4号 桑野ビル2階",
      },
    {
        label: "電話番号",
        text: "03-6693-0481",
    },
    {
        label: "代表取締役",
        text: "水挽義男",
    },
    {
        label: "設立",
        text: "2009年2月",
    },
]

export default function Company(){
  return (
    <Box id="company" sx={{}}>
      <Container sx={{ py: { xs: 8, md: 7 }}}>
        <SectionTitle>Company</SectionTitle>
        <Grid container spacing={3} alignContent="center" justifyContent="center" >
          <Grid item xs={10} md={6}>
          <Table size="small">
              <TableBody>
                  {companyData.map((data) => (
                      <TableRow key={data.label}>
                          <TableCell sx={{ width: {md:"10vw",xs:"30vw"} }}>
                          <Typography
                          variant='body1'>
                            {data.label}
                          </Typography>
                          </TableCell>
                          <TableCell>
                          <Typography
                          variant='body2'>
                            {data.text}
                          </Typography>
                            </TableCell>
                          <TableCell></TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
          </Grid>
          <Grid item xs={10} md={6}>
          <Map/>
          </Grid>
        </Grid>

      </Container>
      </Box>
  )
}