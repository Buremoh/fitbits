import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'    
import VisionImage from '../../images/about2.jpg'    
import MissionImage from '../../images/about3.jpg'    
import './about.css'



const about = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
      Discover the Heartbeat Behind Fitbits: Our Passion for Health, 
      Wellness, and Your Fitness Journey. Welcome to the Vawulens Story.
      </Header>

      <section className='about__story'>
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
            At Vawulens, our fitness journey began with a simple belief - 
            that health and well-being should be accessible to all. 
            With a passion for empowering individuals to lead healthier lives, 
            we set out to create a fitness community like no other.
            </p>
            <p>Founded in 2022, our journey has been one of dedication. 
              We've transformed countless lives, guiding individuals on 
              their path to fitness excellence, fostering a community that 
              thrives on support and success.
              </p>
              <p>
              At Vawulens, we're not just a fitness program; we're a lifestyle. 
              Join our community and embark on a journey to a healthier, stronger, 
              and more vibrant you.
              </p>
          </div>
        </div>
      </section>
      
      <section className='about__Vision'>
        <div className="container about__story-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
            At Vawulens, our vision is clear: to inspire, motivate, 
            and lead individuals toward a future where health and fitness 
            are an integral part of daily life.
            </p>
            <p>
            We aspire to create a world where everyone, regardless of their 
            fitness level or background, has the opportunity to embark on a 
            transformative journey towards well-being, empowering them to live life to the fullest.
              </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Story Image" />
          </div>
        </div>
      </section>

      <section className='about__mission'>
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
            At Vawulens, our mission is to make fitness an inclusive 
            and sustainable part of everyday life. We provide the guidance, 
            support, and resources needed to create lasting wellness.
            </p>
            <p>
            We're committed to guiding your fitness journey with integrity, 
            professionalism, and a holistic approach. By fostering a 
            supportive community, we empower individuals to reach their full potential.
              </p>
              <p>
              We aim to empower individuals to transform their lives through fitness, 
              ultimately helping them thrive in a healthier, stronger, and more vibrant state.
              </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default about
