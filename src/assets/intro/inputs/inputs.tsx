import { Inputs } from './style-inputs'

interface InputDeLoginProps{
  type:string;
  placeholder:string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}
export default function InputDeLogin({ onChange,placeholder,type}:InputDeLoginProps) {
  
  return (
  <>
  <Inputs onChange={onChange} placeholder={placeholder} type={type}/> 
  </>
  )
}
