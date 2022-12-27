

const Outreach = () => {
    return (
        <>

        {/* <section>
            <img className="w-full object-cover" src={`images/topBannerOutreach.jpg`} alt="" />
        </section> */}
        <section className="flex sm:flex-row flex-col gap-2 bg-topBannerOutreach p-2 bg-no-repeat bg-cover object-cover">

            <div className="flex-1 w-full sm:w-1/3 mx-auto p-3 bg-black/60 shadow-md shadow-gray-600 text-white">
                <p className="text-atasp-mid-green">
                    Details on Cassava Production in the zone
                </p>
                <p>Cassava was introduced to the Zone 2019 after the realization of high yield production in some parts of the Zone</p>
            </div>

            <div className="flex-1 mx-auto p-3 w-full sm:w-1/3 bg-blue-200/30 shadow-md shadow-gray-600">
                 <p className="">Details on Sorghum Production in the zone</p>
                 <p>Sorghum is one of two commodities produced along side Rice in the zone since the commencement of the Program.</p>
            </div>

            <div className="flex-1 mx-auto p-3 w-full sm:w-1/3 bg-orange-200/30 shadow-md shadow-gray-600">
                <p className="">Details on Rice Production in the zone</p>
                <p>Rice is the major produced commodity amongst the three commodities produced in the zone.</p>
            </div>

        </section>
        </>
    )
}

export default Outreach;