const BookInfo = ({book}) => {
  const {name, price, title, pages} = book || {};
  console.log(book);
  return book ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Title: {title}</h3>
      <p>{pages}</p>
    </>
  ) : (
    <>
      <h2>Loading...</h2>
    </>
  );
};
export default BookInfo;
