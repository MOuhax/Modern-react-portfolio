
import React from 'react'
import { motion } from 'framer-motion';
import './About.scss';
import { images } from '../../constants';
import {urlFor, client } from '../../client'
const abouts = [

    {title: 'Web development ', description:'zkernzkejrczhedr', imgUrl: images.about01},
    {title: 'Shopify developer', description:'zkernzkejrczhedr', imgUrl: images.about02},
    {title: 'MERN stack', description:'zkernzkejrczhedr',  imgUrl: images.about03},
    {title: 'Mobile developer', description:'zkernzkejrczhedr',  imgUrl: images.about04}

];

// const About = () => {
//   const [abouts, setAbouts] = useState([]);

//   useEffect(() => {
//     const  query ='*[_type == "abouts"]';
//     client.fetch(query)
//     .then((data)=> setAbouts(data))
//   }, [])
  
// }

function About() {
  return (
    <>
    <h2 className='head-text' style={{marginTop:40}}> I Know That 
    <span> Good Dessigin</span>
    <br/> Means 
    <span> Good Busines</span></h2>

    <div className="app__profiles">
   {abouts.map((about, index)=>(
  
        <motion.div
         whileInView={{opacity: 2}}
         whileHover={{scale : 1.1}}
         transition= {{duration : 0.5, type:'tween'}}
        className='app__profile-item'
        key={about.title + index}
         > 
        <img src={about.imgUrl} alt={about.tite} />
        <h2 className='bold-text' style={{marginTop: 20}}> {about.title}</h2 >

        <p className='p-text' style={{marginTop:10}}> {about.description}</p>
         </motion.div>
   ))}



    </div>
    </>
  )
}

export default About