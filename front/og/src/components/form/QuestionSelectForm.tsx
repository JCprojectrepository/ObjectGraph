"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { lightGreen, grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { useQuiz } from "@/components/context/QuestionContext";
import Link from 'next/link';
import { Box } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useRouter } from 'next/navigation';
import { result } from '@/components/data/shindan/housework.data';

// ColorButton コンポーネントを再定義し、アクティブな状態に基づいて背景色を変更する
const ChoiceButtonStyle = styled(Button)<ButtonProps & { active: boolean }>(({ theme, active }) => ({
  backgroundColor: active ? lightGreen[500] : grey[200], // アクティブ時は濃いピンク、そうでない時は薄いピンク
  '&:hover': {
    backgroundColor: active ? lightGreen[500] : lightGreen[400],
  },
  height: 48,
  width: 300,
}));

interface Props {
  choice1: string;
  point1: number;
  choice2: string;
  point2: number;
  questionId: number;
}

export function CustomizedButtons(props: Props) {
  const { score, setScore, answeredQuestions, setAnsweredQuestions } = useQuiz();
  const [selectedChoice, setSelectedChoice] = React.useState<{ id: string, points: number } | null>(null);

  const handleClick = (choiceId: string, points: number) => {
    if (selectedChoice?.id === choiceId) {
      return; // If the same button is clicked again, do nothing
    }

    // Calculate the new score based on whether a previous choice was selected
    const newScore = selectedChoice ? score - selectedChoice.points + points : score + points;
    setScore(newScore);

    // Update the selected choice
    setSelectedChoice({ id: choiceId, points });

    // Mark the question as answered
    setAnsweredQuestions(prev => new Set<number>([...prev, props.questionId]));
  };

  return (
    <Stack spacing={7} direction={{md:"row",xs:"column"}}>
      <ChoiceButtonStyle
        variant="contained"
        onClick={() => handleClick("button1", props.point1)}
        active={selectedChoice?.id === "button1"}
      >
        <Typography sx={{ color: "text.secondary", fontWeight:"bold" }}>{props.choice1}</Typography>
      </ChoiceButtonStyle>
      <ChoiceButtonStyle
        variant="contained"
        onClick={() => handleClick("button2", props.point2)}
        active={selectedChoice?.id === "button2"}
      >
        <Typography sx={{ color: "text.secondary", fontWeight:"bold" }}>{props.choice2}</Typography>
      </ChoiceButtonStyle>
    </Stack>
  );
}


// ColorButton コンポーネントを再定義し、アクティブな状態に基づいて背景色を変更する
const SubmitButtonStyle = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(lightGreen[300]),
  backgroundColor: lightGreen[500],
  '&:hover': {
    backgroundColor: lightGreen[700],
  },
  height: 58,
  width: "100%",
  fontWeight: "bold",
  borderRadius: 10,
}));


export function SubmitButton() {
  const { score } = useQuiz();
  const router = useRouter();
  const { isAllQuestionsAnswered } = useQuiz();

  const getDynamicPath = () => {
    // スコアに基づいて適切なtypeNameを検索
    const scoreRange = result.types.find((type: { range: { min: number, max: number } }) => type.range.min <= score && score <= type.range.max);

    return scoreRange ? `/shindan/chatgpt/housework/result/${scoreRange.typeName}` : '/shindan/chatgpt/housework/result';
  };

  // ボタンクリック時の処理
  const handleStartClick = () => {
    const path = getDynamicPath();
    router.push(path);
  };
  return (
    <Box sx={{ mb: 5 }}>
      <SubmitButtonStyle variant="contained" onClick={handleStartClick}  disabled={!isAllQuestionsAnswered()}>
        <Typography variant='h6' sx={{ color: "white", fontWeight: "bold" }}>結果を見る</Typography>
      </SubmitButtonStyle>
    </Box>
  );
}


// ColorButton コンポーネントを再定義し、アクティブな状態に基づいて背景色を変更する
const StartButtonStyle = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(lightGreen[300]),
  backgroundColor: lightGreen[500],
  '&:hover': {
    backgroundColor: lightGreen[700],
  },
  height: 58,
  width: "100%",
  fontWeight: "bold",
  borderRadius: 10,
}));

interface StartButtonProps{
  path: string;
}

export function StartButton(props:StartButtonProps) {
  return (
    < Box sx={{mb:5}}>
      <Link href={props.path}>
      <StartButtonStyle variant="contained" >
        <Typography variant='h6' sx={{ color: "white", fontWeight:"bold", }}>診断する</Typography>
      </StartButtonStyle>
      </Link>
    </Box>
  );
}

// ColorButton コンポーネントを再定義し、アクティブな状態に基づいて背景色を変更する
const RediagnosisButtonStyle = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(lightGreen[300]),
  backgroundColor: lightGreen[500],
  '&:hover': {
    backgroundColor: lightGreen[700],
  },
  height: 58,
  width: "100%",
  fontWeight: "bold",
  borderRadius: 10,
}));


export function RediagnosisButton() {
  return (
    < Box sx={{mb:5}}>
      <Link href="/shindan/chatgpt/housework">
      <RediagnosisButtonStyle variant="contained" >
        <Typography variant='h6' sx={{ color: "white", fontWeight:"bold", }}>再診断する</Typography>
      </RediagnosisButtonStyle>
      </Link>
    </Box>
  );
}


