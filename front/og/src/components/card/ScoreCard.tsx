"use client";
import React from 'react';
import { Typography } from '@mui/material';
import { useQuiz } from '@/components/context/QuestionContext'; // 正しいパスを確認してください

export const DisplayScore = () => {
  const { score } = useQuiz();

  return (
    <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
      現在の合計得点: {score}
    </Typography>
  );
}
