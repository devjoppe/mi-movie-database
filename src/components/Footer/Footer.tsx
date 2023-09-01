import logo from '../../assets/graphics/logo.png'
const Footer = () => {
    return (
        <div className="h-32 flex md-footer">
            <div>
                <img src={logo} className="h-12" alt="MD logo"/>
            </div>
            <div>
                <span className="md-footer-text">
                    Coded by <a href="https://www.jotto.dev" target="_blank">Joakim Ottosson</a> 2023
                </span>
            </div>
        </div>
    )
}

export default Footer