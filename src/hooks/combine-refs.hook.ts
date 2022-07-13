import React from 'react';

export default function useCombinedRefs(...refs: any): React.RefObject<any> {
  const targetRef = React.useRef<React.RefObject<any>>();

  React.useEffect(() => {
    refs.forEach((ref: any) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}
