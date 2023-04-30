import { Box, Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import classes from '../styles/contact.module.css'
import ContactUsImg from '../assets/contactus.jpeg'
import { formInputs } from "../utils/util"
import { useState } from "react"

const InputWrapper = (props) => {
    return <TextField
        id="input-with-icon-textfield"
        label={props.label}
        name={props.name}
        type={props.type}
        size="small"
        fullWidth
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    {props.icon}
                </InputAdornment>
            ),
        }}
        variant="outlined"
    />
}

export const Contact = () => {

    const [subject, setSubject] = useState("")

    const handleChange = (event) => {
        setSubject(event.target.value)
    }

    return <Box className={classes.contact} >
        <Box className={classes.form__container} >
            <Typography variant="h6">Catch Us Here ------- </Typography>
            <Typography variant="h3" fontFamily="'Titan One', cursive">Ask Question or Get Quote</Typography>
            <Grid container component="form" autoComplete="off" spacing={3}>
                {
                    formInputs.map(input =>
                        <Grid item xs={6} >
                            <InputWrapper key={input.id} {...input} />
                        </Grid>
                    )
                }
                <Grid item xs={6}>
                    <FormControl sx={{ minWidth: 120 }}>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            sx={{ width: 395 }}
                            value={subject}
                            size="small"
                            name="subject"
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value="">
                                <em>Subject</em>
                            </MenuItem>
                            <MenuItem value="English">English</MenuItem>
                            <MenuItem value="Burmese">Burmese</MenuItem>
                            <MenuItem value="Chinese(Simplifed)">Chinese(Simplifed)</MenuItem>
                            <MenuItem value="Corsican">Corsican</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField multiline variant="outlined" name="question" label="Question" rows={10} minRows={10} size="small" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" disableElevation fullWidth>Submit Now</Button>
                </Grid>
            </Grid>
        </Box>
        <Box sx={{ margin: 'auto' }} >
            <img src={ContactUsImg} alt="contact-us" />
        </Box>
    </Box>
}