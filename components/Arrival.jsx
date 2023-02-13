import React from 'react'
import {Box,Flex,Container,Text} from "@chakra-ui/react"
import { motion } from "framer-motion"
import Image from "next/image"

function Arrival() {

    const arrivalboxAnimate = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                staggerChildren:0.35,
                when:"beforeChildren",
                
            }

        }
    }

    const arrivalAnimate ={
        hidden:{
            opacity:0,
            x:50,
           
        },
        visible:{
            opacity:1,
            x:0,
           
            transition:{
                duration:0.7
            }
        },
        viewport:{
            amount:1
        }
    }

    const priceAnimate = {
        hidden:{
            opacity:0,
           x:-50
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:0.6
            }
        }
    }

    const arrivals = [
        {
            image:"/main-img3_720x (1).png",
            name:"Rockerz 550",
            price:899.00,
            background:'#868686'
        }

        ,{
            image:"/main-img_52a1902d-0994-4943-82e8-45a6549c2c90_720x 1.png",
            name:"Rockerz 450 Pro",
            price:599.00,
            background:'#D9D2C3'
        },
        {
            image:"/main-img-2_720x (1).png",
            name:"Rockerz 650",
            price:999.00,
            background:'#CBECF1'
        }
    ]
  return (
  <>
    <Box width={'80%'} margin={'auto'} >

        <Text fontWeight={'500'} fontSize={40}>Products Recommended For You</Text>


        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={'100px'} marginTop={'70px'} as={motion.div} variants={arrivalboxAnimate} initial="hidden" whileInView="visible">
            {
                arrivals.map((item,index)=>{
                    return(
                        <Box key={index} >
                            <Box width={250} height={200} style={{background:`${item.background}`}}>
                                <Box position={'relative'} as={motion.div} variants={arrivalAnimate}>
                                    <div style={{position:'absolute',top:'-50px',left:'10px'}} >
                                    <Image src={item.image} width={250} height={200} alt="icon" />
                                    </div>
                               </Box>
                            </Box>
                            <Box marginTop={15} as={motion.div} variants={priceAnimate}>
                                <motion.div><Text as={'h1'} fontWeight={500} fontSize={25}>{item.name}</Text></motion.div>
                                <motion.div><Text as={'h3'} fontWeight={'bold'} fontSize={15} color={'#ED1C24'}>${item.price}.00</Text></motion.div>
                            </Box>

                            </Box>
                    )
                })
            }
        </Box>
    </Box>
  </>
  )
}

export default Arrival