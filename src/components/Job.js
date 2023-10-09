
function Job({position,company,date,detail}) {
    
    
    return(
    <section className="section is-small">
        <h1 className="title ">{position}</h1>
        <h3 className="subtitle">{company}</h3>
        <h6>{date}</h6>
        <ul>{detail.length > 0 && detail.map((item) => <li> <i className="fas fa-forward" aria-hidden="true">
    </i> {item} </li>)}</ul>
       </section>
      )
   }
export default Job;

