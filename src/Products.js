import Footer from './Footer'
import Header from './Header'
import { GiFarmTractor, GiCorn, GiFarmer } from 'react-icons/gi'
import './Products.css'
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'
import pic5 from './pic5.jpg'

function Products() {
    return(
        <div className='product'>
            <Header />
            <div className='product_body'>
                <div className='product_body_header'>
                    <h1>Products</h1>
                </div>
                <div className='product_body_content'>
                    <div className='product_body_content_div1'>
                        <div>
                            <GiFarmer className='product_font'/>
                            <h1>Vast and productive farmland</h1>
                            <p>Our 45+ hectares of farm land in Delta State provide us with the capacity to grow a wide range of crops, allowing us to meet the diverse demands of our customers.</p>
                        </div>
                        <div>
                            <GiCorn className='product_font' />
                            <h1>High quality farm products</h1>
                            <p>We adhere to strict quality control measures and best agricultural practices to ensure that our products meet the highest standards. Our commitment to quality is unwavering.</p>
                        </div>
                        <div>
                            <GiFarmTractor className='product_font' />
                            <h1>Cutting edge technology</h1>
                            <p>We embrace modern agricultural technologies and tools to enhance productivity, optimize resource utilization, and ensure efficient farm management.</p>
                        </div>
                    </div>
                </div>
                <div className='product_body_content_div2'>
                    <div>
                        <img src={pic1} alt='' className='product_body_content_img'/>
                        <div>
                            <h1>Plantain</h1>
                            <h2>Nurtured to perfection</h2>
                            <p>Our plantains are nurtured to perfection, offering a delectable choice for both culinary delights and snacks.</p>
                        </div>
                    </div>
                    <div className='product_body_content_div2_div_alt'>
                        <img src={pic2} alt='' className='product_body_content_img'/>
                        <div>
                            <h1>Cassava</h1>
                            <h2>Rich flavor and nutritional benefits</h2>
                            <p>Our cassava is grown using sustainable practices, ensuring that it remains a versatile and reliable staple in various culinary delights and industrial applications.</p>
                        </div>
                    </div>
                    <div>
                        <img src={pic5} alt='' className='product_body_content_img'/>
                        <div>
                            <h1>Sweet potato</h1>
                            <h2>vibrant color and delicious taste</h2>
                            <p>Indulge in the sweetness and nutritional goodness of our sweet potatoes, carefully cultivated to maintain their vibrant color and taste.</p>
                        </div>
                    </div>
                    <div className='product_body_content_div2_div_alt'>
                        <img src={pic4} alt='' className='product_body_content_img'/>
                        <div>
                            <h1>Corn</h1>
                            <h2>Enjoy the freshness and natural taste</h2>
                            <p>Enjoy the freshness and natural taste of our corn, produced with precision and care, making it the perfect addition to your meals.</p>
                        </div>
                    </div>
                    <div>
                        <img src={pic3} alt='' className='product_body_content_img' />
                        <div>
                            <h1>Yam</h1>
                            <h2>Cultivated with care</h2>
                            <p>Discover the rich flavor and nutritional benefits of our premium-quality yams, cultivated with care and expertise to ensure a consistent supply throughout the year.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Products