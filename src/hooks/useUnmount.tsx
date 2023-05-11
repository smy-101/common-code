import {useEffect} from 'react';

export const useUnmount = (func:()=>void) => {
  useEffect(() => {
    return func
  }, [func])
};
