import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import Icon from '@chakra-ui/icon'
import { DiCodeigniter, DiAndroid, DiWebplatform } from 'react-icons/di'

function apps(pIcon, pBg, pText, pHover = 'purple.400', pColor = 'white') {
  return (
    <Flex
      color={pColor}
      rounded="10%"
      direction="column"
      bg={pBg}
      boxSize={{ base: '25vh', xl: '30vh' }}
      justify="flex-end"
      _hover={{ bg: pHover }}
    >
      <Icon p="1rem" as={pIcon} w="6rem" h="6rem" />
      <Text p="1rem" fontSize="xl" fontWeight="700">
        {pText}
      </Text>
    </Flex>
  )
}

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)')

  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      justifyContent={{ base: 'none', lg: 'center' }}
      alignItems={{ base: 'none', lg: 'center' }}
    >
      <Box>
        <Heading fontWeight="800" color="cyan.500" size="2xl">
          1+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Months of Experience
        </Text>
      </Box>
      <Box>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: '1rem' }}
          ml={{ lg: '1rem' }}
          mt="3rem"
        >
          {apps(DiAndroid, 'blue.400', 'Android Apps')}
          {apps(DiCodeigniter, 'gray.100', 'Flutter Apps', 'red.400', 'black')}
          {apps(DiWebplatform, 'gray.100', 'Web Apps', 'green.400', 'black')}
        </Flex>
      </Box>
    </Flex>
  )
}

export default Profile
