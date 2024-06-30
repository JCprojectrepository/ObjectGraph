import React, { FC } from 'react'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Link from 'next/link'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { navigations } from './viewer-navigation.data'

export const ViewerNavigation: FC = (props: any) => {

  const theme = useTheme();

  return (
    <>
    {navigations.map(({ label, path}) => (
        <Link href={path} key={label}>
        <ListItem key={label} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: props.open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: props.open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={label} sx={{ opacity: props.open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </Link>
      ))}</>
  )
}

export default ViewerNavigation


