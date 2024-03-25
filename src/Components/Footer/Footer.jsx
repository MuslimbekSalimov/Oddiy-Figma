import Logo from "../Lib/img/logo.png";
import Instagram from "../Lib/img/instagram.png";
import Facebook from "../Lib/img/Facebook.png";
import Twitter from "../Lib/img/Twitter.png";
import Youtube from "../Lib/img/Youtube.png";


function Footer() {
    return (
        <>
        <footer className="footer bg-zinc-900">
            <div className="container">
                <div className="flex pt-[137px] pb-[100px] justify-between">
                    <ul className="flex flex-col items-start gap-[25px]">
                        <li>
                            <img src={Logo} alt="" />
                        </li>

                        <li>
                            <a className="opacity-60" href="www.company name.com">www.salimovvs.com</a>
                        </li>

                        <li>
                           <a className="opacity-60" href="email">muslimbeksalimov0102@gmail.com</a>
                        </li>
                        
                        <li>
                           <a className="opacity-60" href="number">+998 99 701 3708</a>
                        </li>
                    </ul>

                    <ul className="flex flex-col items-start gap-[25px]">
                        <li>
                           <h6 className="font-[Philosopher] font-[700] text-[18px]">Home</h6>
                        </li>

                        <li>
                            <h6 className="opacity-60">Landingpage</h6>
                        </li>

                        <li>
                            <h6 className="opacity-60">Documentation</h6>
                        </li>
                        
                        <li>
                            <h6 className="opacity-60">Referral Program</h6>
                        </li>

                        <li>
                            <h6 className="opacity-60">UI & UX Design</h6>
                        </li>

                        <li>
                            <h6 className="opacity-60">Web Design</h6>
                        </li>
                    </ul>

                    <ul className="flex flex-col items-start gap-[25px]">
                        <li>
                           <h6 className="font-[Philosopher] font-[700] text-[18px]">Menu</h6>
                        </li>

                        <li>
                            <h6 className="opacity-60">Landingpage</h6>
                        </li>

                        <li>
                            <h6 className="opacity-60">Documentation</h6>
                        </li>
                        
                        <li>
                            <h6 className="opacity-60">Referral Program</h6>
                        </li>

                        <li>
                            <h6 className="opacity-60">UI & UX Design</h6>
                        </li>

                        <li>
                            <h6 className="opacity-60">Web Design</h6>
                        </li>
                    </ul>

                    <ul className="flex flex-col items-start gap-[25px]">
                        <li>
                           <h6 className="font-[Philosopher] font-[700] text-[18px]">Company</h6>
                        </li>

                        <li>
                            <h6 className="opacity-60">Landingpage</h6>
                        </li>

                        <li>
                            <h6 className="opacity-60">Documentation</h6>
                        </li>
                        
                        <li>
                            <h6 className="opacity-60">Referral Program</h6>
                        </li>

                        <li  className="flex items-center gap-[10px]">
                            <img className="w-[21px] h-[21px]" src={Instagram} alt="Instagram" />
                            <img className="w-[21px] h-[21px]" src={Facebook} alt="Facebook" />
                            <img className="w-[21px] h-[21px]" src={Twitter} alt="Twitter" />
                            <img className="w-[21px] h-[21px]" src={Youtube} alt="Youtube" />

                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;