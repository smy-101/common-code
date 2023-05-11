import {useEffect, useRef} from 'react';

type Props = Record<string, unknown>;

export const useWhyDidYouUpdate = (name:string,props:Props) => {
  const previousProps = useRef<Props>({});

  useEffect(()=>{
    if (previousProps.current){
      const allKeys = Object.keys({...previousProps.current,...props});
      const changedProps: Props = {};

      allKeys.forEach((key) => {
        if (!Object.is(previousProps.current[key], props[key])) {
          changedProps[key] = {
            from: previousProps.current[key],
            to: props[key],
          };
        }
      });

      if (Object.keys(changedProps).length) {
        console.log(`${name}改变了`, changedProps);
      }
    }
    previousProps.current = props;
  })

}
