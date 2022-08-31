

import { memo } from 'react' // Asi no seria necesario escribir React.
import React from 'react'

export const ShowIncrement = React.memo( ({incrementarProp}) => {

    console.log("Me volvi a generar :(   Atte: ShowIncrement")

  return (
    <button onClick={ () => { incrementarProp(1); } } >Incrementar</button>
  )
})
