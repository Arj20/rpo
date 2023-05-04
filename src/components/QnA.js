import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Container, Card } from '@mui/material'
import QuesImage from '../assets/questions.webp'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classes from '../styles/index.module.css'

const faqs = [{
    id: 'q1',
    question: 'What sorts of staffing administrations does Rahul RPO deal to the client organizations?',
    answer: 'We offer various staffing administrations custom fitted to the special necessities of your business, including: Permanent Hires (Full Time), Contract-to-recruit, Contract Hires'
},
{
    id: 'q2',
    question: 'Benefits of working with Rahul RPO over other staffing organizations?',
    answer: 'Rahul RPO offers important market understanding, top Talent, elite employment opportunities and an abundance of assets during the representative pursuit and position process. Our novel methodology centers around by and large client-applicant fit to guarantee we pair excellent up-and-comers with client organizations that are lined up with their expert objectives and inclinations. We act as evident experts/accomplices for client organizations and stay true to our commitments. We convey the best Talent through exceptionally proficient tenured groups. Our novel administrations put us aside from other staffing organizations.'
},
{
    id: 'q3',
    question: 'What is Rahul RPO recruiting process?',
    answer: `Rahul RPO worker search and situation process incorporates various advances that guarantee we recognize competitors that are appropriate for the gig. We expect to get a profound comprehension of our client organizations, so our initial step is to meet face to face. The following stage is to make a triumphant set of working responsibilities that fills in as a guide. Then, at that point, we foster a selecting game plan. We reveal top ability for the vacant situation through various Job Boards. At Rahul RPO, our worker search and arrangement approach uncovers all potential possibility to get everything taken care of. We completely screen to distinguish the top competitors in view of specialized and social fit. We then present their profiles and continues for your audit and determination. Sage Bean's experts play out extra administrations during the worker search and arrangement process, including schooling confirmation, personal investigations, business confirmation and reference checks.`
},

]

export const Questions = () => {

    return <Grid container spacing={3}>
        <Grid item container xs={4} bgcolor="#333333" alignItems="center">
            <Card elevation={10} sx={{ maxWidth: "90%", margin: 'auto', height: '75%', bgcolor: "#1976d2" }} >
                <img src={QuesImage} alt="questions" />
            </Card>
        </Grid>
        <Grid item container xs={8} bgcolor="#f4f4f4" alignItems="center" direction="column" >
            <Typography variant="h6" mt={6} >FAQ ----</Typography>
            <Typography variant="h3" className={classes.heading} my={2} >Some Quesitons And Answers</Typography>
            <Container sx={{ width: '80%', marginBottom: '1rem' }}>

                {
                    faqs.map(faq =>
                        <Accordion key={faq.id} defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="h6">{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                }
            </Container>
        </Grid>
    </Grid >

}