import Bac from "../img/Profileee.png";
import Message from "../img/Message.png";

function Email() {
    return (
        <>
        <section className="email">
        <div className="container flex flex-col items-center ">
                <img className=" absolute  left-[0px]" src={Message} alt="Message" />
                <div className="flex items-center ">
                    <div className="info w-[840px] bg-[#72BF44] pl-[68px] flex flex-col gap-[30px] h-[740px] rounded-[8px] ">
                        <h3 className=" w-[823px] text-[48px] text-[#FFFFFF] font-[Open sans] font-[700]">Оставьте Заявку на <br/> Бесплатную Консультацию</h3>
                        <p className="w-[706px] text-[#FFFFFF]">Наш менеджер свяжется с вами, ответит на все вопросы и поможет выбрать наиболее подходящую услугу.</p>

                        <form >
                            <label className="flex items-center gap-[70px] mb-[100px]">
                                <input className="w-[300px] h-[55px] rounded-[8px] pl-[24px]"  type="text" placeholder="Введите имя" />
                                <input className="w-[300px] h-[55px] rounded-[8px] pl-[24px]"  type="email" placeholder="Введите e-mail" />
                            </label>

                            <textarea className="w-[670px] h-[167px] pt-[18px] rounded-[8px] pl-[24px]" type="text" placeholder="Введите e-mail" />
                        </form>

                        <p className=""> ⬇️ Нажимая на кнопку, вы принимаете условия обработки персональных данных</p>

                        <button className="w-[221px] h-[55px] bg-[#383838] text-[#FFFFFF] rounded-[8px]"> ↗️ Отправить заявку</button>
                    </div>

                    <picture>
                        <img className="w-[750px] h-[739px]" src={Bac} alt="Bac" />
                    </picture>
                </div>
            </div>
        </section>
        </>
    )
}

export default Email