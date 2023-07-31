import evajaywhite from './evajaywhite.png'
import { Link, useNavigate } from 'react-router-dom'
import './Footer.css'

function Footer() {
    const navigate = useNavigate()
    return (
        <div className='footer'>
            <div className="footer_body_one">
                <div className="footer_body_one_div">
                    <h1>Company</h1>
                        <p><Link to='/product' style={{textDecoration: 'none', color: 'white'}}>Products</Link></p>
                        <p><Link to='/about' style={{textDecoration: 'none', color: 'white'}}>About us</Link></p>
                        <p><Link to='/sustainability' style={{textDecoration: 'none', color: 'white'}}>sustainability</Link></p>

                </div>
                <div className="footer_body_one_newsletter">
                    <h1>Subscribe to our newsletter</h1>
                    <p>Time is one 
                    of the most precious things you have when bootstrapping. You can't take time.</p>
                    <div>
                        <input placeholder="Enter your email"/>
                        <button>Subscribe</button>
                    </div>
                    <p>We will never share your email adress with a third-party</p>
                </div>
            </div>
            <div className='footer_body_two'>
                <div className="footer_body_two_div">
                    <img src={evajaywhite} alt='' className='evajay' />
                    <p>Our commitment to excellence, cutting-edge technology, and viable practices has earned us the trust of our customers and partners.</p>
                </div>
                <div className="footer_body_two_div2">
                    <div className="footer_body_one_div div2">
                        <h1>Abuja, FCT, Nigeria</h1>
                        <p>18 Mississippi street, Maitama, Abuja</p>
                    </div>
                    <div className="footer_body_one_div div2" style={{marginLeft:"30%"}}>
                        <h1>Contact us</h1>
                        <p>info@evajayfarms.com</p>
                        <p>+234-7069341391</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer