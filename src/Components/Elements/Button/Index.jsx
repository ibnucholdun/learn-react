const Button = (props) => {
  const { children, classname = "bg-blaue-500" } = props;
  return (
    <button
      className={`h-10 px-4 rounded-md ${classname} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
