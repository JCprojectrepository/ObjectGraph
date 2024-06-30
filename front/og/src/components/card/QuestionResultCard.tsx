"use client";
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useQuiz } from "@/components/context/QuestionContext";
import { result, useCase } from '@/components/data/shindan/housework.data'
import { lightGreen, grey } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { usePathname } from 'next/navigation';
import SocialShare from '@/components/button/share'
import { CardActionArea } from '@mui/material';
import {RediagnosisButton } from '@/components/form/QuestionSelectForm'



export default function ResultCard(){
    const pathname = usePathname() as string
    // pathnameから最後のパスを取得
    const resultType = pathname.split('/').pop();
    // typeNameがresultTypeのデータを取得
    const resultData = result.types.find((type:any) => type.typeName === resultType);
    // scoreRangeに該当するタイプと説明を取得
    const type = resultData.type;
    const description = resultData.description;
    const advice = resultData.advice;
    const image = resultData.image;
    //  useCaseからresultDataのuseCaseに該当するデータを取得
    // 例 resultDataのuseCaseが[0,1]の場合→useCase[0]とuseCase[1]のデータを取得
    const useCaseData = resultData.useCase.map((index:number) => useCase.cases[index]);
    console.log(useCaseData)
    return (
        <>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={10} md={7}>
                    <Paper 
                        elevation={6} 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            pl:{md:13,xs:3},
                            pr:{md:13,xs:3},
                            mt:10,
                            mb:4, 
                            py: { xs: 8, md: 7 },
                            border:5,
                            borderRadius: 3,
                            borderColor: lightGreen[400]
                             }}>
                        <Typography 
                            variant="h6" 
                            align="center" 
                            sx={{mb:2,
                                fontWeight:"bold", 
                                color: lightGreen[600],
                                fontSize:{md:24,xs:14}
                            }}>
                            {result.title}
                        </Typography>
                        <Typography 
                            variant="h4" 
                            align="center" 
                            sx={{
                                mb:5, 
                                fontWeight:"bold",
                                color: lightGreen[800],
                                fontSize:{md:30,xs:20},
                                }}>
                            {type}タイプ
                        </Typography>
                        <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={12}>
                        <Image 
                        src={image} 
                        width={1920} 
                        height={1080} 
                        layout="responsive"
                        style={{width: '70%',height: 'auto'}} 
                        alt="result image"
                        priority={false} />
                                        </Grid>
            </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={10} md={7}>
                <Stack direction={{md:"row",xs:"column"}} spacing={2}>
                    <Paper 
                        elevation={6} 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            mt:10,
                            mb:2, 
                            py: { xs: 3, md: 7 },
                            border:5,
                            borderRadius: 3,
                            borderColor: lightGreen[400]
                             }}>
                        <Typography 
                            variant="h6" 
                            align="center" 
                            sx={{
                                fontWeight:"bold", 
                                color: lightGreen[600]
                            }}>
                            特徴
                        </Typography>
                        <Box sx={{mb: {md:5,xs:2},p:{md:3,xs:4} }}>
                            <Typography variant="body1" sx={{lineHeight:2.0,color:"text.secondary",fontSize:{md:16,xs:16}}}>
                                {description}
                            </Typography>
                        </Box>
                    </Paper>
                    <Paper 
                        elevation={6} 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            mt:10,
                            mb:2, 
                            py: { xs: 3, md: 7 },
                            border:5,
                            borderRadius: 3,
                            borderColor: lightGreen[400]
                             }}>
                        <Typography 
                            variant="h6" 
                            align="center" 
                            sx={{
                                fontWeight:"bold", 
                                color: lightGreen[600]
                            }}>
                            アドバイス
                        </Typography>
                        <Box sx={{mb: {md:5,xs:2},p:{md:3,xs:4} }}>
                            <Typography variant="body2" sx={{lineHeight:2.0,color:"text.secondary",fontSize:{md:16,xs:16}}}>
                                {advice}
                            </Typography>
                        </Box>
                    </Paper>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{mt:8,mb:7}}>
                <Grid item xs={11} md={8}>
                <Typography variant='h5' align='center' sx={{fontWeight:"bold", color: lightGreen[700],fontSize:{md:24,xs:21} }}>
                診断結果と一緒に<br/>あなたのChatGPT活用術をシェアしよう！
                    </Typography>
                </Grid>
            </Grid>
            <SocialShare />
            <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{mt:8,mb:7}}>
                <Grid item xs={11} md={8}>
                <Typography variant='h5' align='center' sx={{fontWeight:"bold", color: lightGreen[700],fontSize:{md:24,xs:21} }}>
                「{type}」タイプなあなたにおすすめのChatGPT活用術
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={10} md={7}>
                <Stack direction={{md:"row",xs:"column"}} spacing={2}>
                {useCaseData.map((useCase:any, index:number) => (
                <Card 
                    key={index}
                    sx={{
                        border:2,
                        borderRadius: 3,
                        borderColor: lightGreen[400],
                    }}
                    >
                <CardActionArea
                            component="a"
                            href="https://code-college.jp/lp/chatgpt/housework"
                            sx={{textDecoration:"none"}}
                >
                    <CardMedia
                        sx={{ height: 240 }}
                        image={useCase.image}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            variant="h6" 
                            component="div"
                            align="center" 
                             sx={{
                                fontWeight:"bold", 
                                color: lightGreen[600],
                                textDecoration:"none"
                            }}>
                            {useCase.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{lineHeight:2.0,color:"text.secondary",fontSize:{md:16,xs:16}}}>
                        {useCase.description}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    </Card>
                                ))}
                    </Stack>
                </Grid>
            </Grid>
            <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{mt:5}}>
                <Grid item xs={8} md={3}>
                <RediagnosisButton />
                </Grid>
            </Grid>

        </>
    )
}