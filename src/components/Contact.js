function Contact({phone,email,linkedIn,linktree,img}) { return(
    <div className='container'>
        <section className='section'>
            <div className='columns'>
                <div className='column is-4'>
                    <div className="card"> 
                        <div className="card-image">
                            <figure className="image is-1by1">
                                <img src={img} alt="Headshot of Daniel R. Moreland"/>
                            </figure>
                        </div>

                        <div className="card-content">
                                <div className="media-content">
                                    <p className="title is-4">{phone}</p>
                                    <p className="subtitle is-6">{email}</p>
                                    <p className="content">{linktree}</p>
                                    <p className="content">{linkedIn}</p>
                                </div>
                            </div>            
                        </div>
                    </div>
                </div>
        </section>
    </div>
                    
    
      )
   }
export default Contact;

