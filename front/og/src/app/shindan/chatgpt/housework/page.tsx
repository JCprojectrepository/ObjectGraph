"use client";
import Box from '@mui/material/Box'
import { pink } from '@mui/material/colors';
import QestionCard from '@/components/card/QuestionCard'
import { questions } from '@/components/data/shindan/housework.data'
import Image from 'next/image'
import refund from '@/public/img/service/codecollege.jpg'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { StartButton } from '@/components/form/QuestionSelectForm'
import { lime, lightGreen } from '@mui/material/colors';

import React, { useState, useEffect } from 'react';

function ResponsiveImageComponent() {
  const [imageSrc, setImageSrc] = useState("/shindan/chatgpt/housework/hero_pc.png"); // デフォルトはモバイル画像

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setImageSrc("/shindan/chatgpt/housework/hero_pc.png"); // PC用画像
      } else if (screenWidth >= 768) {
        setImageSrc("/shindan/chatgpt/housework/hero_tablet.png"); // iPad用画像
      } else {
        setImageSrc("/shindan/chatgpt/housework/hero_smartphone.png"); // スマートフォン用画像
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // コンポーネントのマウント時に実行

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box sx={{ mb: 7}}>
      <Image src={imageSrc} alt="チャットGPT ログイン 日本語" layout={`fill`} objectFit={`cover`} />
      <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ mb: 7, mt: { md: "63vh", sm:"55vh",xs:"55vh" } }}>
        <Grid item xs={5} md={3}>
          <StartButton path="/shindan/chatgpt/housework/diagnosis" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ResponsiveImageComponent;
