


export default function Quote( {quote1:quote, data1:data} ) {
  return (
    <blockquote className="blockquote text-end">
          <p> { quote } </p>
          <footer className="blockquote-footer"> { data[0].author /* *1 Forma1 */ } </footer> 
    </blockquote>
  )
}
