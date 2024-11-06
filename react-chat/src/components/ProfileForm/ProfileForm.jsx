import React from 'react';
import cls from './ProfileForm.module.scss';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { classNames } from '../../utils/classNames';
import DefaultFile from '../../assets/images/default_logo.png';

export const ProfileForm = () => {
  const [previewFile, setPreviewFile] = React.useState(null);

  const onChangeFileHandler = React.useCallback((e) => {
    const file = e.target.files[0];

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewFile(objectUrl);
    }
  }, []);

  return (
    <div className={cls['profile']}>
      <div className={classNames(cls['profile-field'], {}, [cls['profile-field--file']])}>
        <span className={cls['profile-field__icon']}>
          <AddAPhotoIcon />
        </span>

        {previewFile && (
          <span className={cls['profile-field__overlay']} />
        )}
      
        <img 
          alt="File avatar"
          className={cls['profile-field__image']}
          src={previewFile ?? DefaultFile}
        />

        <input 
          type="file"
          name="file"
          className={cls['profile-field__file']}
          onChange={onChangeFileHandler}
          accept="image/png, image/gif, image/jpeg"
        />
      </div>

      <div className={cls['profile-field']}>
        <label className={cls['profile-field__label']}>
          Полное имя
        </label>

        <input 
          type="text"
          name="fullName"
          className={cls['profile-field__input']}
        />
      </div>
      
      <div className={cls['profile-field']}>
        <label className={cls['profile-field__label']}>
          Имя
        </label>

        <input 
          type="text"
          name="userName"
          className={cls['profile-field__input']}
        />

        <span className={cls['profile-field__description']}>
          Минимальная длина 5 символов
        </span>
      </div>
      
      <div className={cls['profile-field']}>
        <label className={cls['profile-field__label']}>
          Биография
        </label>

        <textarea 
          name="userName"
          className={classNames(cls['profile-field__input'], {}, [cls['profile-field__textarea']])}
        ></textarea>

        <span className={cls['profile-field__description']}>
          Введите вашу биографию
        </span>
      </div>
    </div>
  );
}
