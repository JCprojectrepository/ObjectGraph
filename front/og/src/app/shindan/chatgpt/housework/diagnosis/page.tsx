"use client";
import Box from '@mui/material/Box'
import QestionCard from '@/components/card/QuestionCard'
import { questions,questionDetail } from '@/components/data/shindan/housework.data'
import { lime, lightGreen } from '@mui/material/colors';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { SubmitButton } from '@/components/form/QuestionSelectForm'

export default function Diagnosis(){
    return (
        <> 
        <Box sx={{mb:7}}>
            <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{mt:8,mb:7}}>
                <Grid item xs={12} md={8}>
                <Typography variant='h5' align='center' sx={{fontWeight:"bold", color: lightGreen[700] }}>当てはまる方の選択肢を選んでください</Typography>
                <Typography variant='h6' align='center' sx={{fontWeight:"bold",color: lightGreen[700],mt:2 }}>全{questionDetail.numberOfQuestions}問</Typography>
                </Grid>
            </Grid>
            {questions.map((question, index) => (
                <>

                <Typography variant='h4' align='center' sx={{fontWeight:"bold", color: lightGreen[500],mb:4 }}>Q.{index+1}</Typography>

                <QestionCard key={index} questionData={question} questionId={index} />
                </>
            ))}
            <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{mb:7}}>
                <Grid item xs={10} md={3}>
                    <SubmitButton/>
                </Grid>
            </Grid>
            </Box>
        </>
    )
}