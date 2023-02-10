import React,{useState} from 'react'
import { Flex,Box } from '@chakra-ui/react'
import Image from "next/image"
import { motion } from 'framer-motion'


function Navbar(){
    const navAnimate = {
        hidden:{
            opacity:0,
            y:300
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:0.6,
                staggerChildren:0.45,
                when:"beforeChildren"
            }
        }

    }
    const logoAnimate={
        hidden:{
            x:"100vw",
            opacity:0
        },
        visible:{
            x:0,
            opacity:1,
            transition:{
                duration:0.4,
                ease:"easeInOut"
            }
        }
    }

    const liAnimate = {
        hidden:{ x:"-100vw",
        opacity:0,},
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:1,
               
            }
        }
    }
    const catAnimate={
        hidden:{ y:"-100vw",
        opacity:0,},
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:1,
               
            }
        }
    }
    return(
        <>
        <Flex alignItems={'center'} flexDirection={'row'} justifyContent={'space-around'} padding={'10px'} as={motion.div} variants={navAnimate} initial="hidden" animate="visible">
            <Box as={motion.div} variants={logoAnimate}>
            <Image src="/Group 10.png" width={80} height={100} alt="logo"/>
            </Box>
          
            <Box >
               <Flex alignItems={'center'} flexDirection={'row'} justifyContent={'space-around'} gap={'40px'}>
                    <motion.li style={{listStyle:'none'}} variants={liAnimate}>Shop</motion.li>
                    <motion.li style={{listStyle:'none'}} variants={liAnimate}>Plug-In-Sale</motion.li>
                    <motion.li style={{listStyle:'none'}} variants={liAnimate}>More</motion.li></Flex>
               
            </Box>
            <Box>
                <Flex alignItems={'center'} flexDirection={'row'} justifyContent={'center'} gap={'0px'}>
                    <Box as={motion.div} variants={catAnimate}>  <Image src="/Group 1.png" width={70} height={100} alt="logo"/></Box>
              
                <Box as={motion.div} variants={catAnimate}><Image src="/Group 3.png" width={70} height={100} alt="logo"/></Box>

                </Flex>
            </Box>
        </Flex>
        
        </>
    )
}

export default Navbar