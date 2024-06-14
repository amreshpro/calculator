/* eslint-disable react/prop-types */
export default function Button({label='',children,onClick=()=>{},dataOperation}) {
  
  
  return (
    <button onClick={onClick} data-operation={dataOperation}>{label? label : children}</button>
  )
}