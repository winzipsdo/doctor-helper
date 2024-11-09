import { createFileRoute } from '@tanstack/react-router';
import ApgarScore from '@/pages/apgar-score';

export const Route = createFileRoute('/apgar-score/')({
  component: ApgarScore,
});
