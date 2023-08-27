const Button = (props) => {
  const { children, classname } = props;
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
