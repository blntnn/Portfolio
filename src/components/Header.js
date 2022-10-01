import { useColorMode } from '@chakra-ui/color-mode'
import { IconButton, Box, Flex, Heading } from '@chakra-ui/react'
import { FaSun, FaMoon, FaInstagram, FaGithub } from 'react-icons/fa'

function headerIcon(marLeft, pIcon, url, label) {
  return (
    <IconButton
      ml={marLeft}
      icon={pIcon}
      isRound="true"
      onClick={url}
      aria-label={label}
    />
  )
}

function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Flex w="100%" justifyContent="space-between">
      <Heading ml="2" size="md" fontWeight="700" color="cyan.400">
        portfolio
      </Heading>
      <Box>
        {headerIcon(
          2,
          <FaInstagram />,
          () => window.open('https://www.instagram.com/blntnn/'),
          'instagram'
        )}
        {headerIcon(
          2,
          <FaGithub />,
          () => window.open('https://www.github.com/blntnn/'),
          'github'
        )}
        {headerIcon(
          8,
          isDark ? <FaSun /> : <FaMoon />,
          toggleColorMode,
          'sunOrMoon'
        )}
      </Box>
    </Flex>
  )
}

export default Header
