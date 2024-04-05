import { Link } from "react-router-dom";
import { TagNaems } from "../../API/ALLAPI";
import BuyyPage from "../../img/BuyyPage.png";
import BuyyPage2 from "../../img/BuyyPage2.png";
import BuyyPage3 from "../../img/BuyyPage3.png";
import BuyyPage4 from "../../img/BuyyPage4.png";
import Email from "../../Email/Email";
import AllImg from "../../img/AllIMGS.png";


function Buy() {

    const BuyyPages = [
        {
            id:0,
            poster: BuyyPage,
        },
        {
            id:1,
            poster: BuyyPage2,
        },
        {
            id:2,
            poster: BuyyPage3,
        },
        {
            id:3,
            poster: BuyyPage4,
        },
    ]

    return (
        <>
        <section className="buy">
            <div className="container">
               <div className="flex pt-[19px] pb-[19px]">
                     <Link className="font-[Open sans] text-[18px]" to="/home">{TagNaems.map((item) => (
                     <h3 className=" text-black">{item.head}</h3>
                     ))}</Link>
                        <Link to={"/buy"}>
                        {TagNaems.map((item) => (
                            <span className=" text-green-600 pl-[10px]">{item.alfa}</span> 
                         ))}
                        </Link>
                </div>

                <div className="flex gap-[61px]">
                <div className="flex">
                    <div className="flexx">
                         <img className="pb-[31px]" src={BuyyPage} alt="" />

                          <div className="flex items-center gap-[37px]">
                                 <picture className="flex item-center  gap-[37px]" >
                                     {BuyyPages.map((item) => (
                                        <li key={item.id}>
                                             <img className="w-[95px] h-[95px]" src={item.poster} alt="imgg" />
                                       </li>
                                      ))}
                               </picture>
                         </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <ul className="flex flex-col items-start gap-[47px]">
                        <li className="flex items-center">
                            <h5 className="font-[Open sans] font-[600] text-[28px]">Дизайн детской комнаты Alfa 10</h5>
                        </li>
                        <li className="flex items-center justify-between gap-[166px]">
                            <p className="font-[Open sans] font-[600] text-[20px]">Год:</p>
                            <span className="font-[Open sans] text-[20px] line-[27px] opacity-70">2024</span>
                        </li>
                        <li className="flex items-center gap-[150px]">
                            <p className="font-[Open sans] font-[600] text-[20px]">Цена:</p>
                            <span className="font-[Open sans] text-[20px] line-[27px] opacity-70">55 887 грн.</span>
                        </li>
                        <li className="flex items-center gap-[107px]">
                            <p className="font-[Open sans] font-[600] text-[20px]">Площадь:</p>
                            <span className="font-[Open sans] text-[20px] line-[27px] opacity-70">25-38 м2</span>
                        </li>
                        <li className="flex items-center gap-[152px]">
                            <p className="font-[Open sans] font-[600] text-[20px]">Срок:</p>
                            <span className="font-[Open sans] text-[20px] line-[27px] opacity-70">от 14 дней</span>
                        </li>
                        <li className="flex items-center gap-[113px]">
                            <p className="font-[Open sans] font-[600] text-[20px]">Локация:</p>
                            <span className="font-[Open sans] text-[20px] line-[27px] opacity-70">Москва</span>
                        </li>
                        <li className="flex items-center gap-[30px]">
                            <button className="animation bg-green-600 w-[220px] h-[53px] rounded-[8px] text-yellow-50">Заказать просчет</button>
                            <button className=" w-[220px] h-[53px]  border rounded-[8px] font-[700] hover:bg-[#000] transition-all hover:text-[#FFF]">Следующий Проект <span>{"→"}</span></button>
                        </li>
                    </ul>

                </div>
                </div>

                <div className="flex flex-col items-center pb-[52px] pt-[81px]">
                    <p className="w-[1024px] font-[Open sans] text-center">Ремонт и дизайн интерьера детских комнат состоит из следующих этапов: Демонтаж. Профессиональные мастера компании «Kupa» начинают преобразование комнаты с демонтажных работ. Вначале убирается старый линолеум, паркет, обои, стяжка, штукатурка и т.д. Прокладка новой проводки, размещение выключателей и розеток. При необходимости мы заменим старую электропроводку, уложив новый кабель в предварительно подготовленные штробы. Демонтаж или возведение внутренних перегородок.</p>

                    <p className="w-[1070px] font-[Open sans] text-center pt-[20px]">Ремонт детской комнаты – важный этап, с которого начинается обустройство пространства для ребенка. Компания «Kupa» специализируется не только на продаже качественной мебели, относящейся к разряду премиум класса, но и оказывает услуги по оформлению детских комнат. Дизайн интерьера детской комнаты наши специалисты выполняют «под ключ». Процесс обустройства начинается от определения общей стилистики и тематики помещения до подбора малейших элементов и деталей: светильников, декора и прочего. Настоящие профессионалы компании «Kupa» помогут создать уникальный дизайн детских комнат, при полном гармонировании всех элементов помещения</p>
                </div>

                <picture className="mt-[81px]">
                    <img className="mb-[81px]" src={AllImg} alt="AllImg" />
                </picture>

                <Email />
            </div>
        </section>
        </>
    )
}

export default Buy;