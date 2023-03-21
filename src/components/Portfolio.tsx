import { FC } from "react";
import { Flex, Heading, Text, useDisclosure } from "@chakra-ui/react";
import { ModalProps, ProjectMe } from "./ModalContent/ProjectMe";
import { Solitaire } from "./ModalContent/Solitaire";
import { Youtorial } from "./ModalContent/Youtorial";
import { Notee } from "./ModalContent/Notee";
import { BoardCentral } from "./ModalContent/BoardCentral";
import { Ktools } from "./ModalContent/Ktools";

const bootcampProjects: PortfoliioCardProps[] = [
  {
    title: "ProjectMe",
    subtitle: "My first CRUD application",
    thumbnailUrl: "https://i.imgur.com/1kTdLzW.png",
    height: "222px",
    width: "350px",
    Modal: ProjectMe,
  },
  {
    title: "Solitaire in JavaScript",
    subtitle: "JavaScript, HTML, CSS",
    thumbnailUrl: "https://i.imgur.com/roTVQ9X.png",
    height: "227px",
    width: "350px",
    Modal: Solitaire
  },
  {
    title: "Youtorial",
    subtitle: "Django, Python, PostgresQL",
    thumbnailUrl: "https://i.imgur.com/P8pf0sf.jpg",
    height: "169px",
    width: "350px",
    Modal: Youtorial
  },
  {
    title: "Notee",
    subtitle: "React Native, MongoDB, Expo",
    thumbnailUrl: "https://i.imgur.com/fElAZYW.png",
    height: "622px",
    width: "350px",
    Modal: Notee
  },
];

const portfolio: PortfoliioCardProps[] = [
  {
    title: "Board Central",
    subtitle: 'Typescript/React/GraphQL/Prisma/Strapi',
    thumbnailUrl: '/images/boardcentral.png',
    height: '200px',
    width: '350px',
    Modal: BoardCentral
  },
  {
    title: 'Ktools',
    subtitle: 'Typescript/React/GraphQL/Prisma',
    thumbnailUrl: '/images/ktools.png',
    height: '200px',
    width: '350px',
    Modal: Ktools
  }
]


export const Portfolio: FC<{}> = () => {
  return (
    <Flex bg="#ebebeb" w="100%" p={10} direction="column" align="center" gap={10} id='portfolio'>
      <Heading>PORTFOLIO</Heading>
      <Flex
        w="1440px"
        wrap="wrap"
        gap={10}
        mt={10}
        align="center"
        justify="center"
      >
        {portfolio?.map((item) => {
          return <PortfoliioCard {...item} />
        })}
      </Flex>
      <Heading>BOOTCAMP PROJECTS</Heading>
      <Flex
        w="1440px"
        wrap="wrap"
        gap={10}
        mt={10}
        align="center"
        justify="center"
      >
        {bootcampProjects?.map((item) => {
          return <PortfoliioCard {...item} />;
        })}
      </Flex>
    </Flex>
  );
};
type PortfoliioCardProps = {
  title: string;
  thumbnailUrl: string;
  subtitle: string;
  height: string;
  width: string;
  Modal?: FC<ModalProps>
};

const PortfoliioCard: FC<PortfoliioCardProps> = ({
  title,
  subtitle,
  thumbnailUrl,
  height,
  width,
  Modal
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Flex
      w="350px"
      direction="column"
      align="center"
      justify="center"
      bg="white"
    >
      <Flex height="auto" width="350px" onClick={onOpen}>
        <img src={thumbnailUrl} height="auto" />
        <Flex
          position="absolute"
          bg="white"
          w={width}
          height={height}
          opacity={0}
          _hover={{ opacity: 0.9 }}
          align="center"
          justify="center"
          cursor='pointer'
          transition='0.2s ease all'
          
        >
          <img src="/images/view.png" width='30px' />

        </Flex>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <Heading fontSize={32}>{title}</Heading>
        <Text>{subtitle}</Text>
      </Flex>
    </Flex>
    {Modal ? <Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen} /> : <></>}
    </>
  );
};
