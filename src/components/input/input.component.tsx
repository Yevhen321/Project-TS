import React, { useState, useEffect, useRef, forwardRef } from 'react';
import useCombinedRefs from '../../hooks/combine-refs.hook';
import { useResizeDetector } from 'react-resize-detector';
import ResizeObserver from 'resize-observer-polyfill';
import clsx from 'clsx';
import { InputProps } from './input.types';
import classes from './input.module.scss';
import { Icon } from '../icon';
import { Text } from '../text';

export const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      leftLabel,
      icon,
      value,
      width,
      type = 'text',
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      errorMessage,
      showError,
      style,
      className,
      disabled,
    },
    ref
  ) => {
    if (!window.ResizeObserver) {
      window.ResizeObserver = ResizeObserver;
    }
    const inputRef = useRef(null);
    const labelRef = useRef(null);
    const [focused, setFocused] = useState<boolean>(false);
    const [labelPosition, setLabelPosition] = useState<{
      x: number;
      y: number;
    }>({
      x: 0,
      y: 0,
    });
    const { height: inputHeight = 0 } = useResizeDetector({
      targetRef: inputRef,
      handleHeight: false,
    });

    const { height: labelHeight = 0 } = useResizeDetector({
      targetRef: labelRef,
      handleHeight: false,
    });

    useEffect(() => {
      if (focused || value) {
        setLabelPosition({ x: -5, y: -(labelHeight / 2) - 2 });
      } else {
        setLabelPosition({ x: 0, y: inputHeight / 2 - labelHeight / 2 });
      }
    }, [inputHeight, labelHeight, value, focused]);

    const combinedRef: React.RefObject<HTMLInputElement> | undefined =
      useCombinedRefs(ref, inputRef);

    return (
      <div className={clsx(classes.wrapper)}>
        {leftLabel && (
          <Text variant="p" text={leftLabel} style={{ marginRight: '10px' }} />
        )}
        <div
          className={clsx(
            className,
            width === 'full' ? classes.fullWidth : '',
            showError ? classes.isError : classes.inputBox
          )}
        >
          {label && (
            <label
              style={{
                transform: `translate(${labelPosition.x}px, ${labelPosition.y}px)`,
              }}
              ref={labelRef}
              className={focused || value ? classes.focusedLabel : ''}
            >
              {label}
            </label>
          )}
          <input
            ref={combinedRef}
            type={type}
            name={label}
            value={value}
            style={style}
            onChange={(event) =>
              onChange && onChange(event.target.value, event)
            }
            onFocus={(e) => {
              setFocused(true);
              onFocus && onFocus(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              onBlur && onBlur(e);
            }}
            onKeyDown={(e) => onKeyDown && onKeyDown(e)}
            disabled={disabled}
          />
          {icon && <Icon {...icon} />}
        </div>
        {errorMessage && showError && (
          <Text variant="p" size="medium" color="error" text={errorMessage} />
        )}
      </div>
    );
  }
);

InputComponent.displayName = 'Input';
