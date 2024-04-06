import { Link } from "react-router-dom";
import { TagNaems } from "../../API/ALLAPI";
// import Karovat from "../../img/Karovati.png";
import Divans from "../../img/Pxo0.png"
import Card from "../../img/Card.png";
import { Tovar } from "../../API/ALLAPI";
import React from "react";

function Buychild() {
    return (
        <>
       <section className="shkaf">
            <div className="container">
            <div className="flex pt-[19px] pb-[19px]">
                     <Link className="font-[Open sans] text-[18px]" to="/home">{TagNaems.map((item) => (
                     <h3 className=" text-black">{item.head}</h3>
                     ))}</Link>
                        <Link to={"/buychild"}>
                        {TagNaems.map((item) => (
                            <span className=" text-green-600 pl-[10px]">{item.krovat}</span> 
                         ))}
                        </Link>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex items-center pt-[50px] gap-[54px]">

                    <picture>
                        <img className="w-[894px] h-[654px]" src={Divans} alt="BuyyItems" />
                    </picture>

                    <div className="flex flex-col gap-[25px]">
                        <h5 className="font-[Open sans] font-[600] text-[40px]">Шкаф-купе 00237</h5>
                        <p className=" opacity-70 text-[#BDBDBD]">Оценка покупателей: ⭐⭐⭐⭐⭐	 Нет отзывов</p>
                        <time className=" opacity-70 text-[#BDBDBD]">Код товара:	<span className="text-[#383838] font-[600]">i00078385</span></time>
                        <button className="animation  bg-green-600 w-[220px] h-[53px] rounded-[8px] text-yellow-50">Заказать просчет</button>
                        <p className="font-[Open sans] font-[600]">Оплата частями: 5 x 3 751 грн.</p>
                        <card>
                            <img className="w-[207px]" src={Card} alt="Card" />
                        </card>
                    </div>
                    </div>
                </div>


            </div>
        </section>

        <section className="rendering_pages pt-[100px]">
            <div className="container">
                <h5 className="font-[Open sans] font-[700] text-[48px] pb-[50px]">Такие же товары</h5>
                <ul className="flex items-center justify-around">
                    {Tovar.map((item) => (
                        <Link to={"/buychild"}>
                        <li key={item.id}>
                            <button  className=" absolute  mt-[17px] ml-[10px] w-[122px] h-[32px] bg-[#72BF44] text-[#FFFFFF] font-[Open sans] font-[6000] text-[14px] rounded-[8px]" href="/new">Новинка</button>
                            <button className=" absolute w-[40px] h-[40px] bg-[#FFFFFF] rounded-[50%] ml-[320px] mt-[15px]">🩷</button>



                            <img className="w-[378px] h-[378px]" src={item.pxo} alt={item.cost} />



                            <h5 className="font-[Open sans] font-[600] text-[20px]">{item.about}</h5>
                            <p className="font-[Open sans] text-[20px] pt-[10px]">{item.cost} <span className=" underline opacity-65 pl-[15px] ">{item.minuscost}</span></p>
                        </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </section>
        </>
    )
}

export default Buychild;