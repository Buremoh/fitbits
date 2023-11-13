import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'


const contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
      Have questions or feedback? We're here to help. 
      Feel free to reach out - we'd love to hear from you.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:support@fitbits.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
            <a href="http://m.me/buremoh" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
            <a href="https://wa.me/+233241181123" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default contact
