import React,{useState,useEffect} from 'react'
import { Container,Flex,Box,Text } from '@chakra-ui/react'
import Image from 'next/image'
import { motion } from 'framer-motion'


export default function Header(){
    const [count,setCount]=useState(0)
    const countChange = (value)=>{
        if(count < 2){
            setCount(count + value)
        }

        else{
            setCount(0)
        }
   
    }
            const Images = [
                {
                    image:'/main-img_52a1902d-0994-4943-82e8-45a6549c2c90_720x 1.png'
                },
                {
                    image:'/main-img-2_720x (1).png'
                },
                {
                    image:'/main-img3_720x (1).png'
                }
            ]
 const ImageContainer = ()=>{
  
        return(
            <>
            <Box as={motion.div} initial={{opacity:0,x:300}} animate={{opacity:1,x:0}} transition={{duration:0.5}}>
              <Image src={Images[count].image} width={500} height={100} alt="logo"/>
            </Box>
            </>
        )
    }
    useEffect(()=>{
        <ImageContainer/>
    },[count])
    return(
        <>
        <Container position={'relative'} height={''}>

            <Text as={'h1'} fontWeight={'900'} fontSize={{base:'80px',md:'120px'}} color={'#EDEDED'}  position={'absolute'} top={42} right={{base:20,md:-10,lg:-10}}>Sound</Text>
         

            <Box position={'relative'} style={{zIndex:2222}}>
            <ImageContainer/>
            <Box position={'absolute'} top={{base:10,md:150}} left={{base:3,md:-60,lg:-60}} display={{base:'block',md:'block',lg:'block'}}>
                <Text fontWeight={'500'} fontSize={'40px'} zIndex={{base:33}} >Amazing <br/>sound quality.</Text>
            </Box>
            <Box position={'absolute'} bottom={10} right={{base:0,md:-40}} display={{base:'block',md:'block',lg:'block'}}>
                <Text fontWeight={'500'} fontSize={'40px'} zIndex={{base:33}}>Superior<br/>headphones.</Text>
            </Box>
            <Box position={'absolute'} bottom={{ base:-20,md:50}} left={{base:-5,md:-250,lg:-250}}>
                <Flex gap={{base:'20px',md:'0px'}} flexDirection={{base:'column',md:'row',lg:'row'}}>
                <Box onClick={()=>setCount(0)} style={{cursor:'pointer'}}  height={'60px'} > <Image src="/main-img_52a1902d-0994-4943-82e8-45a6549c2c90_720x 1.png" width={80} height={100} alt="logo" margin-top={'-60px'} style={{marginTop:'-35px',transform:'rotateX(30deg)'}}/></Box>
                    <Box onClick={()=>setCount(1)} style={{cursor:'pointer'}}  height={'60px'} width={''}> <Image src="/main-img-2_720x.png" width={100} height={100} alt="logo" style={{marginTop:'-35px'}}/></Box>
                    <Box onClick={()=>setCount(2)} style={{cursor:'pointer'}}   height={'60px'}> <Image src="/main-img3_720x.png" width={100} height={100} alt="logo" style={{marginTop:'-35px'}}/></Box>
                   

                </Flex>
            </Box>
            </Box>

        </Container>
        </>
    )
}