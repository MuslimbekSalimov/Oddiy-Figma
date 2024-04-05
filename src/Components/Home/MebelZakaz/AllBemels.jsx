import { Link } from "react-router-dom";
import { ALLAPI } from "../../API/ALLAPI";
import { BuyyingItems } from "../../API/ALLAPI";
import { TagNaems } from "../../API/ALLAPI";
import About from "./About";

function AllMebels() {

    return (
        <>
        <section className="allmebels">
            <div className="container">

            <div className="flex pt-[19px] pb-[19px] items-center gap-[10px]">
                <Link className="font-[Open sans] text-[18px]  text-green-600" to="/home">
                    {TagNaems.map((item) => (
                      <h3 className=" text-[#000]">{item.head}</h3>
                 ))}
               </Link>

               <Link className="font-[Open sans] text-[18px]  text-green-600" to="/delivery">
                    {TagNaems.map((item) => (
                      <h3 className=" text-green-600">{item.zakaz}</h3>
                 ))}
               </Link>
            </div>
                <h5>Мебель под заказ в Харькове</h5>
                <ul className="grid grid-cols-5 gap-[75px]">
                    {ALLAPI.map((item) => (
                        <Link to={"/none"}>
                        <li key={item.id} className="w-[250px] h-[236px]">
                            <img className=" cursor-pointer " src={item.poster} alt={item.id} />
                        </li>
                        </Link>
                    ))}

                   {ALLAPI.map((item) => (
                    <Link to={"/buy"}>
                        <li key={item.id} className="w-[250px] h-[236px] ">
                            <img className=" cursor-pointer" src={item.poster} alt={item.id} />
                        </li>
                        </Link>
                    ))}
                </ul>

                <ul className="grid grid-cols-4 pt-[76px] items-center gap-[108px]">
                    {BuyyingItems.map((item) => (
                        <Link to={"/shkafbuy"}>
                        <li key={item.id} className="bg-[#F2F2F2] border-solid border-2 border-back-600 rounded-[8px]">
                            <img className="w-[389px] h-[364px]" src={item.image} alt={item.id} />
                            <h5 className="pl-[17px] font-[Open sans] font-[600] text-[20px] text-[#383838] mb-[13px] ">{item.text}</h5>
                            <p className="pl-[17px] font-[Open sans] text-[#BDBDBD] mb-[18px]">{item.zakaz}</p>
                            <button className="animation w-[200px] h-[45px] bg-[#72BF44] rounded-[8px] font-[Open sans] font-[600] text-[#FFFFFF] mb-[35px] ml-[17px]">{item.button}</button>
                        </li>
                        </Link>
                    ))}
                </ul>

                <div className="div text-center mt-[71px] flex flex-col items-center gap-[43px]">
                    <button className="animation w-[63%] h-[51px] bg-[#72BF44] rounded-[8px] text-[#FFFFFF] font-[Open sans] font-[600] text-[18px] ">Показать Еще</button>

                    <div className="flex items-center gap-[16px]">
                        <button className="w-[48px] h-[48px] border rounded-[8px] font-[700] hover:bg-[#72BF44] transition-all hover:text-[#FFFFFF]">{"‹"}</button>
                        <button className="w-[48px] h-[48px] border rounded-[8px] font-[700] hover:bg-[#72BF44] transition-all hover:text-[#FFFFFF]">1</button>
                        <button className="w-[48px] h-[48px] border rounded-[8px] font-[700] hover:bg-[#72BF44] transition-all hover:text-[#FFFFFF]">2</button>
                        <button className="w-[48px] h-[48px] border rounded-[8px] font-[700] hover:bg-[#72BF44] transition-all hover:text-[#FFFFFF]">3</button>
                        <button className="w-[48px] h-[48px] border rounded-[8px] font-[700] hover:bg-[#72BF44] transition-all hover:text-[#FFFFFF]">...</button>
                        <button className="w-[48px] h-[48px] border rounded-[8px] font-[700] hover:bg-[#72BF44] transition-all hover:text-[#FFFFFF]">12</button>
                        <button className="w-[48px] h-[48px] border rounded-[8px] font-[700] hover:bg-[#72BF44] transition-all hover:text-[#FFFFFF] ">{"›"}</button>
                    </div>
                </div>
            </div>
        </section>

        <About/>
        </>
    )
}

export default AllMebels;