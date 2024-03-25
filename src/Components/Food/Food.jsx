import Opa from "../Lib/img/Opa.png"
import Vector from "../Lib/img/Vector.png"
import React from "react";

function Food() {

    const xRef = React.useRef()

    return (
        <>
        <section className="food pt-[127px]">
            <picture className="absolute left-0 mt-[-235px]">
                <img src={Vector} alt="" />
            </picture>
            <div className="container">
                <div className="flex items-center gap-[97px]">
                    <picture>
                        <img src={Opa} alt="Opa" />
                    </picture>

                    <div className="text">
                        <h3 className="text-yellow-600 font-[600]">About us</h3>
                        <h3 className="pt-[10px] text-[31px] w-[467px] font-[700] font-[Philosopher]">Food Stalls with Persons but  to  Product marketing plane
                            catlogues etc to. </h3>
                         <p ref={xRef} className="w-[487px] pt-[30px] opacity-90">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also  equipment  make your marketing plane Effective.</p>
                         <button  ref={xRef} onClick={() => {
                            xRef.current.classList.remove("scroll")
                         }} className="button text-yellow-50 bg-orange-600 rounded-md mt-[29px]">Read More</button>
                    </div>
                </div>

                <div className="modal">
                    <div className="modal__info">
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Food;