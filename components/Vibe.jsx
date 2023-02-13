import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {Box,Flex,Container,Text,Button,Input} from "@chakra-ui/react"


function Vibe (){

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

    const imageAnimate={
        hidden:{
            opacity:0,
            x:-200,
            scale:0.4,
            rotate:0
        },
        visible:{
            opacity:1,
            x:0,
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

    const titleAnimate={
        hidden:{
            opacity:0,
            x:200,
         
          
        },
        visible:{
            opacity:1,
            
            x:0,
           
            transition:{
                duration:0.4
            }
        },
        viewport:{
            amount:1
        }
    }
    const paraAnimate = {
        hidden:{
            opacity:0,
           
            y:-50
          
        },
        visible:{
            opacity:1,
            y:0,
          
           
            transition:{
                duration:0.5
            }
        },
        viewport:{
            amount:1
        }
    }



    const image1Animate = {
        hidden:{
            opacity:0,
            x:100,
            y:-100
          
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


    const image2Animate = {
        hidden:{
            opacity:0,
            x:-100,
            y:-100
          
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
    return(
        <>
        <Box width={'80%'} margin={'auto'} as={motion.div} variants={boxAnimate} initial="hidden" whileInView="visible">
            <Box>
                <Box><h1 style={{fontWeight:'700',fontSize:'35px'}}>The boAthead Vibe</h1></Box>

                <Box>
                    <Flex flexDirection={'row'} justifyContent={'between'} alignItems={'center'} gap={'400px'} >
                        <Box position={'relative'}>
                            <motion.div style={{marginLeft:60}} variants={image1Animate}><Image src="/download (1) 1.png" width={200} height={300} alt="image"/></motion.div>
                            <motion.div style={{marginTop:-40,marginLeft:-70}} variants={image2Animate}><Image src="/download (3) 1.png" width={200} height={300} alt="image"/></motion.div>
                            <motion.div style={{marginLeft:60,marginTop:-140}} variants={image1Animate}><Image src="/download (2) 1.png" width={200} height={300} alt="image"/></motion.div>
                        </Box>
                        <Box position={'relative'}>
                            <motion.div style={{position:'absolute', top:30,left:10,fontWeight:'800',fontSize:'45px'}} variants={titleAnimate}><h1>#1<br/>Earwear<br/>Brand</h1>

                            </motion.div>
                            <motion.div variants={imageAnimate}><Image src="/main-img-2_720x.png" width={350} height={300} alt="image"/></motion.div>
                            <div>
                            <motion.p style={{fontSize:'18px'}} variants={paraAnimate}>Subscribe to email alerts. We promise not to spam your inbox.</motion.p>
                            <div>
                               <Flex  marginTop={5}> 
                               <motion.div  variants={paraAnimate}><Input border={'1px solid red'} borderColor={'#F58D91'} /></motion.div>
                                <Button background={'black'} color={'white'} as={motion.button} variants={paraAnimate}>subscribe</Button></Flex></div>
                            </div>
                        </Box>
                    </Flex>
                </Box>
            </Box>

            <Box textAlign={'center'} marginTop={10}><p>Indias fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, 
                smart watches, and home audio. From workouts to adventures, boAt will get you sailing!
                </p></Box>

        </Box>
        </>
    )
}

export default Vibe;