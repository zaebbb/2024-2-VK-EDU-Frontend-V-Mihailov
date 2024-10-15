import { 
  LOCAL_STORAGE_KEY_INIT_MOCK_DATA,
  LOCAL_STORAGE_KEY, 
} from "./constants";
import { mockMessages } from './mockData';

export const saveMockData = () => {
  const isInit = localStorage.getItem(LOCAL_STORAGE_KEY_INIT_MOCK_DATA);
  
  if (!isInit) {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_INIT_MOCK_DATA,
      JSON.stringify(Boolean(true))
    );

    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(mockMessages)
    );
  }
}