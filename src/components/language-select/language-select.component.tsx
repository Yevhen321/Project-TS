import React, { useState } from 'react';
import { LanguageSelectProps } from './language-select.types';
import classes from './language-select.module.scss';
import { Text } from '../text';
import { Icon } from '../icon';
import { IconTypes } from '../../data/icons';

export const LanguageSelectComponent: React.FC<LanguageSelectProps> = () => {
  const lngs = ['English', 'Ukrainian', 'Russian'];
  const [showList, setShowList] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>(lngs[0]);

  return (
    <div className={classes.languageHelp}>
      <div className={classes.language}>
        <Text
          text={language}
          size="small"
          color="secondaryGray"
          weight="fontMedium"
        />
        <Icon
          name={showList ? IconTypes.ARROW_DOWN : IconTypes.ARROW_UP}
          size={24}
          fill="none"
          stroke="#10A8C9"
          onClick={() => setShowList(!showList)}
          className={classes.icon}
        />
      </div>
      <div>
        <Text
          text="Help"
          size="small"
          color="secondaryGray"
          weight="fontMedium"
          style={{ cursor: 'pointer' }}
        />
      </div>
      {showList && (
        <ul className={classes.ul}>
          {lngs.map((lan, index) => {
            return (
              <li key={index}>
                <Text
                  text={lan}
                  size="small"
                  color="secondaryGray"
                  weight="fontMedium"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setLanguage(lan);
                    setShowList(false);
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
