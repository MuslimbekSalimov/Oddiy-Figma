import Jizz from "../Lib/img/jizzz.png"

function Hero() {
    return (
        <>
        <section className="hero">
            <div className="container flex items-center">
                <div className="divv">
                    <h1 className="text-yello-600 text-5xl pb-6 font-[Philosopher]">Making time a good time by making food the good food.</h1>
                    <p className="text-base pb-10">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                    <div className="flex gap-10">
                        <button className="button text-yellow-50 bg-orange-600 rounded-md">Order Now</button>
                        <button className="text-black bg-yellow-50 rounded-xl border border-indigo-600 pl-4 pr-4">Food Details</button>
                    </div>
                </div>

                <picture>
                    <img src={Jizz} alt="Jizz" />
                </picture>
            </div>
        </section>
        </>
    )
}

export default Hero