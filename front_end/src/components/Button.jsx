import classnames from "classnames";

function Button({
  children,
  primaryPlain,
  secondaryPlain,
  primaryGrad,
  secondaryGrad,
  semiRounded,
  danger,
  encourage,
  addition,
  simpleBlack,
  type,
  ...rest
}) {
  // defining the css class based on the conditions
  const styles = classnames(
    "flex items-start justify-center px-8 py-3 rounded-full font-xl font-medium transition-all border-2 border-solid font-poppins",
    rest.styles,
    {
      "text-neutral-800 bg-yellow border-yellow hover:text-white hover:bg-transparent":
        primaryPlain,
      "text-white bg-transparent border-yellow hover:text-neutral-800 hover:bg-yellow":
        secondaryPlain,
      "text-white bg-purplish border-purplish hover:text-neutral-800 hover:bg-transparent":
        primaryGrad,

      "rounded-md text-white bg-rose-700 border-rose-700 hover:text-neutral-800 hover:bg-transparent":
        semiRounded && danger,

      "rounded-md text-white bg-amber-500 border-amber-500 hover:text-neutral-800 hover:bg-transparent":
        semiRounded && encourage,

        "rounded-md text-white bg-green-600 border-green-600 hover:text-neutral-800 hover:bg-transparent":
        semiRounded && addition,

        "rounded-md text-white bg-neutral-800 border-neutral-800 hover:text-neutral-800 hover:bg-transparent":
        semiRounded && simpleBlack,

    }
  );

  return (
    <button type={type} className={styles} {...rest}>
      {children}
    </button>
  );
}

export default Button;
