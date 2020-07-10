import React,{useState} from 'react';
import { useSpring, animated } from 'react-spring';




const Card = ()=>{
  const [toggle,setToggle] = useState(true)

  const handleClick =()=>{
    setToggle(!toggle)
  }

  const props= useSpring(
    { config:{duration:200,tension:120,friction:14},
      opacity: toggle ? 0:1,
      rotateX: toggle? '(0deg)':'(180deg)',
      transform: toggle? 'perspective(1400px) rotateY(0deg)':' perspective(1400px) rotateX(180deg)'
    })
    const props2 = useSpring({
      config:{duration:200,tension:120,friction:14},
      opacity:toggle ? 1 : 0,
      transform: toggle? 'perspective(1400px) rotateY(0deg)':' perspective(1400px) rotateX(180deg)'

    })

  return(
    <div className="container">
      <button type="button" onClick={()=>{handleClick()}} >Animation</button>
      <animated.div className='animated-box' style={props}>
        <div>a box to animate</div></animated.div>
      <animated.div className="blue-box" style={props2}>just a blue box</animated.div>
    </div>
  )
}

export default Card
