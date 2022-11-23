import React from 'react';
import { WorkCard } from '../cards/WorkCard';
import { AnchorButton } from '../utils/AnchorButton';

interface Props {}

export const Works: React.FC<Props> = () => {
  return (
    <>
      <WorkCard
        title='students manager'
        description='A full-stack web app for managing students lessons, print receipts and so on...'
        github='https://github.com/andreachirico11/Students_Manager'
        website='https://studentsmanager.netlify.app/'
        src='/assets/demo-students.png'
      />
      <WorkCard
        title='eredi casassa'
        description='A nice shop website, with an old marine flavour'
        github='https://github.com/andreachirico11/Eredi-Casassa'
        website='https://www.eredicasassa.com/'
        src='/assets/demo-casassa.png'
      />
      <WorkCard
        title='my portfolio'
        description='Who says that portfolios are always static websites? This one has backend too'
        github='https://github.com/andreachirico11/portfolio'
        website='https://www.andreachirico.com/'
        src='/assets/demo-portfolio.png'
      />
      <AnchorButton
        href='https://github.com/andreachirico11'
        label='And many more on my Github page'
      />
    </>
  );
};
