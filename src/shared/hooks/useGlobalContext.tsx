import { createContext, useContext, useState } from 'react';
import { User } from '../../modules/login/types/User';

export enum NotificationTypeEnum {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}
export type NotificationType = keyof typeof NotificationTypeEnum;

interface NotificationProps {
  message: string;
  type: NotificationTypeEnum;
  description?: string;
}

interface GlobalData {
  notification?: NotificationProps;
  user?: User;
}

interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}
const GlobalContext = createContext({} as GlobalContextProps);
interface GlobalProviderProps {
  children: React.ReactNode;
}
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});
  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const setNotification = (message: string, type: NotificationTypeEnum, description?: string) => {
    setGlobalData({
      ...globalData,
      notification: {
        message,
        type,
        description,
      },
    });
  };

  const setUser = (user: User) => {
    setGlobalData({
      ...globalData,
      user,
    });
  };

  return {
    notification: globalData?.notification,
    user: globalData?.user,
    setUser,
    setNotification,
  };
};