import Footer from './Footer'
import Header from './Header'
import { SlArrowDown, SlEnergy } from 'react-icons/sl'
import { ImLeaf, ImManWoman } from 'react-icons/im'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import bgvid from './bgvid.mp4'
import corn from './corn.jpg'
import partners from './partner.jpg'
import sustain from './sustain.jpg'
import img2 from './img2.jpg'
import { HashLink, NavHashLink } from "react-router-hash-link";

function Home() {

    const navigate = useNavigate()

    return(
        <div className='home'>
            <Header />
            <div className='home_body'>
                <section className='home_section_one'>
                    <video autoPlay muted loop id="bgvid">
                        <source src={bgvid} type="video/mp4" />
                    </video>
                    <div className='section_one_div'>
                        <h1>Welcome to <span style={{color: '#ffcc00'}}>Evajay Farms Limited</span> - Cultivating Excellence, Nurturing the future.</h1>
                        <p>Discover the Future of Modern Agriculture on Our 45+ Hectares of Fertile Farmland in Delta State, Nigeria. Viably Grown Yam, Cassava, Sweet Potato, Corn, and Plantain - From Our Farm to Your Table.</p>
                        <h3 onClick={()=> {navigate('/about')}}><Link to='/about' style={{textDecoration: 'none', color: 'black'}}>Learn more</Link></h3>
                    </div>

                    <div className='section_one_arrow'>
                        <SlArrowDown className='arrow_one'/>
                        <SlArrowDown className='arrow_two'/>
                        <SlArrowDown className='arrow_three'/>
                    </div>
                </section>
                <section className='home_section_two'>
                    <div className='home_section_two_div1'>
                        <div className='home_section_two_div1_div' onClick={()=> {navigate('/product')}}>
                            <img src={corn} alt='' />
                            <button>Our  Farm products</button>
                        </div>
                        <div className='home_section_two_div1_div' onClick={()=> {navigate('/sustainability')}}>
                            <img src={sustain} alt='' />
                            <button>Sustainability</button>
                        </div>
                        <div className='home_section_two_div1_div' onClick={()=> {navigate('/about')}}>
                            
                            <NavHashLink
                                to="/sustainability#with-hash-sustain"
                                ><img src={partners} alt='' />
                            <button>Partnership and collaboration</button></NavHashLink>
                        </div>
                    </div>
                    <div className='home_section_two_div2'>
                        <div className='home_section_two_div2_div' >
                            <div>
                                <h1>Who are we?</h1>
                                <p>At Evajay Farms Limited, we are a forward-thinking and innovative agricultural company, dedicated to transforming the agricultural landscape in Delta State, Nigeria. With over 45+ hectares of fertile farmland, we take pride in producing high-quality and sustainable farm products, including yam, cassava, sweet potato, corn, and plantain. </p>
                                <button onClick={()=> {navigate('/about')}}>Learn more</button>
                            </div>
                            <img src={img2} alt='' />
                        </div>
                    </div>
                </section>
                <section className='home_section_three'>
                    <h1>A look into Evajay Farms</h1>
                    <h3>We value our employees and their families and understand their importance to our farm and its success. We focus on the health of our soil and pride ourselves on being good stewards for all our resources. At Evajay Farms, conservation and preservation are of the utmost importance to us.</h3>
                </section>
                <section className='section_test'>
                    <div className='section_test_div'>
                        <h3>Green agriculture</h3>
                        <h1>Producing food with the <span style={{color:'#f2c744'}}>enviroment</span> in mind</h1>
                        <p>At Evajay Farms Limited, sustainability is not just a buzzword; it is a guiding principle that informs every aspect of our operations. We recognize the importance of preserving our environment and natural resources for future generations. </p>
                    </div>
                    <div  className='section_test_div2'>
                        <h3>Three environmental pillars</h3>
                        <div className='section_test_div2_div'>
                        <div>
                            <ImLeaf className='sustain'/>
                            <h3>Eco-Friendly Farming Practices</h3>
                        </div>
                        <div>
                            <ImManWoman className='sustain'/>
                            <h3>Biodiversity Preservation: </h3>
                        </div>
                        <div>
                            <SlEnergy className='sustain'/>
                            <h3>Energy Efficiency</h3>
                        </div>
                        </div>
                    </div>
                </section>
                <section className='home_section_four'>
                    <div className='contact' id='with-hash-contact'>
                    <h3>Get in contact with Evajay Farms</h3>
                    <p>Thank you for considering Evajay Farms Limited for your agricultural needs. If you have any inquiries, partnership proposals, or would like to place an order, please don't hesitate to get in touch with us</p>
                    <button  onClick={() => window.location = 'mailto:sales@info@evajayfarms.com?subject=Access request'} className="body_section_six_button">Get in touch</button>
              </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}
export default Home