import React from "react";
import { ProfileProvider } from "./core/providers/profile/profile.provider";
import { RouterComponent } from "./core/router/router.component";
import { OrganizationProvider } from "./core/providers/organization/organization.provider";

export const App = () => {
  return (
    <ProfileProvider>
      <OrganizationProvider>
        <RouterComponent />
      </OrganizationProvider>
    </ProfileProvider>
  );
};
