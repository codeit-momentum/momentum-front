import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonStyleProps {
  size: string;
  variant: string;
}

const sizeStyles = {
  sm: css`
    width: 13.5rem;
    height: 4.4rem;
    padding: 1.2rem 0;
  `,
  md: css`
    width: 18.8rem;
    height: 5.5rem;
    padding: 1.6rem 0;
  `,
  lg: css`
    width: 24rem;
    height: 5.5rem;
    padding: 1.6rem 0;
  `,
};

const variantStyles = (theme: Theme) => ({
  primary: css`
    background: ${theme.colors.brand.primary.default};
    color: ${theme.colors.surface.sunken};
  `,
  secondary: css`
    background: ${theme.colors.surface.lv3};
    color: ${theme.colors.content.secondary};
  `,
  danger: css`
    background: ${theme.colors.status.error};
    color: ${theme.colors.content.primary};
  `,
});

export const ButtonLayout = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ size }) => sizeStyles[size]}
  ${({ variant, theme }) => variantStyles(theme)[variant]}

  font-size: 2rem;
`;
