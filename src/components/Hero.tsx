import { FC, useEffect, useState } from "react";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from 'next/link'



const useScrollTo = (id: string) => {
  if(typeof window !== 'undefined'){
    const elementToScrollToo = document.querySelector(`#${id}`)
    console.log(elementToScrollToo)
    if(elementToScrollToo){
      return () => elementToScrollToo.scrollIntoView({ behavior: 'smooth'})
    }
  }
}



const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) ) + min
}

export const Hero: FC<{}> = () => {
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  })

  const [buttonLeft, setButtonLeft] = useState(0)
  const [buttonTop, setButtonTop] = useState(0)
  const [containerRects, setContainerRects] = useState(null)

  let buttonel: HTMLButtonElement | null
  if(typeof window !== 'undefined'){
    buttonel = document.querySelector('#learnMore')
  }

  useEffect(() => {
    if(typeof window !== 'undefined'){
      setContainerRects(document.querySelector('#buttonContainer'))
    }
  },[])

  return (
  <Flex direction="column" w="100%" backgroundImage="/images/bg.jpeg">
    <Flex
      w="100%"
      justify="ceter"
      backgroundImage="/images/bg.jpg"
      p={10}
      align="center"
      direction="column"
    >
      <Flex w="1440px" color="white" fontSize="20px" justify="space-between">
        <Flex align='center' gap={8}>
        <Text fontFamily="Montserrat" color="#540600" fontSize="30px">
          Fullstack Software Engineer
        </Text>
        </Flex>
        <Flex align='center' justify='center'>
          <HeaderLink label="SKILLS" id='skills'/>
          <HeaderLink label="PORTFOLIO" id='portfolio'/>
          <Flex gap={4} ml={2}>
          <Link href='mailto:jayjaybunce@gmail.com'>
          <Image src='/images/gmail-icon.png' height='20' width='20' alt='email janson'/>
        </Link>
        <Link href='https://github.com/jayjaybunce' target='_blank'>
          <Image src='/images/github-icon.png' height='20' width='20' alt='email janson'/>
        </Link>
        </Flex>
        </Flex>
      </Flex>
    </Flex>
    <Flex w="100%" align="center">
      <Image
        src="/images/me.png"
        height="800"
        width="400"
        alt="Janson portrait"
      />
      <Flex direction="column">
        <Heading as="i" color="black">
          Hi, <br /> I'm Janson
        </Heading>
        <Text color="black" fontSize="24px" maxW="700px" mt={4}>
          Detail oriented, passionate, dedicated developer focused on creating
          engaging user experiences, optimized processes and quality software.
        </Text>
        <Link href="#skills">
          <Button
            id='learnMore'
            bg="#540600"
            w="min-content"
            color="white"
            transition='0.2s ease all'
            _hover={{
              bg: "white",
              color: "#540600",
            }}
          >
            LEARN MORE
          </Button>
          </Link>
      </Flex>
        <Flex w="50%" id='buttonContainer' height='400px'>
          <Button
            id='learnMore'
            bg="#540600"
            w="min-content"
            color="white"
            transition='0.2s ease all'
            left={buttonLeft}
            top={buttonTop}
            position={buttonLeft === 0 ? 'relative': 'absolute'}
            onMouseEnter={() => {
              if(typeof window !== 'undefined'){
                const bounds = containerRects.getClientRects()
                const newLeft =  getRandomNumber(bounds[0].left, bounds[0].right)
                const newTop = getRandomNumber(bounds[0].top, bounds[0].bottom)
                setButtonLeft(newLeft)
                setButtonTop(newTop)
              }
            }}
            _hover={{
              bg: "white",
              color: "#540600",
            }}
          >
            Catch Me
          </Button>
        </Flex>

    </Flex>
  </Flex>
)};

type HeaderLinkProps = {
  label: string;
 id: string
};

const HeaderLink: FC<HeaderLinkProps> = ({ label, id }) => {
  return (
    <Link href={`#${id}`} scroll={false} style={{ scrollBehavior: 'smooth'}}>
    <Flex
      mx={2}
      _hover={{
        color: "#540600",
      }}
      cursor="pointer"
      color='black'
    >
      {label}
    </Flex>
    </Link>

  );
};
