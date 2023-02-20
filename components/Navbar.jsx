import React,{useState} from 'react'
import { Flex,Box } from '@chakra-ui/react'
import Image from "next/image"
import { motion } from 'framer-motion'
import Link from "next/link"


function Navbar(){
    const [open,setOpen] = useState(false)
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
        <Flex alignItems={'center'} flexDirection={'row'} justifyContent={{base:'space-between',md:'space-around'}} padding={'10px'} as={motion.div} variants={navAnimate} initial="hidden" animate="visible">
            <Box as={motion.div} variants={logoAnimate}>
            <Image src="/Group 10.png" width={80} height={100} alt="logo"/>
            </Box>
          
            <Box display={{base:'none',md:'block',lg:'block'}}>
               <Flex alignItems={'center'} flexDirection={'row'} justifyContent={'space-around'} gap={'40px'}>
                    <motion.li style={{listStyle:'none'}} variants={liAnimate}>Shop</motion.li>
                    <motion.li style={{listStyle:'none'}} variants={liAnimate}>Plug-In-Sale</motion.li>
                    <motion.li style={{listStyle:'none'}} variants={liAnimate}>More</motion.li></Flex>
               
            </Box>
            <Box display={{base:'none',md:'block',lg:'block'}}>
                <Flex alignItems={'center'} flexDirection={'row'} justifyContent={'center'} gap={'0px'}>
                    <Box as={motion.div} variants={catAnimate}>  <Image src="/Group 1.png" width={70} height={100} alt="logo"/></Box>
              
                <Box as={motion.div} variants={catAnimate}><Image src="/Group 3.png" width={70} height={100} alt="logo"/></Box>

                </Flex>
            </Box>
            <Box  display={{base:'block',md:'none',lg:'none'}}>
            <Box
          onClick={() => setOpen(!open)}
         
        >
          <Image src={open ? "/icon-close.svg" :"/icon-hamburger.svg"} alt="icon" width={30} height={15}></Image>
        </Box>

        <Box position={'absolute'} right={0} top={0} display={`${open ? 'block':'none'}`} background={'#D9D2C3'} color={'black'} height={'100vh'} width={'150px'} style={{zIndex:9999}} padding={3}>
         
       <div style={{position:'absolute',top:20,right:20}}> <Image src= "/icon-close.svg" alt="icon" width={20} height={15}   onClick={() => setOpen(!open)} ></Image></div>
          <Flex flexDirection={'column'} marginTop={'100px'} gap={'30px'}>
          <li  onClick={() => setOpen(!open)} style={{listStyle:'none'}}><Link href="/">Shop</Link></li>
          <li className="cursor-pointer"  style={{listStyle:'none'}}>
                About Us
            </li>
                
                <li  onClick={() => setOpen(!open)}  style={{listStyle:'none'}}>Features</li>
                <li  onClick={() => setOpen(!open)}  style={{listStyle:'none'}}>More</li>
               
                <li  style={{listStyle:'none'}}> Plug-In-Sale</li>
          </Flex>
        </Box>


            </Box>
          

     

        </Flex>
        
        </>
    )
}

export default Navbar