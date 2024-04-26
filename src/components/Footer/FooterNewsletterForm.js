import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Form/partials/Input'
import Button from '../UI/Button'

const inputData = {
  name: '',
  label: 'Email',
  value: '',
  input_type: 'email',
  autocomplete: 'email',
}

export default function FooterNewsletterForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors: fieldErrors },
  } = useForm()

  const onSubmit = async (formData) => {
    console.log(formData)
  }

  return (
    <form
      className="flex items-end gap-[0.68rem]"
      // name={data.title}
      onSubmit={handleSubmit(onSubmit)}
      // data-netlify={data.settings.resolver === 'Form'}
    >
      <Input
        data={inputData}
        white="white"
        setValue={setValue}
        register={register}
        errors={fieldErrors}
      />
      <Button children="Sign up" className="w-full" type="submit" />
    </form>
  )
}
