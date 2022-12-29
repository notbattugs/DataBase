export default function CustomInput({ onChange, title }) {
  return (
    <div>
      {title}
      <input onChange={onChange} />
    </div>
  );
}
