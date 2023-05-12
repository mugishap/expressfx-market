import React from 'react'
import { Helmet } from 'react-helmet'
import CommonHeader from '../Common/CommonHeader'
import CommonFooterComponent from '../Common/CommonFooterComponent'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { frequentlyAskedQuestions } from '../../constants';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ }) => ({
    border: `1px solid #2a2a2a`,
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: "#000",
    color: "white",
    fontWeight: "bold",
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
        color: "#fd961a"
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        color: "white"
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    padding: theme.spacing(1),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(4),
    borderTop: '1px solid #2a2a2a',
    background: "black",
    color: "#999"
}));
const FAQComponent: React.FC<{}> = () => {

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            event.preventDefault()
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div className='w-full flex flex-col'>
            <Helmet>
                <title>FAQ | Express FX Market</title>
            </Helmet>
            <CommonHeader page='FAQ' whiteText='FREQUENTLY ASKED' yellowText='QUESTIONS' />
            <div className='w-full flex flex-col items-center py-24'>
                <div className='w-8/12'>

                    {
                        frequentlyAskedQuestions.map((question, index) => (
                            <Accordion key={index} className='my-2' expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                <AccordionSummary aria-controls={`panel${index}d-content`} id="panel1d-header">
                                    <Typography className={expanded === `panel${index}` ? "text-orange" : ""}>{question.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {question.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </div>
            </div>
            <CommonFooterComponent />
        </div>
    )
}

export default FAQComponent