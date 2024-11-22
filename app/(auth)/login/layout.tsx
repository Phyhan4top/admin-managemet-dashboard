import AuthTemplate from '@component/templates/AuthTemplate';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return <AuthTemplate title="Admim Login">{children}</AuthTemplate>;
}
