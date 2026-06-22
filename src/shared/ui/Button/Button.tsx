import * as S from './Button.style.ts';

interface ButtonProps {
  size: 'sm' | 'md' | 'lg';
  variant: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ size, variant, onClick, children }: ButtonProps) {
  return (
    <S.ButtonLayout size={size} variant={variant} onClick={onClick}>
      {children}
    </S.ButtonLayout>
  );
}
