/* eslint-disable react/prop-types */
export default function Button({label='',children,onClick=()=>{}}) {
  
  
  return (
    <button onClick={onClick}>{label? label : children}</button>
  )
}