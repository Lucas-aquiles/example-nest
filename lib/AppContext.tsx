import {useRouter} from 'next/router';
import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {ConfigProps} from '../types';
import {MarketingKeysEnum} from '../types/enums';
import {camelCase} from './functions';

interface ContextProps {
  actionButton: (action?: string) => void;
  configData: ConfigProps;
  utmCampaingMKT: Record<string, string>;
}

interface AppProviderProps {
  children: ReactNode;
  configData: ConfigProps;
}

const AppContext = createContext({} as ContextProps);

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({children, configData}: AppProviderProps) => {
  const router = useRouter();
  const [utmCampaingMKT, setUtmCampaingMKT] = useState<Record<string, string>>({});

  const actionButton = (action: string = '/') => {
    if (action?.includes('http')) {
      window.open(action, '_blank', 'noopener,noreferrer');
    } else {
      router.push(action);
    }
  };

  useEffect(() => {
    const campaignMKT: Record<string, string> = {};
    Object.entries(router.query).forEach(([key, value]: any) => {
      if (Object.values(MarketingKeysEnum).includes(key)) campaignMKT[camelCase(key)] = value;
    });
    setUtmCampaingMKT({...campaignMKT});
  }, []);

  return (
    <AppContext.Provider
      value={{
        actionButton,
        configData,
        utmCampaingMKT,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
