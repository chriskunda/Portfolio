import "./Contact.css"

function Contact1() {
    return(
        <div className="hamagara">
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
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                </div>

            </div>
            <div className="info">
                <form action="">
                    <input type="Names" placeholder="Full Name" />
                    <input type="Email" placeholder="Email" />
                    <textarea name="" id="" placeholder="Your request"></textarea>
                    <button>Submit</button>
                </form>
            </div>
            </div>
            <p>Copyright © 2025. All Rights Reserved</p>
        </div>
    )
}

export default Contact1;