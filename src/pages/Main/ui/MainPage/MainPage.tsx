import { Button } from './../../../../shared/ui/Button/Button';
import * as S from './MainPage.style';

export function MainPage() {
  return (
    <S.MainPageLayout>
      <Button
        size="lg"
        variant="secondary"
        onClick={() => {
          alert('hi');
        }}
      >
        팔로우하러 가기
      </Button>
    </S.MainPageLayout>
  );
}
