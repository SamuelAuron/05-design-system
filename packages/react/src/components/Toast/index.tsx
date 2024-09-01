import { ComponentProps, ElementRef, forwardRef } from 'react'
import { ToastContainer, ToastMessage, ToastDescription,CloseButton } from './styles'
import { X } from 'phosphor-react'

export function Toast(){
  return (
    <ToastContainer>
      <div>
        <ToastMessage>Agendamento realizado</ToastMessage>
        <ToastDescription>Quarta-feira, 23 de Outubro às 16h</ToastDescription>
      </div>
      <CloseButton>
        <X size={20}/>
      </CloseButton>
    </ToastContainer>
  )
}
  

Toast.displayName = 'Toast'