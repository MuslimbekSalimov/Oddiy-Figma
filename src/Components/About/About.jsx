import Home from "../Lib/img/Home.png"
import Driver from "../Lib/img/driver.png"
import Smile from "../Lib/img/smile.png"


function About() {
    return (
        <>
        <section className="about mt-28">
            <div className="container flex flex-col items-center gap-11">
                <div className="divvs flex flex-col items-center">
                <p className="text-yellow-600 font-[Roboto]"> Features</p>
                <h2 className="text-3xl font-[Philosopher]">Food with a New Passion</h2>
                </div>

                <ul className="flex text-center justify-between gap-[40px]">

                <li className="item w-80 h-72 flex flex-col items-center gap-3">
                    <picture className="w-20 h-20 bg bg-lime-100 rounded-full">
                        <img className="pt-4 pl-4" src={Home} alt="Home" />
                    </picture>

                    <h3 className="text-black font-[Philosopher]">Quality Food</h3>
                    <p className="opacity-80">It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </li>

                <li className="item w-80 h-72 flex flex-col items-center gap-3">
                    <picture className="w-20 h-20 bg bg-lime-100 rounded-full">
                        <img className="pt-4 pl-4" src={Driver} alt="Home" />
                    </picture>

                    <h3 className="font-semibold font-[Philosopher]" >Food Delivery</h3>
                    <p className="opacity-80" >It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </li>

                <li className="item w-80 h-72 flex flex-col items-center gap-3">
                    <picture className="w-20 h-20 bg bg-lime-100 rounded-full">
                        <img className="pt-4 pl-4" src={Smile} alt="Home" />
                    </picture>

                    <h3 className="font-[700] font-[Philosopher]" >Super Taste</h3>
                    <p className="opacity-80 font-[roboto]" >It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </li>

                
            </ul>
            </div>
        </section>
        </>
    )
}

export default About;