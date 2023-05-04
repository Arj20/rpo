import { Container, Typography } from "@mui/material"
import '../index.css';

export const Loader = ({ message }) => {
    return <Container>
        <div class=" custom-loader"></div>
        <Typography variant="h3" fontWeight="700" color="primary" align="center">{message}</Typography>
    </Container>
}