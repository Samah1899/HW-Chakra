import React from 'react'
import { ButtonGroup, Container, IconButton, Stack, Text,FormControl ,FormLabel,FormHelperText,Input} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
function Footer() {
  return (
    <>
      <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        {/* <Logo /> */}
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://www.linkedin.com/"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton as="a" href="https://github.com/Samah1899" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
          <IconButton
            as="a"
            href="https://twitter.com/"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText></FormHelperText>
</FormControl>
      </Text>
    </Stack>
  </Container>
    
    
    
    
    
    
    
    </>
  )
}

export default Footer