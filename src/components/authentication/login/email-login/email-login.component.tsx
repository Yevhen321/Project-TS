import React, { useState } from 'react';
import classes from './email-login.module.scss';
import { useAppDispatch } from '../../../../store/redux-hooks';
import { setUserEmail } from '../../../../store/auth/auth-slice';
import { Link } from 'react-router-dom';
import { Text } from '../../../text';
import { Button } from '../../../button';
import { Input } from '../../../input';
import { validEmail } from '../../../../utils/email-validatin';
import { EmailLoginProps } from './email-login.types';

export const EmailLoginComponent: React.FC<EmailLoginProps> = ({ setStep }) => {
  const [email, setEmail] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(true);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleEmailKeyDown = (value: string) => {
    if (!value) {
      setHasError(true);
      setErrorMessage('Enter email');
      return;
    }
    if (!validEmail(value)) {
      setHasError(true);
      setErrorMessage('Email is incorrect');
      return;
    }
    setHasError(false);
    setErrorMessage('');
  };

  const handleClick = () => {
    dispatch(setUserEmail(email));
    setStep('enter-password');
  };

  return (
    <>
      <div className={classes.innerContainer}>
        <div className={classes.welcomeText}>
          <Text text="Welcome to the HIKVISION selection system" variant="h4" />
        </div>
        <Input
          label="Enter e-mail"
          width="full"
          className={classes.input}
          value={email}
          showError={showError}
          errorMessage={errorMessage}
          onChange={(email) => setEmail(email)} // the same onChange={setEmail}
          onBlur={() => {
            if (errorMessage && hasError) {
              setShowError(true);
            }
          }}
          onKeyDown={() => handleEmailKeyDown(email)}
        />
        <Button
          text="Next"
          width="full"
          disabled={hasError}
          onClick={handleClick}
        />
        <div className={classes.regTip}>
          <Text text="Not registered yet?" variant="p" color="secondaryGray" />
          <Link to="#" style={{ textDecoration: 'underline' }}>
            <Text text="Leave request" variant="p" color="blue" />
          </Link>
        </div>
      </div>
    </>
  );
};
