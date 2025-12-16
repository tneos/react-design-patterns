const UserInfo = ({user}) => {
  const {name, age, country, books} = user || {};

  return user ? (
    <>
      <h2>{name}</h2>
      <p>Country: {country}</p>
      <p>Age: {age}</p>
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  ) : (
    <>
      <h2>Loading...</h2>
    </>
  );
};
export default UserInfo;
