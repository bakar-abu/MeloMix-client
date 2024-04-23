import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
`;

export const LoginError = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = "/welcomepage"; // Redirect to Welcome Page after countdown
    }
  }, [countdown]);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <div className="bg-emerald-950 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">You need to login first!</h2>
        <p className="mb-4">Redirecting to Welcome Page in {countdown} seconds...</p>
        <div className="flex justify-center">
          <RingLoader color={'#ffffff'} css={override} size={50} /> {/* Animated loading icon */}
        </div>
      </div>
    </div>
  );
};

