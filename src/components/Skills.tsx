import { FC } from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

const skills = [
  {
    label: 'JavaScript',
    path: '/js.png'
  },
  {
    label: 'Typescript',
    path: '/typescript.png'
  },
  {
    label: 'NODE',
    path: '/node-js.png'
  },
  {
    label: 'React',
    path: '/physics.png'
  },
  {
    label: 'Python',
    path: '/python.png'
  },
  {
    label: 'Django',
    path: '/python.png'
  },
  {
    label: 'CSS',
    path: '/css-3.png'
  },
  {
    label: 'OAuth',
    path: '/right.png'
  },
  {
    label: 'MongoDB',
    path: '/database2.png'
  },
  {
    label: 'PostgesQL',
    path: '/database.png'
  },
  {
    label: 'NextJS',
    path: '/right.png'
  },
  {
    label: 'HTML',
    path: '/html.png'
  },
  {
    label: 'Prisma',
    path: '/right.png'
  },
  {
    label: 'GraphQL',
    path: '/right.png'
  },
  {
    label: 'React Native',
    path: '/physics.png'
  },
  {
    label: 'Gaming',
    path: '/right.png'
  },
]



export const Skills: FC<{}> = ({}) => {
  return (
    <Flex bg='white' w='100%' justify='center' id='skills' scrollBehavior='smooth'>
    <Flex w='800px' align='center' justify='center' p={10} direction='column'>
      <Heading>
        SKILLS
      </Heading>
      <Flex wrap='wrap' gap={12}>
        {skills?.map((item) => {
          return (
            <Flex key={item.label} direction='column' gap={8} align='center' justify='center' mt={10}>
              <Image height='75' width='75' src={`/images${item.path}`} alt={`skills - ${item.label}`}/>
              <Text fontSize={26}>{item.label}</Text>
            </Flex>
          )
        })}
      </Flex>
    </Flex>
    </Flex>
  )
}