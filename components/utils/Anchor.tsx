import React, { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'a'> {
  url: string;
  label: string | JSX.Element;
  className?: string;
}

export const Anchor: React.FC<Props> = ({ label, url, className = '' }) => (
  <a href={url} className={`underline capitalize p-link ${className}`}>
    {label}
  </a>
);
