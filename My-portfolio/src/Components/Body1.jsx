import "./Body1.css"
import PortPhoto from '../assets/Chris.png'


function Body() {
    return (
        
        <div className="body-section" id="body">
            <div className="names">
                <div className="names-introduction">
                    <h2 className="he">Hey, I'm</h2>
                    <h1 className="head1">CHRiSTiAN</h1>
                    <h1 className="head2">iRADUKUNDA</h1>
                    <p>Front-End Developer with a passion for clean and dope websites.</p>
                </div>
                <div className="but">
                    <button className="butt">View my CV</button>
                </div>
            </div>
            <div className="foto">
                <img className="port-pic" src= {PortPhoto} alt="Chris photo" />
            </div>
            
        </div>
    )
}

export default Body;