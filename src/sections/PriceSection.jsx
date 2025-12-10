import PricingTier from "../components/PricingTier"
import { pricingData } from "../../constants"

const PriceSection = () => {
  return (
    <section id="prices" className="container mx-auto px-4 py-24">
       
        <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-5xl md:text-6xl mb-6 clash-display">
                Choose Your <span className='grad-1 clash-display'>Trading Plan</span>
            </h2>

            <p className="text-lg text-zinc-300/80">
                Select the Perfect trading plan with advanced features and competitve fees
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
{
    pricingData.map(({_id,name,description,features,price})=>(
        <PricingTier key={_id}  name={name} description={description} features={features} price={price} />
    ))
}
        </div>
    </section>
  )
}

export default PriceSection
