import React from 'react';
import { Button } from '@chakra-ui/react'
import CsInput from '../CsInput';
// form
import { userSchema } from '../../schema/userSearch';
import { FormData } from '../../store/user/userTypes';
import { UseFormWatch, UseFormRegister, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';
// api
import store from '../../store';
import { getUsersStart } from '../../store/user/userSlice';

interface Props {
  watch: UseFormWatch<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData>;
  initialValues: FormData;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;

}

const UserFooter: React.FC<Props> = ({ watch, handleSubmit, initialValues, register, errors }) => {
  const onSubmit = () => {
    store.dispatch(getUsersStart())
  }
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const value = watch("q");
      userSchema.validate({ q: value })
        .then(() => handleSubmit)
        .catch(() => { })
    }
  }

  return (
    <>
      <div className='footer-card'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='tw-mb-3'>
            <CsInput
              label="Input"
              placeholder='Search Github username here...'
              defaultValue={initialValues.q}
              name='q'
              register={register}
              errors={errors.q}
              onKeyUp={handleKeyPress}
            ></CsInput>
          </div>
          <Button color={"#FFF"} bgColor={'#F1C148'} width={'full'} type="submit" _hover={{ bg: '#F1C148' }}>Search User</Button>
        </form>
      </div>
    </>
  );
}

export default UserFooter;