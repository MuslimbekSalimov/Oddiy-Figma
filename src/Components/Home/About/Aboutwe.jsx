import ABoutWe from "../../img/AboutWE.png";
import { TagNaems } from "../../API/ALLAPI";
import { Link } from "react-router-dom";
import Email from "../../Email/Email";

function Aboutwe() {
    return(
        <>
        <section className="aboutwe">
            <div className="container">
            <div className="flex pt-[19px] pb-[19px]">
                     <Link className="font-[Open sans] text-[18px]" to="/home">{TagNaems.map((item) => (
                     <h3 className=" text-black">Главная</h3>
                     ))}</Link>
                        <Link to={"/about"}>
                        {TagNaems.map((item) => (
                            <span className=" text-green-600 pl-[10px]">О нас</span> 
                         ))}
                        </Link>
                </div>
                <h2 className="font-[700] font-[Open sans] text-[48px] pb-[22px]">О нас</h2>
                <picture>

                    <img src={ABoutWe} alt="ABoutWe" />
                </picture>

                <h3 className="font-[600] font-[Open sans] text-[36px] pt-[50px]">Удобно, выгодно и безопасно</h3>
                <p className="w-[836px] font-[Open sans] font-[400] text-[18px] pt-[21px]">МЕГА ДОМ - самый большой интернет-магазин мебели в Украине. Здесь можно найти любую мебель, которая поможет вам воплотить самые смелые мечты и пожелания в интерьере, создать настоящий уют.
                    <br/>
                    <br/>
                   Мы предлагаем продукцию по приятной цене и предоставляем выгодные условия доставки и сборки. Оформляйте заказ на сумму от 10 000 грн. и гарантировано получайте бесплатную доставку и сборку в Харькове, Полтаве, Днепре, Одессе и Львове.
                    <br/>
                   <br/>
                   На всю продукцию предоставляется гарантия от 12 до 18 месяцев </p>

                <h3 className="font-[600] font-[Open sans] text-[36px] pt-[50px]">Наша цель — счастливые клиенты</h3>

                <p className="w-[836px] font-[Open sans] font-[400] text-[18px] pt-[21px]">Мы знаем, что мебель способна сделать жизнь комфортнее, приятнее и ярче. Поэтому и поиск необходимой мебели должен быть легким, быстрым и удобным. Мы помогаем найти то, что нужно именно Вам, в одном месте. Все заботы мы берем на себя, исполняем ваши желания и гарантируем сервис, который делает вашу жизнь счастливее.</p>

                <h3 className="font-[600] font-[Open sans] text-[36px] pt-[50px]">Осуществлять мечты легко</h3>

                <p className="w-[836px] font-[Open sans] font-[400] text-[18px] pt-[21px]">Мы работаем по всей Украине, сотрудничаем с ведущими производителями мебели, чтобы вы могли легко подобрать любую мебель. Мы хотим, чтобы наши клиенты получали лучший сервис, поэтому реализуем комплексный подход: доставка, сборка, гарантийное обслуживание.</p>


                <h3 className="font-[600] font-[Open sans] text-[36px] pt-[50px]">Удобная доставка</h3>

                <p className="w-[836px] font-[Open sans] font-[400] text-[18px] pt-[21px]">Любой товар можно заказать с доставкой. Все комплексные заказы на сумму от 10 000 грн. мы доставляем и собираем бесплатно и оперативно.
                 При наличии мебели на складе, доставка и сборка по Харькову - в течение суток, по Украине - в течение 3                  рабочих дней. Всё — с минимальной предоплатой, если необходимо — в рассрочку или кредит. Возможна, как                  безналичная, так и наличная оплата - выбор за вами..</p>

                <h3 className="font-[600] font-[Open sans] text-[36px] pt-[50px] ">Дальше — больше</h3>

                <p className="w-[836px] font-[Open sans] font-[400] text-[18px] pt-[21px]">Наша цель, чтобы у наших клиентов никогда не возникал вопрос «где купить мебель?». МЕГА ДОМ - самый большой интернет-магазин мебели, в котором каждый найдет свой вариант мебели. Мы хотим помочь как можно большему количеству людей стать счастливыми обладателями комфортной мебели.
                {/* Ждем вас! */}
                </p>
                <strong className=" mb-[100px]">Ждем вас!</strong>


                <Email className={" t-[50px]"}/>
            </div>
        </section>   
        </>
    )
}

export default Aboutwe