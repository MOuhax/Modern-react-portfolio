import React from 'react';
import './About.scss';
import Images from '../../constants/Images';
import {motion} from 'framer-motion';


const About = () => {
  return (
    <div className='app__about' id='about'>
 <div className="app__about-title">
  <h1>I Know That<span className='app__about-blue'> Good Design</span></h1>

  <h1>Means<span className='app__about-blue'> Good Business</span></h1>
 </div>

 <div className="app__about-services app__flex">
 
 <motion.div 
 className="app__about-service"
 whileInView={{opacity:[0, 1]}}
 whileHover={{scale:1.1}}
 transition={{duration: 0.5, type:'tween'}}>
  <img src={Images.about01} alt="web_design" />
  <h3>Web Designer</h3>
  <p className='p-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni maiores tempora, possimus dolor reprehenderit minus dolorem eligendi harum, cum impedit asperiores odio consequuntur quis quasi quae hic, ab repellendus.</p>
 </motion.div>
 <motion.div 
 className="app__about-service"
 whileInView={{opacity:[0, 1]}}
 whileHover={{scale:1.1}}
 transition={{duration: 0.5, type:'tween'}}>
  
  <img src={Images.about02} alt="web_design" />
  <h3>Mobile Developer</h3>
  <p className='p-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni maiores tempora, possimus dolor reprehenderit minus dolorem eligendi harum, cum impedit asperiores odio consequuntur quis quasi quae hic, ab repellendus.</p>
 </motion.div>
 <motion.div 
 className="app__about-service"
 whileInView={{opacity:[0, 1]}}
 whileHover={{scale:1.1}}
 transition={{duration: 0.5, type:'tween'}}>
  
  <img src={Images.about03} alt="web_design" />
  <h3>Shopify Expert</h3>
  <p className='p-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni maiores tempora, possimus dolor reprehenderit minus dolorem eligendi harum, cum impedit asperiores odio consequuntur quis quasi quae hic, ab repellendus.</p>
 </motion.div>
 <motion.div 
 className="app__about-service"
 whileInView={{opacity:[0, 1]}}
 whileHover={{scale:1.1}}
 transition={{duration: 0.5, type:'tween'}}>
  
  <img src={Images.about04} alt="web_design" />
  <h3>Frontend Developer</h3>
  <p className='p-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni maiores tempora, possimus dolor reprehenderit minus dolorem eligendi harum, cum impedit asperiores odio consequuntur quis quasi quae hic, ab repellendus.</p>
 </motion.div>   
 </div>

    </div>
  )
}

export default About