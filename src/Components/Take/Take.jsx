import Phone from '../Lib/img/Phone.png';
import Microsoft from '../Lib/img/Microsoft.png';
import Playmarket from '../Lib/img/Playmarket.png'


function Take() {
    return (
        <>
        <section className="take bg-amber-50 h-[518px] mt-[187px]">
            <div className="container">
                <div className="flex items-center justify-between">
                <div className="f">
                    <h5 className='text-yellow-600 font-[Roboto] text-base uppercase'>Take away</h5>
                    <h5 className='font-[Philosopher] text-[31.25px] w-[555px] font-[700]'>Food Stalls with Persons but  to  Product marketing plane. </h5>
                    <p className='font-[Roboto] opacity-75 pt-[19px]'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipmentwith Persons but also  Just Food Stalls with Persons.</p>

                    <div className="flex items-center gap-[30px] pt-[30px]">
                        <button className="bg-black w-[163px] h-[48px] flex items-center gap-[3px] pl-[12px] rounded-[6px]">
                            <img className='w-[26px] h-[25px]' src={Microsoft} alt="Microsoft" />
                            <strong className="text-white">Microsoft App</strong>
                        </button>

                        <button className='border border-solid w-[163px] h-[48px] flex items-center gap-[3px] pl-[19px] rounded-[6px]'>
                            <img src={Playmarket} alt="Playmarket" />
                            <strong>Google Play</strong>
                        </button>
                    </div>

                </div>
                
                    <img className='mt-[-80px]' src={Phone} alt="Phone" />
                </div>
            </div>
        </section>
        </>
    )
}
export default Take;