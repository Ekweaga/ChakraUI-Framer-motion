import React from 'react'
import {Box,Flex,Container,Text} from "@chakra-ui/react"
import Image from "next/image"
import {motion} from "framer-motion"

function Headphone() {

    const phoneBlogs = [
        {
            title:"40mm Dynamic Drivers",
            desc:"Its 40mm dynamic drivers help pump out immersive audio "
        },
        {
            title:"Ergonomically Designed ",
            desc:"It has been ergonomically designed and structured "
        },
        {
            title:"In-built Mic with Single",
            desc:"It has been ergonomically designed and structured "
        },
        {
            title:"Superior Playback Music  ",
            desc:"The mighty 500mAh battery capacity offers a superior playback"
        }
    ]

    const boxAnimate = {
        hidden:{
            opacity:0,
           
        },
        visible:{
            opacity:1,
            transition:{
                duration:0.5,
                ease:'easeInOut',
                when:"beforeChildren",
                staggerChildren:0.45
            }
        }
    }

    const headingAnimate = {
        hidden:{
            opacity:0,
            y:400,
            
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:0.4
            }
        },
        viewport:{
            amount:1
        }
    }

    const imageAnimate={
        hidden:{
            opacity:0,
            y:-200,
            scale:0.4,
            rotate:0
        },
        visible:{
            opacity:1,
            y:0,
            rotate:[0,90,180,360,0],
            scale:1,
            transition:{
                duration:0.6
            }
        },
        viewport:{
            amount:1
        }
    }
    const paraAnimate = {
        hidden:{
            opacity:0,
            x:100,
            y:-400
          
        },
        visible:{
            opacity:1,
            y:0,
            x:0,
           
            transition:{
                duration:0.5
            }
        },
        viewport:{
            amount:1
        }
    }

    const blogsAnimate = {
        hidden:{
            opacity:0,
            x:-200,
         
          
        },
        visible:{
            opacity:1,
            
            x:0,
           
            transition:{
                duration:0.6
            }
        },
        viewport:{
            amount:1
        }
    }
    const titleAnimate={
        hidden:{
            opacity:0,
            y:200,
         
          
        },
        visible:{
            opacity:1,
            
            y:0,
           
            transition:{
                duration:0.4
            }
        },
        viewport:{
            amount:1
        }
    }
  return (
   <>
   <Box width={'80%'} margin={'auto'} as={motion.div} variants={boxAnimate} initial="hidden" whileInView="visible">
    <Box style={{color:'#F0F0F0',textAlign:'center'}} fontSize={{base:'70px',md:'200px'}} ><motion.h1 variants={headingAnimate} >headband</motion.h1></Box>

    <Box>
        <Flex flexDirection={{base:'column',md:'row',lg:'row'}} justifyContent={'center'} alignItems={'center'} >
            <Box as ={motion.div} variants={paraAnimate}>
                <Text fontWeight={'700'} fontSize={'25px'}>Wireless <br/>
Entertainment</Text>
<p  style={{width:'300px'}}>Using Bluetooth technology, connect your smart </p>
</Box>
            <Box  marginTop={{base:'0px',md:'-260px'}} marginLeft={'-30px'} as={motion.div} variants={imageAnimate}><Image src="/Banner3-product-_3_e8e08bc4-cf14-4ae2-84fa-55e75559f065 1.png" width={700} height={300} alt="icon"/></Box>
            <Box as ={motion.div} variants={paraAnimate}>
            <Text fontWeight={'700'} fontSize={'25px'}>Lightweight and <br/>
Portable</Text>
<p style={{width:'300px'}}>The powerful 300mAh battery provides up to 8 hours of audio bliss. </p>
            </Box>
        </Flex>
    </Box>

    <Box marginTop={{base:10}}>
        <Flex flexDirection={{base:'column',md:'row',lg:'row'}} justifyContent={'center'} alignItems={'center'} gap={'100px'}>
            {
                phoneBlogs.map((item,index)=>{
                    return(
                        <Box key={index} as={motion.div} > 
                        <motion.h1 style={{fontWeight:'800',fontSize:'20px'}} variants={titleAnimate}>{item.title}</motion.h1>
                        <motion.p style={{fontSize:'15px',marginTop:'15px'}} variants={blogsAnimate}>{item.desc}</motion.p>

                        </Box>
                    )
                })
            }
        </Flex>
    </Box>

   </Box>
   </>
  )
}

export default Headphone