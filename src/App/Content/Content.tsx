import profile1 from "../../download.png"
import profile2 from "../../1.png"
import { Card } from "./Card/Card"
import React from "react"


function Content() {
  const persons = [
    {
      name: "Jack",
      role: "engineer",
      Avatar: profile1,

    },
    {
      name: "Mary",
      role: "developer",
    },
    {
      name: "arkadi",
      role: "pilot",
      Avatar: profile2,

    },
  ]
  const personlist = persons.map(indivitual => (<Card name={indivitual.name} role={indivitual.role} Avatar={indivitual.Avatar} />))
  return (
    <React.Fragment>
      {personlist}
    </React.Fragment>
  )
}



export { Content }
