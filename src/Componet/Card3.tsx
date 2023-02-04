import { Fragment } from 'react';
import { Container, Text, Stack, Avatar, Icon, Image, Box, Button, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton } from '@chakra-ui/react';
// Here we have used react-icons package for the icon
import { ImQuotesLeft } from 'react-icons/im';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import Footer from './Footer';

import Card from './Card' 
import Card3 from './Card3'

interface TestimonialAttributes {
 
  content: string;
  image: string;
}

const testimonials: TestimonialAttributes[] = [
  {
   
    image:
      'https://images.skynewsarabia.com/images/v1/2021/12/20/1487923/800/450/1-1487923.jpg',
    content:
      'Known for its traditional mud-brick architecture, Ad Diriyah is home to revitalized Al Bujairi, a pedestrianized maze of winding alleyways with cafes and craft shops.'
  }
];

const Testimonials = () => {
  return (
    <>

    
    <Container maxW="10x0" p={{ base: 5, md: 9 }} marginTop={20} marginBottom={80}>
      {testimonials.map((obj, index) => (
        <Fragment key={index}>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            bgGradient="linear(to-br, #FFFAF0, RGBA(0, 0, 0, 0.24))"
            spacing={{ base: 10, sm: 20 }}
            p={{ base: 4, sm: 10 }}
            rounded="lg"
            justify="center"
          >
            <Box width="50rem" pos="relative" >
              <Image
                
                pos="absolute"
                rounded="lg"
                src={obj.image}
                top="-3.8rem"
                boxShadow="lg"
              />
            </Box>
            
            <Stack direction="column" spacing={4} textAlign="left" maxW="4xl">
                <h1 className='attrTitele'>- Diriyah</h1>
              {/* <Icon as={ImQuotesLeft} w={10} h={10} color="red.700" /> */}
              <Text fontSize="md" fontWeight="medium">
                {obj.content}
              </Text>
              <Stack alignItems={{ base: 'center', sm: 'flex-start' }} spacing={0}>
                
                
                
                
              </Stack>
            </Stack>
          </Stack>
        </Fragment>
      ))}
      
    </Container>


        {/* <Card/>
        <Card3/>
    
      
   
        

    <Footer/> */}

    </>
           
        
  )
};





export default Testimonials;