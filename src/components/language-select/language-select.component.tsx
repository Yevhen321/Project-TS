import React, { useState } from 'react';
import { LanguageSelectProps } from './language-select.types';
import { useTranslation } from 'react-i18next';
import classes from './language-select.module.scss';
import { Text } from '../text';
import { Icon } from '../icon';
import { IconTypes } from '../../data/icons';
import { lngs } from './language-select.constants';

export const LanguageSelectComponent: React.FC<LanguageSelectProps> = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>('English');

  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={classes.languageHelp} data-testid='language-select'>
      <div className={classes.language}>
        <Text
          text={language}
          size='small'
          color='secondaryGray'
          weight='fontMedium'
        />
        <Icon
          name={showList ? IconTypes.ARROW_UP : IconTypes.ARROW_DOWN}
          size={24}
          fill='none'
          stroke='#10A8C9'
          onClick={() => setShowList(!showList)}
          className={classes.icon}
        />
      </div>
      <div>
        <Text
          text='Help'
          size='small'
          color='secondaryGray'
          weight='fontMedium'
          style={{ cursor: 'pointer' }}
        />
      </div>
      {showList && (
        <ul className={classes.ul}>
          {lngs.map(({ title, lng }) => {
            return (
              <li key={lng}>
                <Text
                  text={title}
                  size='small'
                  color='secondaryGray'
                  weight='fontMedium'
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setLanguage(title);
                    setShowList(false);
                    changeLanguage(lng);
                  }}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
