import { mebel } from "../../API/ALLAPI";
import { Link } from "react-router-dom";

function Profession() {

   

    const getMebel = mebel.map((item) => (
        <Link to={"/buy"}>
        <li key={item.id}>
            <a href="/mebel">
              <img src={item.poster} alt={item.poster} />
            </a>
        </li>
        </Link> 
    ))

    return (
        <>
       <section className="proekt text-center pt-[102px]">
          <div className="container">
            <h2 className="text-[36px] font-[700] pb-[40px]">Наши Проекты</h2>
            <ul className="inline-grid  grid-cols-4 gap-[100px]">
                {getMebel}
            </ul>

            <button className="animation w-[63%] h-[51px] rounded-[8px] bg-[#72BF44] mt-[70px] mb-[134px] text-[#FFFFFF] font-[600]">Показать Еще</button>
          </div>
       </section>
        </>
    )
}

export default Profession;