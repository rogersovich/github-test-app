import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import { User } from '../../store/user/userTypes'
import store from '../../store';
import { onFetchReposUser } from '../../store/reposUser/reposApi';
import { useSelector } from 'react-redux';
import { selectedRepos, reposLoading } from '../../store/reposUser/reposSlice';
import { useState } from 'react';
import { TbStar, TbGitFork, TbEye } from "react-icons/tb";

interface Props {
  users: User[];
  querySearch: String
}

const UserList: React.FC<Props> = ({ users, querySearch }) => {

  const [username, setUsername] = useState('')

  const handleToggle = (user: string) => {
    if (user !== username) {
      setUsername(user)
      store.dispatch(onFetchReposUser(user))
    }
  }

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      const rounded = Math.round(num / 100) / 10;
      return rounded.toLocaleString() + "k";
    } else {
      return num.toLocaleString();
    }
  };

  const routeToGithub = (url: string) => {
    window.open(url, '_blank')
  }

  const repos = useSelector(selectedRepos);
  const isLoading = useSelector(reposLoading);

  return (
    <>
      <div>
        <div className='tw-py-4 bold tw-text-[20px]'>
          Search results from "{querySearch}"
        </div>
        <Accordion allowToggle>
          {
            users.map((user) => (
              <AccordionItem key={user.id} onClick={() => handleToggle(user.login)}>

                <AccordionButton className='tw-px-0'>
                  <Box as="span" flex='1' textAlign='left' className='tw-text-[22px] medium tw-text-[#FEB602]'>
                    {user.login}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} className='tw-px-0'>
                  {
                    !isLoading && repos.length > 0 ? (
                      <div className='grid-1 tw-gap-4'>
                        {repos.map((repo) => (
                          <div className='tw-bg-[#F1C148] tw-rounded tw-px-3 tw-py-3' key={repo.id}>
                            <div>
                              <div className='tw-text-[16px] tw-text-gray-900 hover:tw-underline hover:tw-cursor-pointer bold capital' onClick={() => routeToGithub(repo.html_url)}>
                                {repo.name}
                              </div>

                              <div className='tw-text-[14px] tw-text-gray-800 tw-mt-1 tw-mb-3'>
                                {repo.description === '' ? '-' : repo.description}
                              </div>
                              <div className='grid-12'>
                                <div className='tw-col-span-3'>
                                  <div className='fc tw-gap-2'>
                                    <TbStar size={'18px'} />
                                    <div>
                                      {formatNumber(repo.stargazers_count)}
                                    </div>
                                  </div>
                                </div>
                                <div className='tw-col-span-3'>
                                  <div className='fc tw-gap-2'>
                                    <TbGitFork size={'18px'} />
                                    <div>
                                      {formatNumber(repo.forks_count)}
                                    </div>
                                  </div>
                                </div>
                                <div className='tw-col-span-3'>
                                  <div className='fc tw-gap-2'>
                                    <TbEye size={'18px'} />
                                    <div>
                                      {formatNumber(repo.watchers_count)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (!isLoading && repos.length === 0 ? (
                      <div>data kosong</div>
                    ) : (
                      <div>
                        loading ....
                      </div>
                    ))
                  }
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