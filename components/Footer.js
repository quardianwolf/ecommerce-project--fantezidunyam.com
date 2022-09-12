import { image } from "fontawesome";
import { urlFor, client } from "../lib/client";



const Footer = ({footer}) => {
  const  {logo, firma_aciklama, facebook, twitter, instagram, email, telefon} = footer;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <img src={urlFor(logo)}  />
            <p>{firma_aciklama}</p>
            <ul className="site-footer__social-networks">
              <li><a href={`${facebook}`}><i className="icon-facebook"></i></a></li>
              <li><a href={`${twitter}`}><i className="icon-twitter"></i></a></li>
              <li><a href={`${instagram}`}><i className="icon-instagram"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Bizi takip et!</li>
              <li><a href={`${facebook}`}><i className="icon-facebook">Facebook`&apos;ta Biz!</i></a></li>
              <li><a href={`${twitter}`}><i className="icon-twitter">Twitter`&apos;da Biz!</i></a></li>
              <li><a href={`${instagram}`}><i className="icon-instagram">İnstagram`&apos;da Biz!</i></a></li>
            </ul>
            <ul>
              <li>Bize Ulaş!</li>
              <li><a href={`mailto:${email}`}>{email}</a></li>
              <li><a href={`tel:${telefon}`}>{telefon}</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <a href="https://atilla.dev/">         
          <p>DESIGN BY ATILLA - © 2022. ALL RIGHTS RESERVED.</p>        
          </a>
        </div>
      </div>
    </footer>
  )
};


export default Footer;