import "./Contact.css"

const Contact = () => {
    return(
        <div className="contact-form">
            <div className="title">
                <h1>Get in Touch</h1>
                <p>Let's convert your ideas into successful projects</p>
            </div>
            
            <div className="down-part">
            <div className="talk">
                <div className="contact-words">
                    <h1>Contact Me</h1>
                    <p>You will be one step</p>
                    <p>closer to build your perfect project</p>

                    <div className="contact-icons">
                        <a className="icon1" href=""></a>
                        <a className="icon2" href=""></a>
                        <a className="icon3" href=""></a>
                        <a className="icon4" href=""></a>
 
                    </div>

                </div>

            </div>
            <div className="info">
                <form action="">
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <textarea name="" id="" placeholder="Your request"></textarea>
                    <button>Submit</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Contact;