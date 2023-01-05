import React from 'react';
import { WorkCard } from '../cards/WorkCard';
import { AnchorButton } from '../utils/AnchorButton';

interface Props {}

export const Works: React.FC<Props> = () => {
  return (
    <div className='grid px-5 tablet:justify-items-center gap-14'>
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
      <AnchorButton
        href='https://github.com/andreachirico11'
        label='More of my work on Github ->'
        className='w-full px-0 tablet:w-fit tablet:px-10'
      />
    </div>
  );
};
