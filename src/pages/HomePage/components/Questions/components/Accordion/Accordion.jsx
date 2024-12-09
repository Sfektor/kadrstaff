import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Wrapper } from "./Accordion.styled";

export const AccordionComp = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((question) => {
        return (
          <Wrapper key={question.id} isMarginBottom={expanded}>
            <Accordion
              expanded={expanded === `${question.id}`}
              onChange={handleChange(`${question.id}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${question.id}bh-content`}
                id={`panel${question.id}bh-header`}
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {question.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{question.question}</Typography>
              </AccordionDetails>
            </Accordion>
          </Wrapper>
        );
      })}
    </div>
  );
};
