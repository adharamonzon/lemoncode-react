import React from 'react';

interface Props {
  children: React.ReactNode;
}
interface OrganizationName {
  organizationName: string,
  setOrganizationName: (organizationName: string) => void
}
export const OrganizationContext = React.createContext<OrganizationName>({organizationName: '', setOrganizationName: (organizationName) => {}})

export const OrganizationProvider: React.FC<Props> = ({ children }) => {
  const [organizationName, setOrganizationName] = React.useState('lemoncode');

  return (
    <OrganizationContext.Provider 
      value={{ organizationName, setOrganizationName }}>
      {children}
    </OrganizationContext.Provider>
  )
}