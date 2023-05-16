import { Box, Button, Card, CardContent, Typography } from "@mui/material"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import classes from '../styles/card.module.css'
import styled from "@emotion/styled";
const cards = [{
    title: 'Recruitment Consultancy',
    desc: 'we assist you with Offshore Recruitment, Corp to Corp/W2 Recruitment, Permanent /Fulltime staffing Recruitment, and VMS Recruitment.',
    href: '',
    imageUrl: '../assets/rec1.avif',
    class: 'card-0'
},
{
    title: 'Our Core Values',
    desc: 'Since our establishment, we have maintained our core specifics like accuracy, flexibility, quality, and accountability to every single process to live up to clients’ expectations.',
    href: '',
    imageUrl: '../assets/rec2.avif',
    class: 'card-1'

},
{
    title: 'Quality Assurance',
    desc: 'Before sharing the portfolio of any candidate, we ensure to match skill sets with your requirements, and hence, we conduct a detailed pre-screening process.',
    href: '',
    imageUrl: '../assets/rec3.avif',
    class: 'card-2'
},
]

const StyledTypography = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
        'fontSize': '0.9rem'
    },
}))

export const CardWrapper = () => {


    return <Box className={classes.container}>
        {
            cards.map((card, index) => <Card className={`${classes[`card-${index}`]} ${classes.card}`}>
                <CardContent key={card.imageUrl} className={classes['card-content']}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} >{card.title}</Typography>
                    <StyledTypography variant="h6" sx={{ fontWeight: '700' }}  >{card.desc}</StyledTypography>
                    <Button size="large" color="inherit" variant="text" href="#" endIcon={<ArrowRightAltIcon />} >Read More </Button>
                </CardContent>
            </Card >)
        }
    </Box >

}