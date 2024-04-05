import Ico1 from '../../img/Ico1.png';
import Ico2 from '../../img/Ico2.png';
import Ico3 from '../../img/Ico3.png';
import Ico4 from '../../img/Ico4.png';
import { TagNaems } from '../../API/ALLAPI';
import { Link } from 'react-router-dom';

function Dizayn() {

    return(
    <>
    <section className="dizaynn">
      <div className="flex pt-[19px] pb-[19px]">
             <Link className="font-[Open sans] text-[18px]" to="/home">{TagNaems.map((item) => (
                  <h3 className=" text-green-600">{item.head} </h3>
             ))}</Link>
     </div>
        <div className="container text-center flex flex-col items-center gap-[19px] dizayn">

                       {/* <div className="flex pt-[19px] pb-[19px]">
                            <Link className="font-[Open sans] text-[18px]" to="/home">{TagNaems.map((item) => (
                                <h3 className=" text-green-600">{item.head} </h3>
                            ))}</Link>
                        </div> */}

            <h1 className="text-[#FFF] text-[48px] font-[Open sans] font-[700] pt-[266px]">Дизайн <span className="text-green-600">Интерьера</span></h1>
            <h2 className="text-[#FFFFFF] font-[600] font-[Open sans] text-[24px]">Трехмерная 3D-визуализация интерьера БЕСПЛАТНО!</h2>
            <p className="w-[625px] text-[#FFFFFF] font-[Open sans] text-[center]">При заказе любого дизайн-проекта интерьера до 15 июня, 3D-визуализация всех помещений абсолютно бесплатна и уже включена в стандартный проект.</p>

            <div className="flex items-center gap-[61px]">
                <button className="animation bg-green-600 w-[220px] h-[53px] rounded-[8px] text-yellow-50">Смотреть проекты </button>
                <button className="animat w-[220px] h-[53px] bg-white rounded-[8px]">Оформить заявку</button>
            </div>
        </div>
    </section>

    <section className="mebel">
        <div className="container">
            <h2 className='font-[Open sans] font-[700] text-[36px] text-center pt-[80px] pb-[90px]'>Преимущества работы с Kharkivmebel</h2>
   
            <ul className='flex items-center  justify-around'>
                <li>
                    <img src={Ico1} alt="Ico1" />
                    <h2 className='w-[266px]'>Все услуги в одном месте — от проектирования до меблировки</h2>
                </li>

                <li>
                    <img src={Ico2} alt="Ico1" />
                    <h2 className='w-[266px]'>Экономия — подбор материалов и мебели со скидками</h2>
                </li>

                <li>
                    <img src={Ico3} alt="Ico1" />
                    <h2 className='w-[266px] '>Экономия — подбор материалов и мебели со скидками</h2>
                </li>

                <li>
                    <img src={Ico4} alt="Ico1" />
                    <h2 className='w-[266px]'>Точно в срок — строгое соблюдение сроков разработки проекта.</h2>
                </li>
            </ul>
        </div>
    </section>
    </>
    )
}

export default Dizayn;