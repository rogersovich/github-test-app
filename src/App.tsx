import { Button, Image, Input, IconButton } from '@chakra-ui/react'
import EmptyUser from './assets/empty-user.svg'
import { TbBrandGithub } from "react-icons/tb";

function App() {

  return (
    <div>

      <div className='grid-12 tw-bg-[#FCF3E6] tw-min-h-screen tw-py-3'>
        <div className='xl:tw-col-start-5 xl:tw-col-span-4 tw-col-span-12'>
          <div className='tw-bg-[#FFF] tw-px-4 tw-py-5 tw-shadow tw-rounded tw-h-[100%] tw-relative fcc'>
            <div className='tw-absolute tw-z-20 tw-top-0 tw-left-0 tw-bg-[#F1C148] tw-w-full tw-px-4 tw-py-1.5 tw-shadow tw-rounded-md'>
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
            <div className='tw-w-full'>
              {/* no data handle */}
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
              {/* end */}
              <div className='tw-mt-8'>
                <Input placeholder='Search Github username here...' />
              </div>
            </div>
            <div className='tw-absolute tw-z-20 tw-bottom-0 tw-left-0 tw-bg-white tw-w-full tw-px-4 tw-py-3 tw-rounded-b-md'>

              <Button color={"#FFF"} bgColor={'#F1C148'} width={'full'}>Search User</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
