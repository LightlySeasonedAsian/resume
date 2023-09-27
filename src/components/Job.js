function Job({position,company,date,detail}) { return(
    <section className="section">
        <h1 className="subtitle">{position}</h1>
        <h2 className="subtitle">{company}</h2>
        <h3>{date}</h3>
        <ul>
            <li>
                {detail[0]}
            </li>
            <li>
                {detail[1]}
            </li>
            <li>
                {detail[2]}
            </li>
        </ul>       
       </section>
      )
   }
export default Job;

