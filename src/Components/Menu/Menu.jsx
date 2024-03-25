import Tovuq from "../Lib/img/tabaka.png";
import Stars from "../Lib/img/stars.png";
import Plus from "../Lib/img/img.png";
import Kalbasa from "../Lib/img/kalbasa.png";
import Burger from "../Lib/img/burger.png";
import Salat from "../Lib/img/salat.png";
import Grichka from "../Lib/img/grichka.png";
import Desert from "../Lib/img/desert.png";




function Menu() {
    return(
        <>
        <section className="menu pt-[115px]">
            <div className="container flex flex-col items-center gap-[10px]">
                <h4 >Menu</h4>
                <h4>Food Full of treaty Love</h4>
                <p className="w-[748px] text-center pb-[60px]">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, z</p>

                <ul className="grid gap-[30px] grid-cols-3 ">
                    <li className="item flex flex-col items-center gap-[17px] border-solid rounded-[12px] border-2 border-white-[#0000001A] w-[360px] h-[446px] rounded-tl-[80px] ">
                        <img className="rounded-tl-[74px] rounded-br-[74px] rounded-tr-[10px]" src={Tovuq} alt="Tovuq" />
                        <div className="flex flex-col items-center gap-[10px]">
                          <div className="flex items-center justify-between gap-[128px]">
                            <h4 className="font-[Philosopher] text-[25px]">Vegie Muffen</h4>
                            <time className="font-[Philosopher] text-[25px]">16$</time>
                          </div>

                        <p className="font-[Roboto] w-[310px]">There are many things are needed to start the Fast Food Business.</p>
                        <div className="flex items-center gap-[176px]">
                            <button className="w-[36px] h-[34px] pl-[13px] bg-yellow-600 rounded-[12px] text-[35px] text-center">
                                <img src={Plus} alt="" />
                            </button>

                            <img className="w-[88px] h-[16px]" src={Stars} alt="Stars" />
                        </div>
                        </div>
                    </li>


                    <li className="item flex flex-col items-center gap-[17px] border-solid rounded-[12px] border-2 border-white-[#0000001A] w-[360px] h-[446px] rounded-tl-[80px] ">
                        <img className="rounded-tl-[74px] rounded-br-[74px] rounded-tr-[10px]" src={Kalbasa} alt="Tovuq" />
                        <div className="flex flex-col items-center gap-[10px]">
                          <div className="flex items-center justify-between gap-[188px]">
                            <h4 className="font-[Philosopher] text-[25px]">Salads</h4>
                            <time className="font-[Philosopher] text-[25px]">16$</time>
                          </div>

                        <p className="font-[Roboto] w-[310px]">There are many things are needed to start the Fast Food Business.</p>
                        <div className="flex items-center gap-[176px]">
                            <button className="w-[36px] h-[34px] pl-[13px] bg-yellow-600 rounded-[12px] text-[35px] text-center">
                                <img src={Plus} alt="" />
                            </button>

                            <img className="w-[88px] h-[16px]" src={Stars} alt="Stars" />
                        </div>
                        </div>
                    </li>

                    <li className="item flex flex-col items-center gap-[17px] border-solid rounded-[12px] border-2 border-white-[#0000001A] w-[360px] h-[446px] rounded-tl-[80px] ">
                        <img className="rounded-tl-[74px] rounded-br-[74px] rounded-tr-[10px]" src={Burger} alt="Tovuq" />
                        <div className="flex flex-col items-center gap-[10px]">
                          <div className="flex items-center justify-between gap-[198px]">
                            <h4 className="font-[Philosopher] text-[25px]">Burger</h4>
                            <time className="font-[Philosopher] text-[25px]">16$</time>
                          </div>

                        <p className="font-[Roboto] w-[310px]">There are many things are needed to start the Fast Food Business.</p>
                        <div className="flex items-center gap-[176px]">
                            <button className="w-[36px] h-[34px] pl-[13px] bg-yellow-600 rounded-[12px] text-[35px] text-center">
                                <img src={Plus} alt="" />
                            </button>

                            <img className="w-[88px] h-[16px]" src={Stars} alt="Stars" />
                        </div>
                        </div>
                    </li>

                    <li className="item flex flex-col items-center gap-[17px] border-solid rounded-[12px] border-2 border-white-[#0000001A] w-[360px] h-[446px] rounded-tl-[80px] ">
                        <img className="rounded-tl-[74px] rounded-br-[74px] rounded-tr-[10px]" src={Salat} alt="Tovuq" />
                        <div className="flex flex-col items-center gap-[10px]">
                          <div className="flex items-center justify-between gap-[38px]">
                            <h4 className="font-[Philosopher] text-[25px]">Delmonico Steak dish</h4>
                            <time className="font-[Philosopher] text-[25px]">16$</time>
                          </div>

                        <p className="font-[Roboto] w-[310px]">There are many things are needed to start the Fast Food Business.</p>
                        <div className="flex items-center gap-[176px]">
                            <button className="w-[36px] h-[34px] pl-[13px] bg-yellow-600 rounded-[12px] text-[35px] text-center">
                                <img src={Plus} alt="" />
                            </button>

                            <img className="w-[88px] h-[16px]" src={Stars} alt="Stars" />
                        </div>
                        </div>
                    </li>

                    <li className="item flex flex-col items-center gap-[17px] border-solid rounded-[12px] border-2 border-white-[#0000001A] w-[360px] h-[446px] rounded-tl-[80px] ">
                        <img className="rounded-tl-[74px] rounded-br-[74px] rounded-tr-[10px]" src={Grichka} alt="Tovuq" />
                        <div className="flex flex-col items-center gap-[10px]">
                          <div className="flex items-center justify-between gap-[128px]">
                            <h4 className="font-[Philosopher] text-[25px]">Egg Masala</h4>
                            <time className="font-[Philosopher] text-[25px]">16$</time>
                          </div>

                        <p className="font-[Roboto] w-[310px]">There are many things are needed to start the Fast Food Business.</p>
                        <div className="flex items-center gap-[176px]">
                            <button className="w-[36px] h-[34px] pl-[13px] bg-yellow-600 rounded-[12px] text-[35px] text-center">
                                <img src={Plus} alt="" />
                            </button>

                            <img className="w-[88px] h-[16px]" src={Stars} alt="Stars" />
                        </div>
                        </div>
                    </li>

                    <li className="item flex flex-col items-center gap-[17px] border-solid rounded-[12px] border-2 border-white-[#0000001A] w-[360px] h-[446px] rounded-tl-[80px] ">
                        <img className="rounded-tl-[74px] rounded-br-[74px] rounded-tr-[10px]" src={Desert} alt="Tovuq" />
                        <div className="flex flex-col items-center gap-[10px]">
                          <div className="flex items-center justify-between gap-[128px]">
                            <h4 className="font-[Philosopher] text-[25px]">Peach Melba dish</h4>
                            <time className="font-[Philosopher] text-[25px]">16$</time>
                          </div>

                        <p className="font-[Roboto] w-[310px]">There are many things are needed to start the Fast Food Business.</p>
                        <div className="flex items-center gap-[176px]">
                            <button className="w-[36px] h-[34px] pl-[13px] bg-yellow-600 rounded-[12px] text-[35px] text-center">
                                <img src={Plus} alt="" />
                            </button>

                            <img className="w-[88px] h-[16px]" src={Stars} alt="Stars" />
                        </div>
                        </div>
                    </li>     
                </ul>

                <button className="bg-white border-solid border-[1px] border-white-600 w-[142px] h-[42px] rounded-[8px] text-yellow-600 font-[Roboto] font-[500] mt-[50px]">Learn More</button>

            </div>
        </section>
        </>
    )
}

export default Menu