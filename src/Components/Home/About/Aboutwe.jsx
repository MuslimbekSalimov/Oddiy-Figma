import ABoutWe from "../../img/AboutWE.png";

function Aboutwe() {
    return(
        <>
        <section className="aboutwe">
            <div className="container">
                <h2>О нас</h2>
                <picture>

                    <img src={ABoutWe} alt="ABoutWe" />
                </picture>
            </div>
        </section>   
        </>
    )
}

export default Aboutwe