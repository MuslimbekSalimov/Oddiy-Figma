import Girl from "../../img/Girl.png";

function Etap() {


    return(
        <>
        <section className="etap pt-[99px]">
            <div className="container flex items-center justify-around">
                <ul className="flex flex-col items-start gap-[48px]">
                    <li>
                        <h3 className="font-[Open Sans] font-[700] text-[36px]">Этапы работы</h3>
                    </li>

                    <li className="flex items-center gap-[10px]">
                        <h3 className="bg-green-600 w-[20px] h-[20px] text-[14px] font-[700] text-yellow-50 rounded-[8px] pl-[5px]">1</h3>
                        <h3 className="font-[Open sans] font-[16px]">Телефонный звонок или встреча в офисе</h3>
                    </li>

                    <li className="flex items-center gap-[10px]">
                        <h3 className="bg-green-600 w-[20px] h-[20px] text-[14px] font-[700] text-yellow-50 rounded-[8px] pl-[5px]">2</h3>
                        <h3>Заключение договора в офисе или на объекте</h3>
                    </li>

                    <li className="flex items-center gap-[10px]">
                        <h3 className="bg-green-600 w-[20px] h-[20px] text-[14px] font-[700] text-yellow-50 rounded-[8px] pl-[5px]">3</h3>
                        <h3>Замеры помещения и заполнение анкеты</h3>
                    </li>

                    <li className="flex items-center gap-[10px]">
                        <h3 className="bg-green-600 w-[20px] h-[20px] text-[14px] font-[700] text-yellow-50 rounded-[8px] pl-[5px]">4</h3>
                        <h3>Поэтапная разработка рабочих тертежей</h3>
                    </li>

                    <li className="flex items-center gap-[10px]">
                        <h3 className="bg-green-600 w-[20px] h-[20px] text-[14px] font-[700] text-yellow-50 rounded-[8px] pl-[5px]">5</h3>
                        <h3>Разработка 3D-визуализации помещения</h3>
                    </li>

                    <li className="flex items-center gap-[10px]">
                        <h3 className="bg-green-600 w-[20px] h-[20px] text-[14px] font-[700] text-yellow-50 rounded-[8px] pl-[5px]">6</h3>
                        <h3>Корректировка 3D-визуализации</h3>
                    </li>
                </ul>

                <picture>
                    <img src={Girl} alt="Girl" />
                </picture>
            </div>
        </section>
        </>
    )
}

export default Etap;