"use client";
import React from 'react';
import { Button, Typography, Grid, Stack } from '@mui/material';
import { FacebookShareButton, TwitterShareButton, LineShareButton,  FacebookIcon, TwitterIcon, LineIcon } from 'next-share';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// スタイル定義
const FacebookButton = styled(Box)(({ theme }) => ({
  backgroundColor: '#3b5998',
  color: 'white',
  width: 200,
  '&:hover': {
    backgroundColor: '#344e86',
  },
}));

const TwitterButton = styled(Box)(({ theme }) => ({
  backgroundColor: 'black',
  color: 'white',
  width: 200,
  '&:hover': {
    backgroundColor: 'gray',
  },
}));

const LineButton = styled(Box)(({ theme }) => ({
  backgroundColor: '#00c300', // LINEの特徴的な緑
  color: 'white',
  width: 200,
  '&:hover': {
    backgroundColor: '#009900',
  },
}));

const SocialShare = () => {
  const url = "https://yourwebsite.com";
  const title = "Check out this great website!";

  return (
    <Grid container justifyContent="center" alignItems="center" >
      <Grid item xs={6}>
        <Stack direction={{xs:"column",md:"row"}} spacing={2} justifyContent="center">
          <FacebookShareButton url={url} quote={title}>
            <FacebookButton>
              <FacebookIcon size={40} round />
            </FacebookButton>
          </FacebookShareButton>
          <TwitterShareButton url={url} title={title}>
            <TwitterButton>
              <TwitterIcon size={40} round />
            </TwitterButton>
          </TwitterShareButton>
          <LineShareButton url={url} title={title}>
            <LineButton>
              <LineIcon size={40} round />
            </LineButton>
          </LineShareButton>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SocialShare;