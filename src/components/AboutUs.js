import { Box, Link, Card, CardContent, Typography, CardMedia } from "@mui/material"
import CustomerEngagement from '../assets/customer-eng.avif'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import classes from '../styles/card.module.css'
import styled from "@emotion/styled";


const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
        display: 'none'
    },
}))

const StyledPhoneIcon = styled(PhoneInTalkIcon)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
}))

export const AboutUs = () => {
    return <Card className={classes.about} elevation={6} >
        <StyledCardMedia title="cutomer engagement" image={CustomerEngagement} />
        <CardContent className={classes.about__desc} >
            <Box>
                <Typography variant="h2" className={classes.heading} >About Us</Typography>
            </Box>
            <Box>
                <Typography variant="h3" align="center" fontWeight="450" >Looking for #1 Staffing RPO Services ?</Typography>
                <Typography variant="h6" >
                    Alpha Recruiters is the most believed seaward enrollment firm arranged in USA, as well as in India. The organization is devoted to giving arrangements like seat advertising, 24X7 Sourcing, Staff Augmentation, and website composition. At Alpha Recruiters, we endeavor hard to keep our responsibility by offering remarkable associations with our Assured Delivery Program.
                </Typography>
            </Box>
            <Box className={classes.grid}>
                <StyledPhoneIcon sx={{ fontSize: 55 }} />
                <Box>
                    <div className={classes.query} >
                        <Typography variant="h6" className={classes.heading} >
                            Call us 24/7.
                        </Typography>
                        <Typography variant="h6">
                            &nbsp;We can answer for all your questions.
                        </Typography>
                    </div>

                    <Box className={classes.grid} flexDirection={{ md: 'row', sm: 'column', xs: 'column ' }} >
                        <Link variant="h6" underline="none" href="+1 (972) 889-9291" size="large">+1 (972) 889-9291</Link> or
                        <Link variant="h6" underline="none" href="#info@alpharecruiters.com" size="large">info@alpharecruiters.com</Link>
                    </Box>

                </Box>
            </Box>
        </CardContent>
    </Card >
}