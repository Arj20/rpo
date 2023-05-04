import classes from '../styles/image.module.css'
import bgvideo from '../assets/bg-video.mp4'
import { Box, Slide, Typography } from '@mui/material'
import { Suspense } from 'react'
import { Loader } from './Loader'
export const ImageWrapper = () => {

    return <Box>
        <Box className={classes.overlay}></Box>
        <Suspense fallback={() => <Loader message="Loading..." />} >
            <video className={classes.video} src={bgvideo} autoPlay loop muted />
        </Suspense>
        <Slide direction="down" in={true} timeout={500} mountOnEnter unmountOnExit>
            <Box className={classes.content}>
                <Typography variant="h2" fontWeight="700" >Welcome to Rahul RPO</Typography>
                <Typography variant="h4" fontWeight="700" >Begin Your Journey With Us...</Typography>
            </Box>
        </Slide>
    </Box>
}