import {useGlobalState} from "../hooks/useGlobalState";
import { renderBookList } from "../utils/renderBooks";

const ReadBooks = () => {
const {state} = useGlobalState();

return (
    <>
      <section>
        <h2 className="">Favorite Books</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderBookList(state.readBooks, false)}
        </ul>
      </section>
    </>
  );
};
};

export default ReadBooks;
