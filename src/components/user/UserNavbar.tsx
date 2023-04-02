import { IconButton } from '@chakra-ui/react'
import { TbBrandGithub } from "react-icons/tb";

const UserNavbar = () => {
  return (
    <>
      <div className='navbar-card'>
        <div className='fcb'>
          <div className='medium tw-text-gray-800 tw-text-[18px]'>
            Dimas Roger Widianto
          </div>
          <div>
            <IconButton
              aria-label='Github'
              variant={'ghost'}
              icon={<TbBrandGithub size='30px' />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserNavbar;