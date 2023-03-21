import { FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
  ModalContent,
  ModalBody,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";

export type ModalProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const BoardCentral: FC<ModalProps> = ({ isOpen, onClose, onOpen }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton size="lg" />
        <ModalBody>
          <Flex
            w="100%"
            direction="column"
            align="center"
            mt={10}
            gap={4}
            p={10}
            textAlign="center"
          >
            <Heading>BOARD CENTRAL</Heading>
            <Text as="i" color="gray.400">
              March 2021 - March 2023
            </Text>
            <Text as="i" color="gray.400">
              Typescript/React/GraphQL/Prisma/Strapi
            </Text>
            <Text>
              Board Central is a application where board members find themselves when they seek knowledge or have questions when it comes to the Cyber threat landscape. The product offered curated content on threat intelligence, the cyber threat landscape as well as benchmarks that outline a how any given users company compares with others. Board Central outlines a board's position in a dangerous landscape, and offers solutions on remedying these dangers.
            </Text>
            <Text>
              My work on Board Central is the most rewarding work I've yet to do. PwC first brought me on as a junior UI Developer, and as such I spent most of my time learning how to properly abstract functionality and components. I made it my effort to learn the where the line is on this practice. I began working on on implementing basic UI functionalities and features, building out forms with validation, error handling and trying to handle every edge case. 
            </Text>

            <Text>
              As time went on and I began to learn more and more, I started working on the backend - Strapi. Strapi is an opensource headless CMS. I was truly thrilled to be able to touch the entire stack. I had already built out full features on the front-end but wanted to build an entire feature end to end. 
            </Text>
            <Text>
              After getting started with Strapi, I wanted to keep going with my learning and around that time we converted to use NextJs on the frontend. At the time, we were rendering a lot of static pages and NextJS was the perfect fit to provide users a more ideal experience. 
            </Text>
            <Text>
              Not long after the conversion to NextJS, I was let loose to work on the entire stack. I was able to implement UI updates, develop features that covered the stack, and eventually implement Prisma. Prisma provides a generate Typescript client which allows for an incredible developer experience. We were previously using TypeORM, which types the schema but does not provide a fully typed client for working with a database. 
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
