function Skills({detail}) { return(
    <section className="section">
        <ul>{detail.length > 0 && detail.map((item) => <li> <i className="fas fa-caret-right" aria-hidden="true">
    </i> {item} </li>)}</ul>
        {/* <ul>
            <li>
                NodeJS
            </li>
            <li>
                MongoDB
            </li>
            <li>
                React
            </li>
            <li>
                JavaScript
            </li>
            <li>
                Python
            </li>
            <li>
                Express
            </li>
            <li>
                HTML/CSS
            </li>
            <li>
                GraphQL
            </li>
            <li>
                SQL
            </li>
            <li>
                Agile/Scrum Methodologies
            </li>
            <li>
                Technical Writing
            </li>
            <li>
                IEC 61131-3 (PLC’s)
            </li>
            <li>
                Git
            </li>
            <li>
                JSONata
            </li>
            <li>
                REST API Development
            </li>
            <li>
                Leadership
            </li>
            <li>
                Communication
            </li>
            <li>
                Active Listening
            </li>
        </ul>        */}
       </section>
      )
   }
export default Skills;


