import React,{useState} from "react";
import { Container,Box,Flex,Text } from "@chakra-ui/react";
import Image from "next/image"

export default function Features (){
    return(
        <>
      
            <Box width={'80%'} margin={'auto'} height={''} marginTop={{base:'50px'}}>
                <Flex gap={20} flexDirection={{base:'column',md:'row',lg:'row'}}>
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={'20px'} width={'300px'}>
                        <div>
                            <Image src="/badge 1.png" width={60} height={50} alt="badge"/>
                        </div>
                        <div>
                            <Text fontWeight={'700'} fontSize={'20px'}>1 Year<br/> Warranty</Text>
                        </div>
                    </Box>

                    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={'50px'} border={'1px solid red'} padding={3} width={'300px'} height={'100px'}>
                        <div>
                            <Image src="/return-box 1.png" width={60} height={50} alt="badge"/>
                        </div>
                        <div>
                            <Text fontWeight={'500'} fontSize={'15px'}>15 Days<br/> Easy Returns</Text>
                        </div>
                    </Box>

                    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={'50px'} width={'300px'}  border={'1px solid red'}>
                        <div>
                            <Image src="/delivery-man 1.png" width={60} height={50} alt="badge"/>
                        </div>
                        <div>
                            <Text fontWeight={'700'} fontSize={'20px'}>Free<br/> Shipping</Text>
                        </div>
                    </Box>


                </Flex>

            </Box>

      
        </>
    )
}