import { ComponentProps, ElementRef, forwardRef } from 'react'
import { TooltipContainer, TooltipText, TooltipWrapper} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  content: string;
  children: string;
}

export const Tooltip = forwardRef<ElementRef<typeof TooltipContainer>,TooltipProps>(({ content, children }: TooltipProps) =>
{
  return (
    <TooltipContainer>
      <TooltipWrapper>
        {children}
        <TooltipText>{content}</TooltipText>
      </TooltipWrapper>
    </TooltipContainer>
  )
}
)

Tooltip.displayName = 'Tooltip'