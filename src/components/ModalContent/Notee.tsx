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

export const Notee: FC<ModalProps> = ({ isOpen, onClose, onOpen }) => {
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
            <Heading>NOTEE</Heading>
            <Text as="i" color="gray.400">
              React Native/Node/Expo
            </Text>
            <Text>
              Along with building out a game, I had always wanted to build a mobilea pplication. During module three of my time at General Assebmly we were learning Python and Django. I knew we would be working with React in the coming weeks and I had asked if a React Native project would be allowed instead of a React project. After It got the go ahead, I began teaching myself React early. While my classmates learned React, I was able to spend my time learning React Native.
            </Text>
            <img src="https://i.imgur.com/pnNxvK6.png" />
            <Text>
              While the functionality in Notee is fairly elementary, I learned a lot about React, React Native, mobile development, Expo and asynchronous programming. Expo provides an incredible development environment for React Native.
            </Text>
            <Flex direction="row" gap={2}>
              <a href="https://github.com/jayjaybunce/blink" target='_blank'>
                <img src="/images/github-icon.png" height="20" width="20" />
              </a>
              <a href="https://github.com/jayjaybunce/blink" target='_blank'>
                View on GitGub
              </a>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
