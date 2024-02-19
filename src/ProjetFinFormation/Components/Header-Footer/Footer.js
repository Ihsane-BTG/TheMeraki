import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <section id="footer">
            <div className="container contact-form">
                <div className="contact-image">
                    <img src={`${process.env.PUBLIC_URL}/PFF-Images/whiteLogo.png`} alt="TheMerakiLogo"/>
                </div>
                <form method="post">
                    <h3>Drop Us a Message</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{ width: "100%", height: "150px" }}></textarea>
                            </div>
                        </div>
                        <div className="col-md-12 form-group">
                            <input type="submit" name="btnSubmit" className="btnContact btn" value="Send Message" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="container-fluid foot">
                <div className="SThree row text-center text-xs-center text-sm-left text-md-left">
                    <div className="LDesc col-xs-12 col-sm-4 col-md-4 mr-3">
                        <Link to={"/"} className="FLogo">
                            <img src={`${process.env.PUBLIC_URL}/PFF-Images/logo.jpg`} alt="TheMerakiLogo" className="FootLogo" />
                        </Link>
                        <p>
                            Welcome to TheMeraki, your curated destination for fashion, jewelry, and cutting-edge electronics
                            – where style meets innovation with a touch of soulful elegance.
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <h5>Contacts</h5>
                        <div className="contacts">
                            <h6>Address</h6>
                            <p>Tangier, Morocco</p>
                        </div>
                        <div className="contacts">
                            <h6>Email</h6>
                            <Link className="a" to={"mailto:boutglimtihsane@gmail.com"}>boutglimtihsane@gmail.com</Link>
                        </div>
                        <div className="contacts">
                            <h6>Phones</h6>
                            <Link className="a" to={"tel:+212 652-502695"}>+212 652-502695</Link>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 pl-5">
                        <h5>Links</h5>
                        <ul className="list-unstyled quick-links">
                            <li><Link className="a" to={""} ><i className="fa fa-angle-double-right"></i>Home</Link></li>
                            <li><Link className="a" to={""} ><i className="fa fa-angle-double-right"></i>About Us</Link></li>
                            <li><Link className="a" to={""} ><i className="fa fa-angle-double-right"></i>FAQ</Link></li>
                            <li><Link className="a" to={""} ><i className="fa fa-angle-double-right"></i>FAQ</Link></li>
                        </ul>
                    </div>
                </div> <hr />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p className="h6">&copy; 2023 All right Reserved. Designed by BOUTGLIMT Ihsane.</p>
                    </div>
                    <hr />
                </div>
            </div>
        </section>
    );
}

export default Footer;