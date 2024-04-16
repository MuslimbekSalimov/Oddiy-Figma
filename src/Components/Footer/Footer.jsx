import Logo from "../img/Logo.png";
import Call from "../img/call.png";
import Email from "../img/Email.png";
// import Mapss from "../img/Map.png";
import Facebok from "../img/Facebook.png";
import Instagram from "../img/Instagram.png";
import Youtube from "../img/Youtube.png";
import Telagram from "../img/Telegram.png";
import WKontakte from "../img/Wkontacte.png";
// import { GoogleMap } from "@react-google-maps/api";
import Iframe from "react-iframe";
import Payments from "../img/payments.png";

function Footer() {
    return(
        <>
        <footer className="footer bg-[#F7F7F7] mt-[81px] pb-[30px]">
            <div className="container flex flex-col justify-around">
                <div className="info flex gap-[146px] pt-[63px] justify-around">

                <div className="flex flex-col items-start gap-[15px]">
                        <a href="#Logo">
                            <img src={Logo} alt="Logo" />
                        </a>

                        <a href="https://t.me/webdevoloper2008" className="flex items-center gap-[10px]">
                            <img src={Call} alt="Call" />
                            +38093-717-29-29
                        </a>

                        <a href="muslimbeksalimov0102@gmail.com" className="flex items-center gap-[10px]">
                            <img src={Email} alt="Call" />
                            kharkivmebelinfo@gmail.com
                        </a>

                        {/* <a className="flex items-center gap-[10px]">
                            <img src={Mapss} alt="Call" />
                            Харьков
                        </a> */}

                        <br/>
                        <div className="flex items-center gap-[23px]">
                            <a className=" hover:text-green-600" href="https://www.instagram.com/">
                                <img className="w-[25px] h-[24px]" src={Facebok} alt="Instagram" />
                            </a>

                            <a href="https://www.instagram.com/">
                                <img className="w-[25px] h-[24px]" src={Instagram} alt="Instagram" />
                            </a>

                            <a href="https://www.instagram.com/">
                                <img className="w-[25px] h-[24px]" src={Youtube} alt="Instagram" />
                            </a>

                            <a href="https://www.instagram.com/">
                                <img className="w-[25px] h-[24px]" src={Telagram} alt="Instagram" />
                            </a>

                            <a href="https://www.instagram.com/">
                                <img className="w-[25px] h-[24px]" src={WKontakte} alt="Instagram" />
                            </a>
                        </div>
                </div>
                <ul className="flex gap-[75px]">
                    <li className="flex flex-col gap-[10px]">
                        <h4 className="font-[Open sans] font-[700] text-[24px]">Наш магазин</h4>
                        {/* <br/> */}
                        <a className="w-[184px] pt-[10px]" href="#О магазине">О магазине</a>
                        <a className="w-[184px]" href="#Наши вакансии">Наши вакансии</a>
                        <a className="w-[184px]" href="#Контакты">Контакты</a>
                        <a className="w-[184px]" href="#Мебель в рассрочку">Мебель в рассрочку</a>
                        <a className="w-[184px]" href="#Бренды">Бренды</a>
                        <a className="w-[184px]" href="#Возврат товара">Возврат товара</a>
                        <a className="w-[184px]" href="#Сертификаты">Сертификаты</a>
                        <a className="w-[184px]" href="#Обзоры">Обзоры</a>
                    </li>

                    <li className="flex flex-col gap-[10px]">
                        <h4  className="font-[Open sans] font-[700] text-[24px]">Сервис</h4>
                        <a className="w-[184px] pt-[10px]" href="#Ваши заказы">Ваши заказы</a>
                        <a className="w-[184px]" href="#Доставка и оплата">Доставка и оплата</a>
                        <a className="w-[184px]" href="#Сборка мебели">Сборка мебели</a>
                        <a className="w-[184px]" href="#Хочу в подароку">Хочу в подарок</a>
                        <a className="w-[184px]" href="#Список сравнения">Список сравнения</a>
                        <a className="w-[184px]" href="#Карта сайта">Карта сайта</a>
                    </li>

                    <li className="flex flex-col gap-[10px]">
                        <h4 className="font-[Open sans] font-[700] text-[24px]">Помощь</h4>
                        <a className="w-[184px]" href="#Статьи">Статьи</a>
                        <a className="w-[184px]" href="#Вопрос ответ">Вопрос ответ</a>
                        <a className="w-[184px]" href="#Производители">Производители</a>
                    </li>

                    <li>
                        <h4 className="font-[Open sans] font-[700] text-[24px] pb-[20px]">Как найти нас ?</h4>

                           <Iframe className="rounded-[12px]" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12634.017441663254!2d67.05843325336649!3d37.                           66085498910639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.                           1!3m2!1m1!2zMzfCsDM5JzExLjAiTiA2N8KwMDMnNTUuNyJF!5e0!3m2!1suz!2s!4v1711561086484!5m2!1suz!2s" width="331" height="229"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                    </li>
                </ul>

                </div>

                <div className="flex flex-col items-center justify-bettwen pt-[77px]">
                     <hr  className="w-[1500px] h-[2px] pb-[30px] text-[#CACACA]"/>

                      <div className="flex items-center gap-[580px] ">
                          <strong className="text-[#383838]"> ©"Kharkivmebel, 2005 - 2024.</strong>
                           <img className="w-[144px] h-[24]" src={Payments} alt="Payments" />
                          <strong className="animat text-[#383838]">Created & Muslimbek Salimov</strong>
                </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;