import { Button } from './../../../../shared/ui/Button/Button';
import * as S from './MainPage.style';

export function MainPage() {
  return (
    <S.MainPageLayout>
      <Button
        size="sm"
        variant="primary"
        onClick={() => {
          alert('hi');
        }}
      >
        버튼
      </Button>
    </S.MainPageLayout>
  );
}
