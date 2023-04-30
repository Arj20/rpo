import { Avatar, Box, Card, Divider, Grid, Rating, Typography } from "@mui/material"
import classes from '../styles/index.module.css'
import StarIcon from '@mui/icons-material/Star';

export const Feedback = () => {

    const value = 3.5

    return <Grid container className={classes.feedbacks} >
        <Grid item xs={12}>
            <Typography variant="h6" textAlign="center">Testimonials</Typography>
            <Typography variant="h2" textAlign="center" className={classes.heading}>User Feedbacks</Typography>
        </Grid>
        <Grid item container spacing={2} m={1} >

            {[1, 2].map((item) => <Grid item xs={6} key={item}>
                <Card className={classes.feedback}>
                    <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    <Typography variant="p" fontWeight="bold" >
                        “These guys work like clockwork and deliver exactly as promised. Indeed, often, they go well beyond. And they do it all with a smile. That’s more than what I can say about some industry bigwigs I have dealt with.”
                    </Typography>
                    <Divider />
                    <Box className={classes.reviewer} >
                        <Avatar alt="Remy Sharp" src={require('../assets/reviewer.jpg')} />
                        <Typography variant="h6" fontWeight="bold" >Billy Magnussen</Typography>
                    </Box>
                </Card>
            </Grid>
            )}
        </Grid>
    </Grid >
}