import React from 'react';
import {useState, useEffect} from'react';
import { AiFillEye, AiFillGithub} from 'react-icons/ai';
import {motion} from 'framer-motion';
import { urlFor } from '../../client';


import './Work.scss'
import { client } from '../../client';

const Work = () => {

  const [activeFilter, setActiveFilter] = useState("all");
  const [animateCard, setAnimateCard] = useState({y:0, opcacity:1});
const [works, setWorks] = useState([]);
const [filterWork, setFilterWork] = useState([]);


const handleWorkFilter = (category) => {
setActiveFilter(category)
};

useEffect(()=>{
  const query= '*[_type == "works"]';

  client.fetch(query)
  .then((data)=>{
    setWorks(data);
    setFilterWork(data);
  })
}, []);
  return (
   
   <>
    <h2 className='head-text'> the titmle hre  </h2>

    <div className="app__work-filter">

      {['UI/Ux', 'Web App', 'Mobile App', 'Shopify', 'React JS'].map((category, index)=>(
        <div key={index} 
        onClick={()=> handleWorkFilter(category)}
        className="app__work ${category}">
          {category} 
          </div>
      ))}

      <motion.div
      animate={animateCard}
      transition={{duration : 0.5, delayChildren:0.5}}
      className="app__work-portoflio"
      >
        {works.map((work, index) =>(
          <div className='app__work-item app__flex' key={index}>

          <div className='app__work-img app__flex'>
            <img src={urlFor(work.imgUrl)} alt={work.name} />

          </div>

          </div>
        ))}
      </motion.div>
    </div>
   
   </>

  )
}

export default Work