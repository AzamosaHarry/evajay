import './About.css'
import bgvid2 from './bgvid2.mp4'
import Footer from './Footer'
import Header from './Header'

function About() {
    return(
        <div className='about'>
            <Header />
            <div className='about_body'>
                <div>
                    <video autoPlay muted loop id="bgvid2">
                        <source src={bgvid2} type="video/mp4" />
                    </video>    
                    <div className='about_section_one_div'>
                        <h1>About us</h1>
                    </div>
                    <section className='about_section_two'>
                    <div className='about_section_two_div1'>
                        <p>At Evajay Farms Limited, we are a forward-thinking and innovative agricultural company, dedicated to transforming the agricultural landscape in Delta State, Nigeria. With over 45+ hectares of fertile farmland, we take pride in producing high-quality and sustainable farm products, including yam, cassava, sweet potato, corn, and plantain. </p>
                        <p> Our commitment to excellence, cutting-edge technology, and sustainable practices has earned us the trust of our customers and partners.</p>
                       
                    </div>
                    <div className='about_section_two_div2'>
                        <p>At Evajay Farms Limited, we are a forward-thinking and innovative agricultural company, dedicated to transforming the agricultural landscape in Delta State, Nigeria. </p>
                    </div>
                </section>
                <section className='about_section_three'  id='with-hash-sustain'>
                    <h1>Partnership and Collaboration</h1>
                    <h3>At Evajay Farms Limited, we believe in the power of collaboration and partnerships. We welcome opportunities to work with like-minded organizations, retailers, distributors, and wholesalers who share our vision of promoting sustainable agriculture and supporting local communities.</h3>
                </section>
                <section className='about_section_four'>
                    <h3>Our mission and vision</h3>
                    <h1>Nuturing the future</h1>
                    <div>
                        <div className='about_vision'>
                            <h3>Vision</h3>
                            <p>Our vision is to build a profitable and sustainable integrated energy company that delivers a green energy mix. We aim to achieve local and regional dominance and international relevance through strategic and organic investments across the upstream, midstream, and downstream oil and gas sectors, as well as the gas to power sector. Our approach is underpinned by net-zero philosophies and a commitment to strong plays in renewables and waste-to-energy investments.</p>
                        </div>
                        <div className='about_mission'>
                            <h3>Mission</h3>
                            <p>Our mission is to contribute significantly to the agricultural sector in Nigeria by leveraging modern farming techniques, research, and innovation to produce premium-quality farm products while ensuring environmental sustainability, improving the livelihoods of our farmers, and fostering community development.</p>
                        </div>
                    </div>
                </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About