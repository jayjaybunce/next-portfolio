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

export const ProjectMe: FC<ModalProps> = ({ isOpen, onClose, onOpen }) => {
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
            <Heading>PROJECTME</Heading>
            <Text as="i" color="gray.400">
              Project 2 - General Assembly - Node/MongoDB/JavaScript/Jquery
            </Text>
            <Text>
              For some reason, I struggled in finding a great project to build
              when the time around. As I stared at my screen and the project
              requirements, I though of an ironic project idea. I can simply
              build an application where people can post their need for projects
              in a given category.
            </Text>
            <img src="https://i.imgur.com/tz1uezl.png" />
            <Text>
              The project requirements were very straightforward and I decided
              to get started early. The basis of the requirements was CRUD.
              Create, read, update and destroy a resource using the inferace
              within the application. The first resource I build CRUD
              functionality for was the 'Posts', and after finishing I decided
              I'd like for users to be able to comment on other posts, and even
              like posts and other users' comments.
            </Text>
            <img src="https://i.imgur.com/xHsll5B.png" />
            <Text>
              I finalized all CRUD functionality for the application with four
              days to sapre, which I used to polish up some navigation, CSS and
              add one more feature: the user profile. I wanted users to be able
              to view other profiles and see their recent activity. This was the
              most challending, as I had to pull multiple data sets and
              manipulate all of it to generate the activity report.
            </Text>
            <img src="https://i.imgur.com/TjsWdPG.png" />
            <Text>
              This project was an extremely fun and challenging process. During
              my work on ProjectMe I found a lvoe for developing features,
              testing, and hunting down bugs. Working on one feature gave me an
              idea on how to accomplish another feature. This was my second
              project, and my first working with a database.
            </Text>
            <Flex direction="row" gap={2}>
              <a href="https://github.com/jayjaybunce/project-me" target='_blank'>
                <img src="/images/github-icon.png" height="20" width="20" />
              </a>
              <a href="https://github.com/jayjaybunce/project-me" target='_blank'>
                View on GitGub
              </a>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
