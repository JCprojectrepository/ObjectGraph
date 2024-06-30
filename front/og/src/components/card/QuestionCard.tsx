import { CustomizedButtons } from '@/components/form/QuestionSelectForm'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import { Question } from '@/components/data/shindan/housework.data'
import { lightGreen, grey } from '@mui/material/colors';
interface QuestionCardProps {
    questionData: Question;
    questionId: number;
  }

export default function QuestionCard( { questionData,questionId }: QuestionCardProps ){
    return (
      <>
        <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{mb:10}}>
            <Grid item xs={11} md={8}>
                <Paper elevation={3} sx={{ 
                      display: 'flex', 
                      flexDirection: 
                      'column', alignItems: 
                      'center', justifyContent: 
                      'center', mb:4, 
                      border:5,
                      borderRadius: 3,
                      p: { xs: 5, md: 5 },
                      borderColor: lightGreen[400],
                      py: { xs: 8, md: 7 } }}>
                    <Typography variant="h5" component="h5" gutterBottom sx={{mb:{md:5,xs:5},fontWeight:"bold",fontSize:{md:25,xs:18},color:grey[700]}}>
                        {questionData.questionText}
                    </Typography>
                    <CustomizedButtons 
                        choice1={questionData.choices[0].choiceText} 
                        choice2={questionData.choices[1].choiceText}
                        point1 = {questionData.choices[0].point}
                        point2 = {questionData.choices[1].point}
                        questionId={questionId}  />
                </Paper>
            </Grid>
        </Grid>
      </>
    )
}






