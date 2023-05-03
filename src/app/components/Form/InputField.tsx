// import CancelBtn from 'assets/icons/input_cancel_btn.svg';
import 'assets/scss/Components/Form/Form.scss';
import clsx from 'clsx';
import { FieldHookConfig, useField } from 'formik';
import React from 'react';

type InputType =
  | 'textarea'
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

interface OtherProps {
  label?: string;
  horizontal?: boolean;
  type?: InputType;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  prefix?: string;
  allowToViewPassword?: boolean;
  customPlaceHolder?: boolean;
  customPlaceHolderText?: string;
  requiredSymbol?: boolean;
}

export const InputField = (props: OtherProps & FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const {
    label,
    type,
    placeholder,
    horizontal,
    disabled,
    prefix,
    allowToViewPassword,
    customPlaceHolder,
    customPlaceHolderText,
    requiredSymbol,
  } = props;
  return (
    <div
      className={clsx(
        'form-group',
        type === 'textarea' ? 'textarea-item' : 'input-item',
        meta.touched && meta.error && 'text-danger',
        horizontal && 'float-start',
      )}
    >
      <div className="d-flex justify-content-between w-100">
        {label ? (
          <div className="position-relative">
            <label className="font-16px-semibold">{props.label}</label>
            {requiredSymbol ? (
              <div className="required-symbol-div text-color-warning">*</div>
            ) : null}
          </div>
        ) : null}
        {customPlaceHolder ? (
          <div className="label-placeholder-div font-10px-medium text-color-purple ">
            {customPlaceHolderText}
          </div>
        ) : null}
      </div>
      <div className="d-flex flex-row w-100">
        <div className="w-100 input-div-wrapper">
          {prefix ? (
            <div className="d-flex align-items-center text-nowrap me-2">
              {prefix}
            </div>
          ) : null}

          {type === 'textarea' ? (
            <textarea
              {...field}
              placeholder={disabled ? '' : placeholder}
              autoComplete="new-password"
              disabled={disabled}
              value={field.value || ''}
              className="w-100"
            />
          ) : (
            <input
              {...field}
              placeholder={disabled ? '' : placeholder}
              type={passwordVisible ? 'text' : type}
              autoComplete="new-password"
              disabled={disabled}
              value={field.value || ''}
              className="w-100"
            />
          )}
          {allowToViewPassword ? (
            <button
              className="btn btn-light ms-1"
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <i className="mdi mdi-eye-off-outline" />
              ) : (
                <i className="mdi mdi-eye-outline" />
              )}
            </button>
          ) : null}
          {field.value ? (
            <div className="cancel-input-btn-div">
              <div className="">X</div>
              {/* <img
                src={CancelBtn}
                alt=""
                className=""
                onClick={() => helpers.setValue('')}
              /> */}
            </div>
          ) : null}
        </div>
      </div>

      {meta.touched && meta.error ? (
        <div className="font-12px-medium mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};
