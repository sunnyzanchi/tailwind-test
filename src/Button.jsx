import React from 'react';
import cx from 'classnames';

const Button = ({
  className,
  children,
  disabled = false,
  labelOnly = false,
  secondary = false,
  tertiary = false,
}) => {
  const isPrimary = !disabled && !labelOnly && !secondary && !tertiary;

  return (
    <button
      className={cx(
        'py-3 px-4 rounded',
        isPrimary &&
          'bg-bluePrimary hover:bg-primaryHover shadow-button text-white',
        disabled && 'bg-lightGray cursor-default shadow-button text-disabled',
        labelOnly &&
          'bg-transparent hover:text-primaryHover hover:underline shadow-none text-blue',
        secondary &&
          'bg-blueSecondary hover:bg-secondaryHover shadow-button text-blue',
        tertiary && 'bg-white hover:bg-tertiaryHover shadow-button text-blue',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
