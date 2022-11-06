import React from 'react';
import { EmailForm } from '../forms/EmailForm';
import { TokenForm } from '../forms/TokenForm';

interface Props extends React.ComponentPropsWithoutRef<'section'> {}

export const Contacts: React.FC<Props> = () => (
  <>
    <TokenForm />
    <EmailForm />
  </>
);
