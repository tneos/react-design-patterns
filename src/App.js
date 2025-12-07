import {SmallAuthorListItem} from "./components/authors/SmallListItems";
import {LargeAuthorListItem} from "./components/authors/LargeListItems";
import {LargeBookListItem} from "./components/books/LargeListItems";
import {SmallBookListItem} from "./components/books/SmallListItems";
import {RegularList} from "./components/lists/Regular";
import authors from "./data/authors";
import books from "./data/books";
import {NumberedList} from "./components/lists/Numbered";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>
      {/* <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem} />
      <NumberedList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem} />
      <RegularList items={books} sourceName={"book"} ItemComponent={SmallBookListItem} />
      <NumberedList items={books} sourceName={"book"} ItemComponent={LargeBookListItem} /> */}
    </>
  );
}

export default App;
