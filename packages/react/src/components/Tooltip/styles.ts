import { styled, keyframes } from '@stitches/react';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const TooltipContainer = styled('div', {
  position: 'relative',
  display: 'inline-block',
  width: 'fit-content',

  backgroundColor: '$gray600',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray600',

  fontFamily: '$default',
  fontSize: '$xl',
  color: '$white',
  fontWeight: '$bold',
});

export const TooltipText = styled('div', {
  visibility: 'hidden',

  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$medium',

  textAlign: 'center',
  position: 'absolute',
  zIndex: 1,
  bottom: '80%',
  left: '50%',
  transform: 'translate(-50%, -10px)',
  whiteSpace: 'nowrap',
  animation: `${fadeIn} 0.3s ease-in-out`,

  '&::after': {
    content: '""',
    position: 'absolute',
    top: '100%',
    left: '50%',
    marginLeft: '-5px',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: '$gray900 transparent transparent transparent',
  },
});

export const TooltipWrapper = styled('div', {
  
  '&:hover div': {
    visibility: 'visible',
  },
});
