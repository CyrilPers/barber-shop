import styled, { css } from "styled-components"
import { theme } from '../../theme'

export default function Button({ label, Icon, className, version = "default", onClick }) {
  return (
    <ButtonStyled className={className} version={version} onClick={onClick}>
      <span>{label}</span>
      <div className="icon">{Icon && Icon}</div>
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`

  ${({ version }) => extraStyle[version]}
`

const extraPrimaryStyle = css`
  cursor: pointer;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; 
  white-space: nowrap; 
  text-decoration: none;
  line-height: 1;

  padding: 18px 24px;
  border-radius: ${theme.borderRadius.midRound};
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: ${theme.colors.black};
  border: 1px solid ${theme.colors.lowBlack};

  &:hover {
    color: ${theme.colors.lowBlack};
    background-color: ${theme.colors.greyLight};
    border: 1px solid ${theme.colors.lowBlack};
    transition: all 200ms ease-out;
  }
  &:active {
    background-color: ${theme.colors.lowBlack};
    color: ${theme.colors.white};
  }

  &.is-disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
 `

const extraStyle = {
  default: extraPrimaryStyle,
}