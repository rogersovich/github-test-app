import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import { User } from '../../store/user/userTypes'

interface Props {
  users: User[];
  querySearch: String
}

const UserList: React.FC<Props> = ({ users, querySearch }) => {
  return (
    <>
      <div>
        <div className='tw-py-4 bold tw-text-[20px]'>
          Search results from "{querySearch}"
        </div>
        <Accordion allowToggle>
          {
            users.map((user) => (
              <AccordionItem key={user.id}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      {user.login}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </AccordionPanel>
              </AccordionItem>

            ))
          }
        </Accordion>
      </div>
    </>
  );
}

export default UserList;