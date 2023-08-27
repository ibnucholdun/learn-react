const Button = (props) => {
  const {
    children,
    classname = "bg-black-500",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`h-10 px-4 rounded-md ${classname} text-white`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
