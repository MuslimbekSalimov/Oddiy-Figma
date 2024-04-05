import { TagNaems } from "../../API/ALLAPI";
import { Link } from "react-router-dom";
import Karovat from "../../img/Karovati.png";
import Divans from "../../img/Buyyingitems.png"
import Card from "../../img/Card.png";

function Shkafbuy() {
    return (
        <>
        <section className="shkaf">
            <div className="container">
            <div className="flex pt-[19px] pb-[19px]">
                     <Link className="font-[Open sans] text-[18px]" to="/home">{TagNaems.map((item) => (
                     <h3 className=" text-black">{item.head}</h3>
                     ))}</Link>
                        <Link to={"/shkafbuy"}>
                        {TagNaems.map((item) => (
                            <span className=" text-green-600 pl-[10px]">{item.krovat}</span> 
                         ))}
                        </Link>
                </div>

                <div className="flex pt-[50px] gap-[54px]">
                    <picture className="flex flex-col items-center gap-[34px]">
                        <img className="w-[95px] h-[95px]" src={Karovat} alt="Karovat" />
                        <img className="w-[95px] h-[95px]" src={Karovat} alt="Karovat" />
                        <img className="w-[95px] h-[95px]" src={Karovat} alt="Karovat" />
                        <img className="w-[95px] h-[95px]" src={Karovat} alt="Karovat" />
                    </picture>

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
        </section>
        </>
    )
}

export default Shkafbuy;