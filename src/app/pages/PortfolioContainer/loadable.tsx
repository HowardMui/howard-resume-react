import { lazy } from 'react';

export const PortfolioContainer = lazy(() =>
  import('./index').then(module => ({ default: module => module })),
);

// export default PortfolioContainer;
