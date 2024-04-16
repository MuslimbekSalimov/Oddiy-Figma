import Shopadress from "../../img/shopadress.png";
import Iframe from "react-iframe";
import Slider from "../../img/slider.png";
import { TagNaems } from "../../API/ALLAPI";
import { Link } from "react-router-dom";

function Contact() {
    return(
        <>
        <section className="contact">
            <div className="container">
            <div className="flex pt-[19px] pb-[19px]">
                     <Link className="font-[Open sans] text-[18px]" to="/home">{TagNaems.map((item) => (
                     <h3 className=" text-black">Главная</h3>
                     ))}</Link>
                     
                        <Link to={"/contact"}>
                        {TagNaems.map((item) => (
                            <span className=" text-green-600 pl-[10px]">→ Контакты</span> 
                         ))}
                        </Link>
                </div>

                <h3 className="font-[700] font-[Open sans] text-[48px] pb-[22px]">Контакты</h3>
                <p className="w-[686px] font-[400] font-[Open sans] text-[18px] pb-[36px]">При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце.</p>

                <picture className="flex item-center">
                    <img src={Shopadress} alt="Shopadress" />

                    <Iframe className="rounded-[12px]" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12634.017441663254!2d67.05843325336649!3d37.                           66085498910639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.                           1!3m2!1m1!2zMzfCsDM5JzExLjAiTiA2N8KwMDMnNTUuNyJF!5e0!3m2!1suz!2s!4v1711561086484!5m2!1suz!2s" width="100%" height=""  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                </picture>

                <img className="pt-[71px]" src={Slider} alt="Slider" />
            </div>
        </section>
        </>
    )
}

export default Contact;