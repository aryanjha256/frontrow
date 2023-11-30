const TextField = ({ placeholder, value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-80 h-12 rounded-md px-4 outline-none focus:border border-secondary"
      />
    </div>
  );
};

export default TextField;
