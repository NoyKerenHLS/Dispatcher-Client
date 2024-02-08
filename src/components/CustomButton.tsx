import Button, { ButtonProps } from '@mui/material/Button';
import styled from 'styled-components';
import rightArrow from '../assets/rightArrow.svg'

const StyledButton = styled(Button)<{$backgroundColor?: string, $textColor?: string}>`
&& {
  background-color: ${props => props.$backgroundColor || "#0058B9"} ;
  border-radius: 20px;
  color: ${props => props.$textColor || "#ffffff"} ;
  font-family: roboto;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 14px;
}
`

const StyledImg = styled.img`
  padding-left: 10px;
`
interface Props extends ButtonProps{
  children: string;
  icon?: string;
  backgroundColor?: string;
  textColor?: string;
}

const CustomButton = ({children, icon, backgroundColor, textColor} : Props) => {
  return (
    <StyledButton variant="contained" $backgroundColor={backgroundColor} $textColor={textColor}>
      {children}
      <StyledImg src={icon ? icon : rightArrow}/>
    </StyledButton>
  )
}

export default CustomButton
