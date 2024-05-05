import { useGlobalState } from "../hooks/useGlobalState";
import { renderBooks } from "../utils/renderBooks";

const FavoriteBooks = () => {
  const { state } = useGlobalState();

  return (
    <>
      <section>
        <h2 className="">Favorite Books:</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderBooks(state.favoriteBooks, false, true, false)}
        </ul>
      </section>
    </>
  );
};

export default FavoriteBooks;
