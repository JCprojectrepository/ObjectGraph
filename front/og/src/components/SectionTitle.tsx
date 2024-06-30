import { ReactNode } from 'react'
import { Typography } from "@mui/material"
import Grid from '@mui/material/Grid'


type Props = {
    children: ReactNode
  }

export default function SectionTitle({ children }: Props) {
    return(
        <>
        <Grid container spacing={3} alignItems={"center"} justifyContent={{md:"center",xs:"center"}} >
            <Grid item xs={10} md={4} >
                <Typography 
                    variant="h2" 
                    component="h2"
                    color="text.main"
                    align='center'
                    fontSize={{md:60,xs:34}}
                    sx={{pb:0}}>
                    {children}
                </Typography>
            </Grid>
        </Grid>
        <Grid container spacing={3} alignItems={"center"} justifyContent={{md:"center",xs:"center"}} >
            <Grid item xs={10} md={4} sx={{pb:5}} >
                <hr></hr>
            </Grid>
        </Grid>
    </>
    )
}