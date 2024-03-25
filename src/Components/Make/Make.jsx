import Left from "../Lib/img/left.png";
import Right from "../Lib/img/right.png";
import Girl from "../Lib/img/girl.png";
import Stars from "../Lib/img/stars.png";
import Dog from "../Lib/img/dog.png";



function Make() {
    return (
        <>
        <section className="make pt-[140px]">
            <div className="container">
                <div className="flex flex-col items-center" >
                    <h5 className="font-[Roboto] font-[500] text-yellow-600 uppercase">Testimonial</h5>
                    <h5 className="font-[Philosopher] font-[700] text-[21px] leading-[24px] pt-[8px]">Making Food great again and again</h5>
                    <p className="w-[750px] text-center font -[Roboto] pt-[15px]">You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.</p>

                    <div className="flex items-center text-center pt-[60px] justify-between ">

                            <img src={Left} alt="Left" />   

                        <div className="flex flex-col items-center gap-[20px]">
                            <picture>
                                <img className="w-[113px] h-[83px] absolute ml-[-50px] mt-[-40px] origin-bottom -rotate-[10deg]" src={Dog} alt="Dog" />
                                <img src={Girl} alt="Girl" />
                            </picture>

                            <p className="w-[516px] font-[Roboto] text-[16px]">You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.</p>

                            <img className="w-[88px] h-[16px]" src={Stars} alt="Stars" />

                            <h6>Augusta W. Reynoso</h6>
                            <p className="uppacese">UI&UX DeSIGNER</p>
                        </div>


                            <img src={Right} alt="Right" />

                    </div>
                </div>
            </div>
        </section>

        <section className="contact bg-yellow-50 pb-[117px] text-center">
            <div className="container">
                <div className="flex flex-col items-center">
                    <h6 className="pt-[115px] uppercase text-yellow-600 font-[Roboto] font-[500]">Contact </h6>
                    <h6 className="font-[Philosopher] font-[700] text-[31px] w-[749px]">Food Stalls with Persons but also specialized equipment, Skills to manage.</h6>

                    <form className="flex pt-[35px]">
                        <input className="w-[600px] h-[75px] rounded-[12px] pl-[32px]" type="email" placeholder="Enter your message" />
                        <button type="submit" className="bg-yellow-600 text-yellow-50 w-[156px] h-[75px] rounded-[12px] mr-[20px]">Send</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default Make