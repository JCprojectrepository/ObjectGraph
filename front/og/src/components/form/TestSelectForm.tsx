"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { pink, grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography'

// ColorButton コンポーネントを再定義し、アクティブな状態に基づいて背景色を変更する
const ColorButton = styled(Button)<ButtonProps & { active: boolean }>(({ theme, active }) => ({
  backgroundColor: active ? pink[700] : grey[500], // アクティブ時は濃いピンク、そうでない時は薄いピンク
  '&:hover': {
    backgroundColor: active ? pink[800] : pink[400],
  },
  height: 48,
  width: 300,
}));

export default function CustomizedButtons() {
  const [activeButton, setActiveButton] = React.useState<string | null>(null);

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <Stack spacing={7} direction="row">
      <ColorButton
        variant="contained"
        onClick={() => handleClick("button1")}
        active={activeButton === "button1"} // active プロパティを ColorButton に渡す
      >
        <Typography sx={{ color: "white" }}>
        Custom CSS
        </Typography>
      </ColorButton>
      <ColorButton
        variant="contained"
        onClick={() => handleClick("button2")}
        active={activeButton === "button2"} // active プロパティを ColorButton に渡す
      >
        <Typography sx={{ color: "white" }}>
        Custom CSS
        </Typography>
      </ColorButton>
    </Stack>
  );
}
