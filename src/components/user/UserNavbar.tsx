import { IconButton } from '@chakra-ui/react'
import { TbBrandGithub } from "react-icons/tb";

const UserNavbar = () => {

  const routeToGithub = () => window.open('https://github.com/rogersovich', '_blank')

  return (
    <>
      <div className='navbar-card'>
        <div className='fcb'>
          <div className='medium tw-text-gray-800 tw-text-[18px]'>
            Dimas Roger Widianto
          </div>
          <div>
            <IconButton
              onClick={routeToGithub}
              aria-label='Github'
              variant={'ghost'}
              _focus={{ bgColor: '#F1C148' }}
              _hover={{ bgColor: '#F1C148' }}
              icon={<TbBrandGithub size='30px' />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserNavbar;