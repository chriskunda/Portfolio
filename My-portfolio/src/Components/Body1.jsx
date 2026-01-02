import "./Body1.css"
import PortPhoto from '../assets/Chris.png'


function Body() {
    return (
        <div className="body-section">
            <div className="names">
                <div className="nam">
                <h2 className="he">Hey, I'm</h2>
                <h1 className="head1">CHRISTIAN</h1>
                <h1 className="head2">IRADUKUNDA</h1>
                <p>Front-End Developer with a passion for clean and dope websites.</p>
                </div>
                <div className="but">
                <button className="butt">My cv</button>
                </div>
            </div>
            <div className="foto">
             <img className="port-pic" src= {PortPhoto} alt="Chris photo" />
            </div>
            
        </div>
    )
}

export default Body;