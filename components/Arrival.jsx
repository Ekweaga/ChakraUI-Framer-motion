import React from 'react'
import {Box,Flex,Container,Text} from "@chakra-ui/react"
import { motion } from "framer-motion"
import Image from "next/image"

function Arrival() {

    const arrivals = [
        {
            image:"/main-img-2_720x (1).png",
            name:"",
            price:1200
        }, {
            image:"/main-img3_720x (1).png",
            name:"",
            price:1200
        }, {
            image:"/main-img_52a1902d-0994-4943-82e8-45a6549c2c90_720x 1.png",
            name:"",
            price:1200
        }
    ]
  return (
  <>
    <Box width={'80%'} margin={'auto'}>

        <Text fontWeight={'500'} fontSize={40}>Products Recommended For You</Text>
    </Box>
  </>
  )
}

export default Arrival