import React, { useState } from 'react';
import classes from './password-login.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../store/redux-hooks';
import { setUserPassword } from '../../../../store/auth/auth-slice';
import { PasswordLoginProps } from './password-login.types';
import { Link } from 'react-router-dom';
import { Text } from '../../../text';
import { Button } from '../../../button';
import { validPassword } from '../../../../utils/password-validation';
import { InputPassword } from '../../../input-password';
import { Icon } from '../../../icon';
import { IconTypes } from '../../../../data/icons';

export const PasswordLoginComponent: React.FC<PasswordLoginProps> = ({
  setStep,
}) => {
  const [password, setPassword] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(true);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const dispatch = useAppDispatch();
  const emailState = useAppSelector((state) => state.auth.info.email);

  const handleEmailKeyDown = (value: string) => {
    if (!value) {
      setHasError(true);
      setErrorMessage('Enter password');
      return;
    }
    if (!validPassword(value)) {
      setHasError(true);
      setErrorMessage('Password is incorrect');
      return;
    }
    setHasError(false);
    setErrorMessage('');
  };

  const handleClick = () => {
    dispatch(setUserPassword(password));
    setPassword('');
  };

  return (
    <>
      <div className={classes.innerContainer}>
        <div className={classes.back} onClick={() => setStep('enter-email')}>
          <Icon name={IconTypes.BACK} size={24} className={classes.icon} />
          <Text text="Back" color="secondaryGray" variant="p" />
        </div>
        <div className={classes.enterPassword}>
          <Text text="Enter password" variant="h3" />
        </div>
        <div className={classes.emailStateContainer}>
          <Text
            text={emailState ? emailState : 'email'}
            size="medium"
            weight="fontBold"
            color="gray"
          />
          <Icon
            name={IconTypes.X}
            size={24}
            className={classes.icon}
            onClick={() => setStep('enter-email')}
          />
        </div>
        <InputPassword
          label="Enter password"
          width="full"
          showError={showError}
          errorMessage={errorMessage}
          value={password}
          onKeyDown={() => handleEmailKeyDown(password)}
          onChange={setPassword}
          onBlur={() => {
            if (errorMessage && hasError) {
              setShowError(true);
            }
          }}
        />
        <Button
          text="Enter"
          width="full"
          disabled={hasError}
          onClick={handleClick}
        />
        <div className={classes.regTip}>
          <Text text="Forgot password?" variant="p" color="secondaryGray" />
          <Link to="#" style={{ textDecoration: 'underline' }}>
            <Text text="Restore password" variant="p" color="blue" />
          </Link>
        </div>
      </div>
    </>
  );
};
