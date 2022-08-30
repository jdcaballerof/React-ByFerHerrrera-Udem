import { useLayoutEffect, useRef, useState } from "react"

export  function Quote2( {quote1:quote, data1:data} ) {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState( {width: 0, height: 0} )

  useLayoutEffect(() => {
    console.log( pRef.current.getBoundingClientRect() );
    const { height, width} = pRef.current.getBoundingClientRect()
    setBoxSize( { height, width} )
  
  }, [quote])   //disparar caa vez que cambie la quote (frase)



  return (
    <>
      <blockquote className="blockquote text-end">
          <p ref={pRef}> { quote } </p>
          <footer className="blockquote-footer"> { data[0].author /* *1 Forma1 */ } </footer> 
      </blockquote>

      <code> {JSON.stringify(boxSize)} </code>

    </>
  )
}
