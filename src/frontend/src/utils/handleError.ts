import toast from 'react-hot-toast';

import { AbstractException } from '@/services/handler/AbstractException';

interface TypeErrors {
  e: unknown;
}

export const handleError = ({ e }: TypeErrors) => {
  if (e instanceof AbstractException) {
    toast.error(e.describe());
  } else {
    console.log(e);
  }
};
