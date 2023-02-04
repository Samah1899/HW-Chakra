import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue ,
} from '@chakra-ui/react';

// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { RiFlashlightFill } from 'react-icons/ri';
import Footer from './Footer';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Our History', path: '/ourHistory' },
  { name: 'ATTRACTION IN SAUDI ARABIA', path: 'Attraction' }
];



export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4} bg={useColorModeValue('#FEEBC8', 'gray.800')} >
      <Flex h={20} alignItems="center" justifyContent="center" mx="auto" marginBottom={10} marginTop={3}>
        
      <h1 className='logo'> SaudiTourism </h1>
        <HStack spacing={8} alignItems="center">
          <HStack as="nav" spacing={20} textAlign={'center'}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}

            {/* Dropdown Menu */}
            <Menu autoSelect={false} isLazy>
              {({ isOpen, onClose }) => (
                <>
                  
                  
                    
                   
                  <MenuList
                    zIndex={5}
                    bg={useColorModeValue('rgb(255, 255, 255)', 'rgb(26, 32, 44)')}
                    border="none"
                    boxShadow={useColorModeValue(
                      '2px 4px 6px 2px rgba(160, 174, 192, 0.6)',
                      '2px 4px 6px 2px rgba(9, 17, 28, 0.6)'
                    )}
                  >
                   
                  </MenuList>
                </>
              )}
            </Menu>
          </HStack>
        </HStack>

        
      
      </Flex>

      {/* Mobile Screen Links */}
      {/* {isOpen ? (
        <Box pb={4}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
            
            
          </Stack>
        </Box> */}
      {/* ) : null} */}
    </Box>
  );
}

// NavLink Component
interface NavLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = ({ name, path, onClose }: NavLinkProps) => {
  return (
    <Link
      href={path}
      lineHeight="inherit"
      _hover={{
        textDecoration: 'none',
        color: useColorModeValue('blue.500', 'blue.200')
      }}
      onClick={() => onClose()}
    >
      {name}
    </Link>
  );
};

// Dropdown MenuLink Component
interface MenuLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}


const MenuLink = ({ name, path, onClose }: MenuLinkProps) => {
  return (
    <Link href={path} onClick={() => onClose()}>
      <MenuItem _hover={{ color: 'blue.400', bg: useColorModeValue('gray.200', 'gray.700') }}>
        <Text>{name}</Text>
      </MenuItem>
    </Link>
    
  );
  
};




// import React from 'react'
// import {
//   Avatar,
//     Box,
//     Button,
//     ButtonGroup,
//     Container,
//     Flex,
//     HStack,
//     IconButton,
    
//     Tag,
//     TagLabel,
//     useBreakpointValue,
//   } from '@chakra-ui/react'
//   import { FiMenu } from 'react-icons/fi'
//   import { Link } from 'react-router-dom';

// function Nav() {
//     const isDesktop = useBreakpointValue({ base: false, lg: true })
//   return (
//     <>
    
//     {/* <Link to ='/OurHistory'></Link> */}
   
//     <Box as="section" pb={{ base: '12', md: '10' }}>
    

//       <Box as="nav" boxShadow="sm" bg="#FEEBC8" >
      
//         <Container py={{ base: '4', lg: '8' }}>
//           <HStack spacing="10" justify="space-between">
          
            
//             {isDesktop ? ( 
//               <Flex justify="space-between" flex="0">
                
//                 <ButtonGroup variant="link" spacing= '20'>
                
//                   <h1 className='logo'> SaudiTourism </h1>
//                   {["Home"," History","ATTRACTION IN SAUDI ARABIA"].map((item) => (
//                     <Button key={item}>{item}</Button>
//                   ))}
//                 </ButtonGroup>

//                 {/* <HStack spacing="3">
//                   <Button variant="ghost">Sign in</Button>
//                   <Button variant="primary">Sign up</Button>
//                 </HStack> */}
//               </Flex>
//             ) : (
//               <IconButton
//                 variant="ghost"
//                 icon={<FiMenu fontSize="1.25rem" />}
//                 aria-label="Open Menu"
//               />
//             )}
//           </HStack>
//         </Container>
//       </Box>
//     </Box>
//     {/* <Link element={History} /> */}
//     <Link to='/ourHistory'>ggggg</Link>
    
//     </>
//   )
// }

// export default Nav