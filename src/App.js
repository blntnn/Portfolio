import { VStack } from '@chakra-ui/react'
import About from './components/About'
import Profile from './components/Profile'
import Social from './components/Social'
import Header from './components/Header'

function App() {
  return (
    <VStack p={5}>
      <Header />
      <About />
      <Social />
      <Profile />
    </VStack>
  )
}

export default App
