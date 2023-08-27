const Button = (props) => {
  const { children, variant } = props;
  return (
    <button
      className={`h-10 px-4 rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

const App = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button variant="bg-red-500">Primary</Button>
        <Button variant="bg-blue-500">Secondary</Button>
      </div>
    </div>
  );
};

export default App;
