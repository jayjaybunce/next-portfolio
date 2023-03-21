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

export const Youtorial: FC<ModalProps> = ({ isOpen, onClose, onOpen }) => {
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
            <Heading>YOUTORIAL</Heading>
            <Text as="i" color="gray.400">
              Python/Django/PostgresQl
            </Text>
            <Text>
              Youtorial is a team built knowledge and skill sharing application.
              At the beginning of the project, we were paired into teams of
              three developers. After we decided on an application to build, we
              quickly planned out some basic features. the idea as to create a
              place where users could come and share their skills and knowledge.
              the user would write a tutorial and select a category.
            </Text>
            <img src="https://i.imgur.com/ZZQ3ht8.png" />
            <Text>
              The base CRUD of the application about half of the alloted time to
              complete. We spend the other week of our time polishing the
              styling and user experience of the application, and then had a few
              ideas on additional features.
            </Text>
            <img src="https://i.imgur.com/F4mXYX3.png" />
            <Text>
              Some of the extra features we build: 
              <br />
              Mark a tutorial as completed
              <br />
              Save a tutorial for later Upload a tutorial video via Amazon S3
              <br />
              Upload a profile picture via Amazon S3 View a users profile to see
              their posted tutorials, completed tutorials and saved tutorials
              <br />
              This project was by far my favorite to work on. The two gentlemen
              I worked with were just as passionate and driven to learn and grow
              as we worked on Youtorial
            </Text>
            <img src="https://i.imgur.com/FVOe67q.png" />
            <img src="https://i.imgur.com/nCFALd1.png" />

            <Flex direction="row" gap={2}>
              <a
                href="https://github.com/jayjaybunce/Youtorial"
                target="_blank"
              >
                <img src="/images/github-icon.png" height="20" width="20" />
              </a>
              <a
                href="https://github.com/jayjaybunce/Youtorial"
                target="_blank"
              >
                View on GitGub
              </a>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
