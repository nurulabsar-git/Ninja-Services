import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <main className="footer-style">
        <section style={{margin: '100px 8px 50px 8px', padding: '5px', justifyContent: 'space-between', fontSize: '12px'}}>
           <div className="row">
               <div className="col-md-4">
                <h6>About Us</h6>
                <p>This is a food delivery service for every hungry animals.
                 You can buy lots of necessary food from here. </p>
               </div>
               <div className="col-md-4">
                 <h6>Social Link</h6>
                 <a className="link-style" href="http://www.facebook.com"><i class="fa fa-facebook-official" aria-hidden="true"></i> Facebook</a> <br/>
                 <a className="link-style" href="https://twitter.com/?lang=en"><i class="fa fa-twitter-square" aria-hidden="true"></i> Twitter</a> <br/>
                 <a href="http://www.youtube.com/watch?v=SQvV4SNeH-U" className="link-style"><i class="fa fa-youtube-square" aria-hidden="true"></i> YouTube</a> <br/>
               </div>
               <div className="col-md-4">
                <h6>Contact with us</h6>
                <p><i class="fa fa-phone" aria-hidden="true"></i> +12345678901</p>
                <p><i class="fa fa-phone" aria-hidden="true"></i> +13245678901</p>
                <p><i class="fa fa-phone" aria-hidden="true"></i> +14325678901</p>
                <p><i class="fa fa-phone" aria-hidden="true"></i> +154321678901</p>
               </div>
           </div>
        </section>
        <div  style={{margin: '15px 15px 30px 15px', textAlign: 'center'}}>
            <small>@ all assignment rights are reserved</small>
        </div>
        </main>
    );
};

export default Footer;