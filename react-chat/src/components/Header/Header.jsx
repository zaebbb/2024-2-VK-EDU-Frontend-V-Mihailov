import React from 'react';
import { useStore } from '../../hooks/useStore';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import cls from './Header.module.scss';
import UserAvatar from '../../assets/images/user.png';

export const Header = () => {
  const { 
    isChatPage,
    isMainPage,
    setMainPage,
    cleatCurrentChat,
  } = useStore();

  const backButtonHandler = React.useCallback(() => {
    setMainPage();
    cleatCurrentChat();
  }, [cleatCurrentChat, setMainPage]);

  return (
    <div className={cls['header']}>
      <div className={cls['header-info']}>
        {isChatPage && (
          <button 
            className={cls['header__button']}
            onClick={backButtonHandler}
          >
            <ArrowBackIosIcon />
          </button>
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
          
          {isChatPage && (
            <>
              <img 
                src={UserAvatar} 
                alt="Владимир Михайлов" 
                className={cls['profile__avatar']}
              />

              <div className={cls['profile__content']}>
                <h3 className={cls['profile__name']}>
                  Владимир Михайлов
                </h3>
                <span className={cls['profile__date']}>
                  был в сети в 11.40
                </span>
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className={cls['header-actions']}>
        <button className={cls['header-actions__button']}>
          <SearchIcon />
        </button>

        {isChatPage && (
          <button className={cls['header-actions__button']}>
            <MoreVertIcon />
          </button>
        )}
      </div>
    </div>
  );
};
