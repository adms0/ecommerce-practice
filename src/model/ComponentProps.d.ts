import React, {Ref} from 'react'

export interface ComponentProps<RefType = any> {
  children?: JSX.Element | JSX.Element[]
  ref?: Ref<RefType>
  id?: string
  prevValues?: any
  setFormValues?: any
}