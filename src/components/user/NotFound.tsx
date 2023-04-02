import { Image  } from '@chakra-ui/react'
import EmptyUser from '../../assets/empty-user.svg'

const NotFound = () => {
  return (
    <>
      <div className='tw-text-center'>
        <div className='fcc'>
          <Image src={EmptyUser} height={'250px'} alt='Empty User' />
        </div>
        <div className='tw-mt-5'>

          <div className='tw-text-[18px] tw-font-medium tw-text-gray-800'>
            I'm sorry there's no username found
          </div>
          <div className='tw-text-[16px] tw-text-gray-600'>
            Please search github username in text input below
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;