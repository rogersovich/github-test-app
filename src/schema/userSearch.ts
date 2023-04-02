import * as Yup from 'yup';

interface FormValues {
  q: string;
}

export const userSchema = Yup.object<FormValues>({
  q: Yup.string()
    .required('Username is required'),
});
