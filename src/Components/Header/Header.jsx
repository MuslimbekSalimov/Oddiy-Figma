import Logo from "../Lib/img/logo.png"
// import { Button } from "@mui/material";
// import Button from "../Button/Button";

function Header() {
    return (
        <>
        <header className="header pt-2">
            <div className="container ms-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-9">
                    <a href="#LOGO">
                        <img src={Logo} alt="Logo" width={44} height={43}/>
                    </a>

                    <ul className="flex items-center gap-8"> 
                        <li className="header__item " >
                            <a className="hover:text-yellow-400 link hover:bg-slate-950 font-roboto " href="#Home">Home</a>
                        </li>

                        <li className="header__item" >
                            <a className="hover:text-yellow-400 link" href="#Home">About us</a>
                        </li>

                        <li className="header__item" >
                            <a className="hover:text-yellow-400 link" href="#Home">Menu</a>
                        </li>

                        <li className="header__item" >
                            <a className="hover:text-yellow-400 link" href="#Home">Features</a>
                        </li>

                        <li className="header__item" >
                            <a className="hover:text-yellow-400 link" href="#Home">Contact us</a>
                        </li>
                    </ul>
                    </div>

                    <button variant="contained" className="button text-yellow-50 bg-orange-600">Booking Now</button>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;