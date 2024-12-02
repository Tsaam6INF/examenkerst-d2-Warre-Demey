import React, { Fragment, useState } from "react";

interface persoonProps {
  naam: string;
  klassen: string[]
}

interface Props {
  persoon: persoonProps;
}

function Personen({ persoon }: Props) {
   
  return( <Fragment><p>{persoon.naam}</p>
  <ul className="list-group list-group-flush">
  {persoon.klassen.map((name, index) => (
    <li className="list-group-item"key={index}>{name}</li>
  ))}
</ul></Fragment>);
}

export default Personen;

