import { image } from "fontawesome";
import Link from "next/link";
import { urlFor, client } from "../lib/client";
import Image from "next/image";


const Footer = ({footer}) => {
  const  {logo, firma_aciklama, facebook, twitter, instagram, email, telefon} = footer;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <Image src={urlFor(logo)} alt="aa" />
            <p>{firma_aciklama}</p>
            <ul className="site-footer__social-networks">
              <li><Link href={`${facebook}`}><i className="icon-facebook"></i></Link></li>
              <li><Link href={`${twitter}`}><i className="icon-twitter"></i></Link></li>
              <li><Link href={`${instagram}`}><i className="icon-instagram"></i></Link></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Bizi takip et!</li>
              <li><Link href={`${facebook}`}><i className="icon-facebook"></i>Facebook`&apos;ta Biz!</Link></li>
              <li><Link href={`${twitter}`}><i className="icon-twitter"></i>Twitter`&apos;da Biz!</Link></li>
              <li><Link href={`${instagram}`}><i className="icon-instagram">İnstagram`&apos;da Biz!</i></Link></li>
            </ul>
            <ul>
              <li>Bize Ulaş!</li>
              <li><Link href={`mailto:${email}`}>{email}</Link></li>
              <li><Link href={`tel:${telefon}`}>{telefon}</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <Link href="https://atilla.dev/">
          <p>DESIGN BY ATILLA - © 2022. ALL RIGHTS RESERVED.</p>
          </Link>
        </div>
      </div>
    </footer>
  )
};


export default Footer;