import React from 'react';
import { useStore } from '../../hooks/useStore';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import cls from './Header.module.scss';
import UserAvatar from '../../assets/images/user.png';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../lib/getUserInfo';

export const Header = () => {
  const { 
    isChatPage,
    isMainPage,
    isProfilePage,
    chatId,
  } = useStore();

  const [chat, setChat] = React.useState(null);

  React.useEffect(() => {
    if (!chat && chatId && isChatPage) {
      const chatInfo = getUserInfo(chatId);

      if (chatInfo) {
        setChat(chatInfo);
      }
    }
  }, [chat, chatId, isChatPage]);

  React.useEffect(() => {
    if (isMainPage) {
      setChat(null);
    }
  }, [isMainPage]);

  return (
    <div className={cls['header']}>
      <div className={cls['header-info']}>
        {(isChatPage || isProfilePage) && (
          <Link 
            className={cls['header__button']}
            to={"/"}
          >
            <ArrowBackIosIcon />
          </Link>
        )}
        
        {isMainPage && (
          <button 
            className={cls['header__button']}
          >
            <MenuIcon />
          </button>
        )}
        
  
        <div className={cls['header-profile']}>
          {isMainPage && (
            <p className={cls['header__title']}>
              Messenger
            </p>
          )}

          {isProfilePage && (
            <p className={cls['header__title']}>
              Редактор профиля
            </p>
          )}
          
          {Boolean(chat && isChatPage) && (
            <>
              <img 
                src={UserAvatar} 
                alt="Владимир Михайлов" 
                className={cls['profile__avatar']}
              />

              <div className={cls['profile__content']}>
                <h3 className={cls['profile__name']}>
                  {chat.name}
                </h3>
                <span className={cls['profile__date']}>
                  был в сети в {chat.timeOnline}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className={cls['header-actions']}>
        {Boolean(isChatPage || isMainPage) && (
          <button className={cls['header-actions__button']}>
            <SearchIcon />
          </button>
        )}

        {isChatPage && (
          <button className={cls['header-actions__button']}>
            <MoreVertIcon />
          </button>
        )}

        {isProfilePage && (
          <button className={cls['header-actions__button']}>
            <CheckIcon />
          </button>
        )}
      </div>
    </div>
  );
};
