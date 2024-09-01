import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'self-start',
  justifyContent: 'space-between',
})

export const ToastMessage = styled('span', {
  fontFamily: '$default',
  fontSize: '$xl',
  color: '$white',
  fontWeight: '$bold',
})

export const ToastDescription = styled('p', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
  fontWeight: '$regular',
})

export const CloseButton = styled('button',{
  all: 'unset',
  color: '$gray200',
  cursor: 'pointer',

  '&:hover': {
    color: '$white',
  }
})