
import React, { Suspense, lazy } from 'react';
import { styled } from '@mui/material/styles';

const ApexChartLazy = lazy(() => import('react-apexcharts'));

export const Chart = styled(
  (props) => (
    <Suspense fallback={null}>
      <ApexChartLazy {...props} />
    </Suspense>
  )
)``;
