function Banner({title,subtitle}) { return(
<section className="hero is-dark is-small is-collapsible">
    <div className="hero-body">
        <p className="title">
            {title}
        </p>
        <p className="subtitle">
            {subtitle}
        </p>
    </div>
</section>
    )
    }
export default Banner;

