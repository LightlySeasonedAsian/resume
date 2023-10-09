function Contact({phone,email,linkedIn,linktree,img}) { return(
    <div className='container'>
        <section className='section'>
            <div className='columns'>
                <div className='column is-12'>
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">Daniel Moreland</p>
                        </header>
                            <div className="card-image">
                                <figure className="image is-1by1 is-centered">
                                    <img className="headshot" src={img} alt="Headshot of Daniel R. Moreland"/>
                                </figure>
                            </div>

                            <div className="card-content">
                                    <div className="content">
                                        <p className="title is-4">{phone}</p>
                                        <p className="subtitle is-6">
                                            <a href={email}>daniel.r.moreland@gmail</a>
                                        </p>
                                        <p>
                                            <a className="content" href={linkedIn}>LinkedIn</a>
                                        </p>
                                        <p>
                                            <a className="content" href={linktree}>LinkTree</a>
                                        </p>
                                        
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

