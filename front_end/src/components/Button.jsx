import classnames from "classnames";

function Button({children, primaryPlain, secondaryPlain, primaryGrad, secondaryGrad, type, ...rest}) {

  // defining the css class based on the conditions 
  const styles = classnames('flex items-start justify-center px-8 py-3 rounded-full font-xl font-medium transition-all border-2 border-solid font-poppins', rest.styles,{
    'text-neutral-800 bg-yellow border-yellow hover:text-white hover:bg-transparent': primaryPlain,
    'text-white bg-transparent border-yellow hover:text-neutral-800 hover:bg-yellow': secondaryPlain,
    'text-white bg-purplish border-purplish hover:text-neutral-800 hover:bg-transparent': primaryGrad,
  })

  return (
    <button type={type} className={styles} {...rest}>{children}</button>
  )
}

export default Button
