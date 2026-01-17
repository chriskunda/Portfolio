import "./Footer.css"

const footer = () => {
    return (
        <div className="foot">
            <p className="foot-p">Copyright &copy; {new Date().getFullYear()}. All Rights Reserved</p>
        </div>
    );
}

export default footer;
