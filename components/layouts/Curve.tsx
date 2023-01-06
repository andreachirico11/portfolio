import React from 'react';
import { AvailableColors } from '../../enums';
import { getColorValue } from '../../types/Colors';

interface Props {
  colorId: AvailableColors;
}

export const Curve: React.FC<Props> = ({ colorId }) => {
  const xlDesktopCurve = (fill: string) => (
    <svg
      key='0'
      className='absolute bottom-0 hidden xlDesktop:block'
      xmlns='http://www.w3.org/2000/svg'
      width='5102'
      height='1586'
      viewBox='0 0 5102 1000'
      fill='none'
    >
      <path
        d='M0 553.21C0 553.21 709.679 1654.65 1369.06 697.304C2028.45 -260.041 2887.06 46.8306 2887.06 46.8306V1585.03H0V553.21Z'
        fill={fill}
      />
      <path
        d='M5102 553.21C5102 553.21 4392.32 1654.65 3732.94 697.304C3073.55 -260.041 2214.94 46.8306 2214.94 46.8306V1585.03H5102V553.21Z'
        fill={fill}
      />
    </svg>
  );

  const desktopCurve = (fill: string) => (
    <svg
      key='1'
      className='absolute bottom-0 hidden desktop:block xlDesktop:hidden'
      xmlns='http://www.w3.org/2000/svg'
      width='3480'
      height='1100'
      viewBox='0 0 3480 1100'
      fill='none'
    >
      <path
        d='M0 383.923C0 383.923 484.062 1148.31 933.817 483.923C1383.57 -180.466 1969.22 32.5 1969.22 32.5V1100H0V383.923Z'
        fill={fill}
      />
      <path
        d='M3480 383.923C3480 383.923 2995.94 1148.31 2546.18 483.923C2096.43 -180.466 1510.78 32.5 1510.78 32.5V1100H3480V383.923Z'
        fill={fill}
      />
    </svg>
  );

  const tabletCurve = (fill: string) => (
    <svg
      key='2'
      className='absolute bottom-0 hidden tablet:block desktop:hidden '
      xmlns='http://www.w3.org/2000/svg'
      width='2128'
      height='692'
      viewBox='0 0 2128 692'
      fill='none'
    >
      <path
        d='M0 241.522C0 241.522 294.976 722.393 569.048 304.432C843.119 -113.53 1200 20.4455 1200 20.4455V692H0V241.522Z'
        fill={fill}
      />
      <path
        d='M2128 241.522C2128 241.522 1833.02 722.393 1558.95 304.432C1284.88 -113.53 928 20.4455 928 20.4455V692H2128V241.522Z'
        fill={fill}
      />
    </svg>
  );

  const mobileCurve = (fill: string) => (
    <svg
      key='3'
      className='absolute bottom-0 tablet:hidden desktop:hidden '
      xmlns='http://www.w3.org/2000/svg'
      width='1322'
      height='692'
      viewBox='0 0 1322 692'
      fill='none'
    >
      <path
        d='M0 241.522C0 241.522 182.885 722.393 352.81 304.432C522.734 -113.53 744 20.4455 744 20.4455V692H0V241.522Z'
        fill={fill}
      />
      <path
        d='M1322 241.522C1322 241.522 1139.11 722.393 969.19 304.432C799.266 -113.53 578 20.4455 578 20.4455V692H1322V241.522Z'
        fill={fill}
      />
    </svg>
  );
  const fill = getColorValue(colorId);
  return <>{[xlDesktopCurve(fill), desktopCurve(fill), tabletCurve(fill), mobileCurve(fill)]}</>;
};
