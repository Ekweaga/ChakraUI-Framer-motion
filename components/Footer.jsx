import React,{useState} from 'react'
import {Box,Flex,Container,Text,Button,Input} from "@chakra-ui/react"
import Image from "next/image"


function Footer(){
    return(
        <>
        <Box margin={'auto'} width={'80%'} padding={'20px'}>
            <Box>
                <Flex gap={{base:'50px',md:'150px'}} flexDirection={{base:'column',md:'row',lg:'row'}}>
                    <Box>
                        <h1 style={{fontWeight:'700'}}>Company</h1><br/>
                        <ul style={{listStyle:'none',fontSize:'13px',display:'flex',flexDirection:'column',gap:'9px'}}>
                            <li>True Wireless earbuds</li>
                            <li>Wireless Headphones</li>
                            <li>Wired Headphones</li>
                            <li>True Wireless Speakers</li>
                            <li>Home Audio</li>
                        </ul>
                    </Box>
                    <Box> <h1 style={{fontWeight:'700'}}>Help</h1><br/>
                        <ul style={{listStyle:'none',fontSize:'13px',display:'flex',flexDirection:'column',gap:'9px'}}>
                            <li>Track Your Order</li>
                            <li>Warranty & Support</li>
                            <li>Return Policy</li>
                            <li>Service Centers</li>
                            <li>Bulk Orders</li>
                            <li>FAQs</li>
                            <li>Why Buy Direct</li>
                        </ul></Box>
                    <Box>
                    <h1 style={{fontWeight:'700'}}>Shop</h1><br/>
                        <ul style={{listStyle:'none',fontSize:'13px',display:'flex',flexDirection:'column',gap:'9px'}}>
                            <li>About us</li>
                            <li>News</li>
                            <li>Read Our Blogs</li>
                            <li>Social Responsibility</li>
                            <li>Bulk Orders</li>
                           
                        </ul>
                    </Box>
                    <Box>
                        <Flex gap={5}><Image src="/Group 4.png" width={20} height={300} alt="icon"/><Image src="/Group 6.png" width={20} height={300} alt="icon"/><Image src="/Group 7.png" width={20} height={300} alt="icon"/><Image src="/Group 8.png" width={20} height={300} alt="icon"/></Flex>
                        <div><Image src="/Group 10.png" width={300} height={300} alt="icon"/></div>
                    </Box>
                </Flex>
            </Box>
<br/><br/><br/>
            <Box>
                <Flex gap={5}>
                <Image src="/Method=Amex.png" width={30} height={300} alt="icon"/><Image src="/Method=ApplePay.png" width={30} height={300} alt="icon"/><Image src="/Method=Mastercard.png" width={30} height={300} alt="icon"/><Image src="/Method=Stripe.png" width={30} height={300} alt="icon"/>
                <Image src="/Method=Visa.png" width={30} height={300} alt="icon"/>
                </Flex>
            </Box>
        </Box>
        </>
    )
}

export default Footer;