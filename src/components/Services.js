import styled from "@emotion/styled"
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import ServicesImage from '../assets/services-bg.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from '../styles/index.module.css'

const services = [{
    id: 's1',
    icon: require("../assets/lead-gen.jpg"),
    title: "Lead Generator",
    desc: "Our management consulting services focus on our clients."
},
{
    id: 's2',
    icon: require("../assets/247.jpg"),
    title: "24x7 Sourcing IT",
    desc: "Our management consulting services focus on our clients."
},
{
    id: 's3',
    icon: require("../assets/bench-mark.jpg"),
    title: "Bench Marketing",
    desc: "Our management consulting services focus on our clients."
},
{
    id: 's4',
    icon: require("../assets/offshore.png"),
    title: "Offshore Dedicated Recruiters",
    desc: "Our management consulting services focus on our clients."
}
]

const HeadingBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 0rem'
})

const StyledBox = styled(Box)({
    height: '40rem',
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${ServicesImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    color: '#ffffff',

})

const StyledSlider = styled(Slider)({
    height: '100%',
    display: 'grid',
    gap: '1rem'
})



export const Services = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return <StyledBox>
        <HeadingBox>
            <Typography variant="h6">Services</Typography>
            <Typography variant="h4" fontFamily="'Titan One', cursive" >What We Offer for You
            </Typography>
        </HeadingBox>
        <Box sx={{ width: '80%', margin: 'auto' }} >
            <StyledSlider {...settings}>
                {
                    services.map(service => {
                        return <Card key={service.id} className={classes.carousel_card} >
                            <CardMedia
                                className={classes.image}
                                image={service.icon}
                                title={service.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" fontWeight={700} component="div">
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" fontWeight={700} fontSize={'1rem'} color="text.secondary">
                                    {service.desc}
                                </Typography>
                            </CardContent>
                            <Button size="medium" color="primary" variant="contained" fullWidth href="#" endIcon={<ArrowRightAltIcon />} disableElevation >Read More </Button>
                        </Card>
                    })
                }
            </StyledSlider>
        </Box>
    </StyledBox >
}