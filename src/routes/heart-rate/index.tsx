import { createFileRoute } from '@tanstack/react-router';
import HeartRateReferencePage from '@/pages/heart-rate';
export const Route = createFileRoute('/heart-rate/')({
  component: HeartRateReferencePage,
});
