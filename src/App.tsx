import NotFound from './components/user/NotFound';
import UserNavbar from './components/user/UserNavbar';
import UserFooter from './components/user/UserFooter';
import UserList from './components/user/UserList';
import SkeletonParagraph from './components/SkeletonParagraph'
import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react';
// form
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { userSchema } from './schema/userSearch';;
// store
import { RootState } from './store';
import { useSelector } from "react-redux";
import { onFetchUsers } from './store/user/userApi';
import { unsetError, setQuerySearch } from './store/user/userSlice';
import { FormData } from './store/user/userTypes';
import store from './store';
// api;
import LoadingOverlay from './components/LoadingOverlay';

function App() {
  const { users, isLoading, error, querySearch } = useSelector((state: RootState) => state.user);

  const toast = useToast()

  const initialValues: FormData = {
    q: "",
  }

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: initialValues,
    resolver: yupResolver(userSchema),
  })

  const value = watch("q");
  const params = {
    q: value,
    per_page: 5
  }

  useEffect(() => {

    if (isLoading) {
      store.dispatch(onFetchUsers(params))
      store.dispatch(setQuerySearch(value)) 
      // reset()
    }

    if (error) {
      toast({
        title: 'Im Sorry',
        description: error,
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top'
      })
      store.dispatch(unsetError())
    }
  }, [isLoading, error])

  return (
    <div>
      {isLoading && (
        <LoadingOverlay isLoading={isLoading} />
      )}
      <div className='container'>
        <div className='container-content'>
          <div className={`card ${!isLoading && users.length === 0 ? 'fcc' : 'tw-pt-16'}`}>
            <UserNavbar />
            <div className='tw-w-full'>
              {
                !isLoading && users.length > 0 ? (
                  <UserList users={users} querySearch={querySearch} />
                ) : !isLoading && users.length === 0 ? (
                  <NotFound />
                ) : (
                  <div>
                    <div className="grid-1 tw-gap-4">
                      {[...Array(4)].map((x, i) => (
                        <div key={i} className="tw-col-span-1">
                          <SkeletonParagraph />
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }
            </div>
            <UserFooter watch={watch} initialValues={initialValues} register={register} errors={errors} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
