import { createContext, ReactNode } from 'react';
import { Locale } from '../types/Locale';

interface IAppSettings {
  isCvProtected: boolean;
  production: boolean;
  availableLocales: Locale[] 
}

const initialStatus: IAppSettings = {
  isCvProtected: false,
  production: false,
  availableLocales: []
};

const AppSettingsContext = createContext(initialStatus);

const AppSettingsContextProvider: React.FC<{ appSettings: IAppSettings, children: ReactNode }> = ({appSettings, children }) => {
  return (
    <AppSettingsContext.Provider value={appSettings}>
        {children}
    </AppSettingsContext.Provider>
  );
};

export { AppSettingsContext, AppSettingsContextProvider };  export type { IAppSettings };

