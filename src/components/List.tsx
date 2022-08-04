export default function List({jobs}){
  return (
    <li key={jobs.id}>
      <h2>{jobs.title}</h2>
      <p>{jobs.price} $</p>
    </li>
  );
}
