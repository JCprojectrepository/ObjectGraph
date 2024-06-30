import { ReactNode } from 'react'
import { Typography } from "@mui/material"


type Props = {
    children: ReactNode
  }

export default function SectionDescription({ children }: Props) {
    return(
        <Typography 
            gutterBottom 
            variant="body1" 
            component="h3"
            color="text.main"
            align='center'
            sx={{pt:1,pb:3}}>
            {children}
        </Typography>
    )
}