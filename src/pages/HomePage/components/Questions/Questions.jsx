import { AccordionComp, MapDublGis } from "./components";
import { Wrapper } from "./Questions.styled";
import React from "react";

export const Questions = ({ data }) => {
  return (
    <>
      <Wrapper>
        <AccordionComp data={data} />
      </Wrapper>
    </>
  );
};
