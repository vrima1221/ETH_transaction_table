import React from 'react';
import './ErrorNotification.scss';

type Props = {
  message: string;
  isError: boolean;
};

export const ErrorNotification: React.FC<Props> = (
  {
    message,
    isError,
  },
) => {
  return (
    <div
      className="error-notification"
      hidden={!isError}
    >
      {message}
    </div>
  );
};
