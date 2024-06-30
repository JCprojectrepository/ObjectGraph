import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <Button variant="outlined">
        Sign In
      </Button>
      <Button>Sign Up</Button>
    </Box>
  )
}

export default AuthNavigation