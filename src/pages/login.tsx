import React, { useState } from 'react';
import { AuthBox } from '../components/auth-box';
import { EmailLogin } from '../components/authentication/login/email-login';
import { PasswordLogin } from '../components/authentication/login/password-login';

export const Login = () => {
  const [step, setStep] = useState<
    'enter-email' | 'enter-password' | 'profile-setup'
  >('enter-email');
  return (
    <AuthBox>
      {step === 'enter-email' && <EmailLogin setStep={setStep} />}
      {step === 'enter-password' && <PasswordLogin setStep={setStep} />}
    </AuthBox>
  );
};
