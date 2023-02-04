import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import Footer from './Footer';
import Attraction from './Attraction';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Our Heritage Is Our History' ,
      text:
        "You Are Always Welcome.",
      image:
        '  https://www.visitsaudi.com/content/dam/saudi-tourism/media/highlights/a129/brand-page-hero.jpg',
    },
    {
      title: 'Our Heritage Is Our History',
      text:
        "You Are Always Welcome.",
      image:
        'https://zamzam-blog.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/05/Madain-Saleh.jpg',
    },
    {
      title: 'Our Heritage Is Our History',
      text:
        "You Are Always Welcome.",
      image:
        'https://amayei.nyc3.digitaloceanspaces.com/2018/10/saudi-arabia.jpg',
    },
  ];



  return (
   
    <><><Box
      position={'relative'}
      height={'800px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="30px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            // height={'6xl'}
            position="relative"
            m="5px"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '3xl' }} color='#FEEBC8'>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'sm', lg: 'lg' }} color="#FFFAF0">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box><Container maxW='8xl' bg='#B7791F ' centerContent marginBottom={25}>
        <Box padding='100' bg='#FBD38D' color='black' maxW='' margin={9} fontSize={20} fontFamily={'Georgia'}>
          Saudi Arabia is widely seen as the final frontier of tourism. As the birthplace of Islam, and a millennia-old crossroads of pilgrims and traders, the Kingdom’s rich culture and diverse heritage has no equal. In September 2019, Saudi Arabia opened its doors to the world for the first time. The launch of the Kingdom’s tourism visa saw visitors from around the globe flock to explore Saudi’s ancient history, striking landscapes, and warm hospitality. Last year, Saudi Arabia welcomed 67 million visitors, a sure sign that Vision 2030 is shaping the future of the Kingdom’s travel and tourism sector.
        </Box>
      </Container></><Footer />
      
      </>
      
  );
}