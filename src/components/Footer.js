import { Grid, Box, Typography, Button } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { ListItems } from './ListItems';

const mainLinks = {
    heading: "Main Link",
    list: [["About Us", "Contact Us", "Tips & FAQ", "Get Quote"]]
}

const allServices = {
    heading: "All Our Services",
    list: [["Offshore Research Specialist", " Data Entry Specialist", " Lead Generator", " 24x7 Sourcing IT",
        "Bench Marketing Services"], ["Offshore Dedicated Recruiters", "Consulting Services", "HR & Payroll", "RPO Staffing", "Sourcing & Staffing"]]
}

export const Footer = () => {
    return <Grid container sx={{ bgcolor: "#333333", color: '#ffffff', mt: 1, padding: '1rem 0rem' }} >
        <Grid container item justifyContent="center" p={3} m={3}>
            <Grid item container xs={3} justifyContent="flex-start" alignItems="center">
                <CallIcon sx={{ fontSize: 50, marginRight: '1rem' }} />
                <Box>
                    <Typography>Contact Us Free</Typography>
                    <Typography variant="h6" component="a" href="tel:+19728899291" sx={{ textDecoration: 'none', color: 'inherit' }}>+1 (972) 889-9291</Typography>
                </Box>
            </Grid>
            <Grid container item xs={3} justifyContent="center">
                <LockIcon sx={{ fontSize: 50 }} />
            </Grid>
            <Grid item container xs={3} justifyContent="flex-end" alignItems="center">
                <Box>
                    <Typography textAlign="right">Contact Us Free</Typography>
                    <Typography variant="h6" component="a" href="mailto:sales@alpharecruiters.co" textAlign="right" sx={{ textDecoration: 'none', color: 'inherit' }}>+sales@alpharecruiters.co</Typography>
                </Box>
                <MailIcon sx={{ fontSize: 50, marginLeft: '1rem' }} />

            </Grid>
        </Grid>
        <Grid container item sx={{ bgcolor: 'rgba(79, 82, 80,0.5)' }} px={8} py={2} alignItems="flex-start" justifyContent="center" >
            <Grid item lg={3} md={3} xs={12} sm={12} sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} >
                <Typography variant="h6" fontWeight="bold">About Rahul RPO.</Typography>
                <Box>
                    <Typography>Rahul RPO is the most believed seaward enrollment firm arranged in USA, as well as in India.</Typography>
                    <Typography>
                        Social Network:
                        <Button variant='text' component="a" target="_blank" href='https://www.facebook.com/' >
                            <FacebookIcon />
                        </Button>
                        <Button variant='text' component="a" target="_blank" href='https://twitter.com/' >
                            <TwitterIcon />
                        </Button>
                        <Button variant='text' component="a" target="_blank" href='https://www.youtube.com/' >
                            <YouTubeIcon />
                        </Button>
                        <Button variant='text' component="a" target="_blank" href='https://www.linkedin.com/' >
                            <LinkedInIcon />
                        </Button>
                    </Typography>
                </Box>
            </Grid>
            <Grid item container lg={2} md={2} xs={12} sm={12} justifyContent="flex-end">
                <ListItems links={mainLinks} />
            </Grid>
            <Grid item container lg={6} md={6} xs={12} sm={12} justifyContent="flex-end">
                <ListItems links={allServices} />
            </Grid>
        </Grid>
        <Grid container item justifyContent="center" m={3} px={5} alignItems="center" >
            <Grid item xs={5}>
                <Typography variant="h6" fontWeight="700">
                    Copyright © 2022-23. All rights reserved. Alpha Recruiters
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Button variant="text" href="#" sx={{ color: "#ffffff", fontWeight: 700, fontSize: '1.2rem' }}>
                    Privacy Policy
                </Button>
            </Grid>
            <Grid item xs={3} >

                <Button variant="text" href="#" sx={{ color: "#ffffff", fontWeight: 700, fontSize: '1.2rem' }}>
                    Terms & Conditions
                </Button>
            </Grid>
        </Grid>
    </Grid >
}