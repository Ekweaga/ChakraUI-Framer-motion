import React from "react"
import {Box,Flex,Container,Text} from "@chakra-ui/react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Content(){

    const boxAnimate = {
        hidden:{
            opacity:0,
            x:-200,
            scale:1.5
        },
        visible:{
            opacity:1,
            x:[-100,100,50,10,0],
            scale:1,
            transition:{
                duration:0.6,
                ease:'easeInOut'
            }
        },
        viewport:{
            amount:1
        }
    }
    return(
        <>

        <Box width={'80%'} margin={'auto'}>

            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={'150px'}>
                <Box marginTop={60}>
                    <Text as={'h1'} fontWeight={'500'} fontSize={50}>Adaptive ear cups<br/>
and headband</Text><br/>
<p style={{width:'400px'}}>Based around a smooth comfort fit design coated with a sleek matte finish and look sharp and stay sharp, the boAt headway.</p>

                </Box>
            <Box as={motion.div} variants={boxAnimate} whileInView="visible" initial="hidden" >
                    <Image src="/r450-5 1.png" width={400} height={350} alt="face"/>
                </Box>

            </Box>

            <Box background={'#F8F4EC'} marginTop={40} position={'relative'} height={400}>
                <Box as={motion.div} variants={boxAnimate} whileInView="visible" initial="hidden" position={'absolute'} top={-70} left={0}>
                    <Image src="/Section5_808x874_e44120a9-5f28-4bd5-b0c9-206b8e52352arwe 1.png" width={400} height={300} alt="face" />
                </Box>
                <Box  position={'absolute'} top={120} right={50}>
                    <Text as={'h1'} fontWeight={'400'} fontSize={50}>Lightweight and <br/>
Portable</Text>
<p style={{width:'300px'}}>The powerful 300mAh battery provides up to 8 hours of audio bliss.</p>
                </Box>
                </Box>

        </Box>


        </>
    )
}