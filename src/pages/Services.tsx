import ServicesCard from "../components/cards/ServicesCard"

function Services() {
  return (
    <div id="services" className="flex flex-col px-4 py-28 text-center tablet:px-16 laptop:px-28 desktop:px-64">
      <h2 className="text-4xl font-semibold mb-10">Products & Services</h2>
      <div className="flex flex-col px-5 gap-5 tablet:grid">
        <ServicesCard />
      </div>
    </div>
  )
}

export default Services