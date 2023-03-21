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

export const Solitaire: FC<ModalProps> = ({ isOpen, onClose, onOpen }) => {
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
            <Heading>SOLITAIREJS</Heading>
            <Text as="i" color="gray.400">
              JavaScript/HTML/CSS
            </Text>
            <Text>
              Ever since I learned some HTL and CSS in high school, I wanted to
              program some sort of game. Luckily, my first project at General
              Assembly would be a browser based game using JavaScript, HTML and
              CSS. the most challenging portion (and most fun) of this project
              was combining the logic os Solitaire with the DOM manipulation.
              Solitaire is a very visual game, getting the logic of the game to
              function in a way the player can understand was an awesome problem
              for me to solve! After working through all of the game logic, I
              added some customization for the user. The player can toggle
              between dark and ligh more, change card backs and even change the
              game board.
            </Text>
            <video autoPlay width={700} height={405}>
              <source src='/images/solitaire.mov' />
            </video>

            <Flex direction="row" gap={2}>
              <a href="https://github.com/jayjaybunce/Solitaire-JS" target='_blank'>
                <img src="/images/github-icon.png" height="20" width="20" />
              </a>
              <a href="https://github.com/jayjaybunce/Solitaire-JS" target='_blank'>
                View on GitGub
              </a>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
