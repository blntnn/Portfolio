import { Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import { FaFacebookF, FaGoogle, FaInstagram, FaGithub } from 'react-icons/fa'

function Social() {
  const icons = [FaFacebookF, FaGoogle, FaInstagram, FaGithub]

  return (
    <Flex
      w={{ base: '100%', sm: '30rem' }}
      justify="space-between"
      pb={{ base: '3rem' }}
    >
      {icons.map(icon => (
        <Icon boxSize={{ base: '3rem' }} as={icon} key={icon} />
      ))}
    </Flex>
  )
}

export default Social
