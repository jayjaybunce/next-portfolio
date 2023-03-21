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

export const Ktools: FC<ModalProps> = ({ isOpen, onClose, onOpen }) => {
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
            <Heading>KTOOLS</Heading>
            {/* <Text as="i" color="gray.400">
              March 2021 - March 2023
            </Text> */}
            <Text as="i" color="gray.400">
              Typescript/React/GraphQL/Prisma
            </Text>
            <Text>
              Ktools is passion project for me. Every 6 months, World of
              Warcraft releases a new raid with three difficulties (Normal,
              Heroic, Mythic), each raid is called a tier. Whenever this
              happens, guilds compete to complete the Mythic raid, while my
              guild isn't one of the best guilds in the world, we too play to
              complete the Mythic raid within the first few months. This takes
              20 players, months of commitment and several thousand hours of
              gameplay to achieve. To help with this burden, I created Ktools.
            </Text>
            <Text>
              Ktools allows a guild to track each players progress throghout a
              tier, aiming to provide a quick look at the entire raid team.
            </Text>
            <Text>
              Authontication is implemented using NextAuth, OAuth 2 and
              pre-build Battle.Net OAuth 2 provider. After logging in, a user
              can create a raid team, and then find characters for the players
              they want to track.
            </Text>
            <img src="https://i.imgur.com/qRZvM64.png" />
            <Text>
              After creating the raid team in Ktools, the user has access to
              track every characters progression, look at their gear and see
              everything the player has done in a given week to progress.
            </Text>
            <img src="https://imgur.com/9aaQPBU.png" />
            <Text>
              The data used to allow for this is pulled from two apis: Raider.IO
              and Warcraftlogs. While I have ideas for several new features,
              this project has already challenged me across the stack. From
              issues with standing up my own resrouces, to learning how to
              create a connection pool and use PGBouncer to limit connections
              when many users are active, I'll continue to improve Ktools.
            </Text>
            
            <Text>
              Planned Features:
              <br/>
              Discord Webook and bot, allowing a server to query a character name and get any characters progression for that raid team.
              <br/>
              Gear audit - provide information on Best-in-slot gear and enhancements
              <br/>
              Loadout audit - track players loadouts, ensure they are optimal
              <br/>
              Warcraft logs integration - data driven visualization built on real data, compare player loadouts to the best in the world
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
