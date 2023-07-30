import Footer from './Footer'
import Header from './Header'
import './Sustainability.css'

function Sustainability() {
    return(
        <div className='sustainability'>
            <Header />
            <div className='sustainability_body'>
                <div className='sustainability_body_header'>
                    <h1>Sustainability</h1>
                </div>
                <div className='sustainability_body_content'>
                At Evajay Farms Limited, sustainability is not just a buzzword; it is a guiding principle that informs every aspect of our operations. We recognize the importance of preserving our environment and natural resources for future generations. To that end, we have implemented several sustainability initiatives:
                    <p>1.	Eco-Friendly Farming Practices: We follow organic and regenerative farming practices, minimizing the use of synthetic chemicals and promoting the use of natural fertilizers and pest control methods. This approach not only ensures the health of our crops but also protects the soil and nearby water sources.</p>
                    <p>2.	Water Conservation: We have invested in water-efficient irrigation systems, such as drip irrigation and rainwater harvesting, to optimize water usage and reduce wastage.</p>
                    <p>3.	Biodiversity Preservation: Our farm is designed to promote biodiversity, with designated areas for wildlife habitats and native vegetation. We believe that a diverse ecosystem is essential for the health and resilience of our agricultural systems.</p>
                    <p>4.	Waste Reduction and Recycling: We actively manage waste on our farm, utilizing composting methods to recycle organic matter and employing responsible waste disposal practices.</p>
                    <p>5.	Energy Efficiency: We are committed to reducing our carbon footprint by implementing energy-efficient technologies and practices, such as solar-powered equipment and energy-saving measures in our operations.</p>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Sustainability