import { Outlet } from 'react-router-dom';
import { atasp1ActivityPictures } from '../data/gallary';


const Gallary = () => {


    return (
    
        <>
            <form className="mt-20">
                    <p className="w-5/6 md:w-4/6 block mx-auto uppercase text-gray-500">Search Activity</p>
                <div className="mt-2">
                    <input type="text" className="p-3 w-5/6 md:w-4/6 block mx-auto border border-gray-500 outline-none rounded-md"/>
                    <p className="w-5/6 md:w-4/6 block mx-auto text-atasp-mid-red text-sm">Search by: State, Local Govt., or Community</p>
                </div>
                <div className="mt-3">
                    <button type="submit" className="block mx-auto p-3 bg-atasp-light-green rounded-md w-2/6 text-white hover:bg-atasp-dark-green transition duration-300">Submit</button>
                </div>
            </form>

            {/* <div>
                {atasp1ActivityPictures.map((item, index) => {
                    return (
                        <div><img src={`images/buildings/randomInfraPics/${item.kebbi.dandi.kamba.marketShed[0]}`} alt="rand" /></div>
                    )
                })}
            </div> */}
            <Outlet/>
    </>
    )
}

export default Gallary;