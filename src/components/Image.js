import recruit1 from '../assets/rec1.avif'
import classes from '../styles/image.module.css'
import Slider from "react-slick";

export const ImageWrapper = () => {


    return <Slider>
        <img src={recruit1} className={classes.img} />
    </Slider>
}