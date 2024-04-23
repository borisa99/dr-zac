import React from 'react'
import classNames from 'clsx'
import { slugify, cn } from '@/lib/helper'

export default function Input({
  data,
  register,
  disabled = false,
  setValue,
  errors,
  white,
  ...props
}) {
  const name = data?.name ? slugify(data?.name, '_') : 'preview'
  const error = errors[name]
  if (data?.value) {
    setValue(name, data.value)
  }

  return (
    <div
      className={classNames('w-full', {
        hidden: data?.input_type === 'hidden',
      })}
    >
      <label>
        <span className="mb-2 inline-block"> {data?.label}</span>
        <input
          {...props}
          {...register(name)}
          id={name}
          disabled={disabled}
          autoComplete={data?.autocomplete || 'on'}
          aria-invalid={error ? 'true' : 'false'}
          required={data?.required}
          type={data?.input_type}
          placeholder={`${data?.name}${data?.required ? '*' : ''}`}
          className={cn('block h-14 w-full rounded-lg border', {
            'text-textMain w-full border-gray-200 bg-white sm:w-96': white,
            'bg-gray-100': !white,
          })}
        />
      </label>
      <div className="block text-left text-sm text-red-600">
        {error?.message}
      </div>
    </div>
  )
}
