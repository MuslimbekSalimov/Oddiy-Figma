import Truck from "../img/Truck.png";
import Map from "../img/Map.png";
import Email from "../img/Email.png";
import Logo from "../img/Logo.png";
import Katalogg from "../img/Katalog.png";
import Likes from "../img/Likes.png";
import Korzina from "../img/Korzina.png";
import Profile from "../img/Profile.png";
import { Link } from "react-router-dom";
import { Katalog } from "../API/ALLAPI";
import { ModalItems } from "../API/ALLAPI";
import React from "react";

function Header() {
    const xRef = React.useRef()
    return (
        <>
        <header className="header">
            <div className="container">
                <div className="text-center">
                    {/* 1 part */}
                    <div className=" h-[46px] bg-[#72BF44] flex flex-col items-center">
                          <h2 className="flex pt-[8px] items-center gap-[11px] font-open text-[#FFFFFF] font-[600]">
                            <img  src={Truck} alt="Truck" />
                            Доставка и сборка по Харькову бесплатно!
                            
                          </h2>
                    </div>

                    {/* 2 part */}
                    <div className="flex items-center justify-between bg-slate-100 h-[40px]">
                        <span>kharkivmebel - интернет-магазин качественной мебели</span>
                        
                        <div className="flex items-center gap-[72px]">
                        <span className="flex items-center gap-[10px]">
                            <img src={Map} alt="Map" />
                            Харьков
                        </span>

                        <span className="flex items-center gap-[10px]">
                            <img src={Email} alt="Email" />
                            muslimbeksalimov0102@gmail.com
                        </span>
                        </div>
                    </div>

                    {/* 3 part */}
                    <div className="flex items-center  justify-between pt-[30px]">
                        <Link className="w-[125px] h-[86px]"  to="/Home">
                            <img src={Logo} alt="Logo" />
                        </Link>

                        <button ref={xRef} onClick={() => {
                            xRef.current.classList.remove("katalog__modal")
                        }}  className="bg-[#72BF44] flex items-center gap-[4px] w-[158px] h-[58px] rounded-[8px]">
                            <img className="pl-[35px]" src={Katalogg} alt="Katalog" />
                            <span className="text-yellow-50 pl-[3px] font-[600]" >Каталог</span>
                        </button>

                        {/* <h1 className=" text-green-600 bg-black w-[130px] hover:bg-green-600 hover:text-white">Hello</h1> */}

                        <form >
                            <input className="w-[816px] h-[58px] bg-[#F5F5F5] pl-[24px] rounded-[8px]" type="search" placeholder="Искать Товар" />
                            <button className="w-[29px] h-[29px] absolute ml-[-40px] pt-[16px]">🔍</button>
                        </form>

                        <time>
                        +998 99-701-37-08
                        </time>

                        <div className="flex items-center gap-[71px]">
                        <button>
                            <img src={Likes} alt="Likes" />
                        </button>

                        <button>
                            <img src={Korzina} alt="Korzina" />
                        </button>

                        <button >
                            <img src={Profile} alt="Profile" />
                        </button>
                        </div>
                    </div>

                    {/* 4 part */}
                    <ul className="flex items-center justify-between pt-[31px]">
                            <li>
                                <Link className="link" to="/Home">Харьков мебель</Link>
                            </li>

                            <li>
                                <Link className="link" to="/donatpremium">Про нас</Link>
                            </li>

                            <li>
                                <Link className="link" to="/delivery">Мебель под заказ</Link>
                            </li>

                            <li>
                                <Link className="link" to="/shkaflar">Шкафы купе</Link>
                            </li>

                            <li>
                                <Link className="link" to="/pochta">Доставка i оплата</Link>
                            </li>

                            <li>
                                <Link className="link" to="#Харьков мебель">Контакты</Link>
                            </li>

                            <li>
                                <Link className="link" to="#Харьков мебель">Письмо директору</Link>
                            </li>

                            <li>
                                <Link className="link" to="#Харьков мебель">Бренды</Link>
                            </li>

                            <li>
                                <Link className="link" to="#Харьков мебель">Дизайн интерьера</Link>
                            </li>
                        </ul>
                </div>

                <div ref={xRef} onClick={() => {
                    // xRef.current.classList.remove("katalog__modal")
                }} className="katalog__modal modal w-[1297px] h-[499px] absolute bg-[#E0E0E0] top-[216px] left-[140px]">
                    <div className="modal__info flex justify-between pl-[34px] pt-[25px]">
                        <ul className="flex flex-col gap-[25px]">
                            {Katalog.map((item) => (
                                <li key={item.id} className="flex  gap-[30px] hover:text-[#72BF44] text-[15px]">
                                    <img className="transition duration-300 transform  group-hover:bg-[#000]" src={item.poster} alt={item.title} />
                                    <a href="/Divans">{item.title}</a>
                                </li>
                            ))}
                        </ul>

                        <hr className="line"/>

                        <ul className="grid grid-cols-4 items-center gap-[60px]">
                            {ModalItems.map((item) => (
                                <li key={item.id} className="flex flex-col items-center gap-[15px] cursor-pointer hover:text-green-600">
                                    <img src={item.poster} alt="imgg" />
                                    <h5>{item.title}</h5>
                                </li>
                            ))}
                        </ul>

                        <button className=" translate-y-[-50%] translate-x-[-100%]" ref={xRef} onClick={() => {
                            xRef.current.classList.add("katalog__modal")
                        }}>✖️</button>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;