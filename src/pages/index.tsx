import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { Skills } from '../components/Skills'
import { Portfolio } from '../components/Portfolio'
import { AboutMe } from '../components/AboutMe'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Skills />
    <Portfolio />
    {/* <AboutMe /> */}
  </Container>
)

export default Index
