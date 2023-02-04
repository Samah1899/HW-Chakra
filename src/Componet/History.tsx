import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Box,Text, Grid, GridItem ,Image, Button,} from '@chakra-ui/react'
import { ExternalLink } from 'react-external-link';

import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';

function History() {
  return (
    <>
 

    
  <Image src='https://www.edarabia.com/ar/wp-content/uploads/2021/07/who-sons-king-abdul-aziz-order-learn-about-biography-founder-king-names-36-sons.jpg' w={'100%'} ></Image>
 
  




    <Card m={10}>
  <CardHeader >
    <Heading size='md' >History of Saudi Arabia</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        {/* <Heading size='xs' textTransform='uppercase'>
         
        </Heading> */}
        <Text pt='0' fontSize='sm'>
        Saudi Arabia traces its roots back to the earliest civilizations of the Arabian Peninsula. Over the centuries, the peninsula has played an important role in history as an ancient trade center and as the birthplace of Islam, one of the world’s major monotheistic religions.

Since King Abdulaziz Al-Saud established the modern Kingdom of Saudi Arabia in 1932, its transformation has been astonishing.

In a few short decades, the Kingdom has turned itself from a desert nation to a modern, sophisticated state and a major player on the international stage.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Geography of Saudi Arabia
        </Heading>
        <Text pt='5' fontSize='sm'>
       

Saudi Arabia, with an area of about 865,000 square miles, occupies the bulk of the Arabian peninsula. It is roughly one-third the size of the continental United States, and the same size as all of Western Europe
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        Vision 2030 Overview
        </Heading>
        <Text pt='5' fontSize='sm'>
        Under the leadership of the Custodian of the Two Holy Mosques, Vision 2030 was launched, a roadmap drawn up by His Royal Highness the Crown Prince, to harness the strengths God bestowed upon us – our strategic position, investment power and place at the center of Arab and Islamic worlds. The full attention of the Kingdom, and our Leadership, is on harnessing our potential to achieve our ambitions.
        <Stack direction='row' spacing={0} align='center'>
 
  
  
  <Button color={'#B7791F'} variant='link' marginTop={8} >
  
    <ExternalLink href="https://www.vision2030.gov.sa/v2030/overview/">
      <span>Read More :</span>
    </ExternalLink>
 
  </Button>
</Stack>

    
  
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card> 
    
    <Footer/>
    
    
    </>
  )
}

export default History