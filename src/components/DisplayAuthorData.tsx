import { Author } from "../types/types";
import { useFetch } from "../hooks/useFetch";
import AuthorCard from "./AuthorCard";

const DisplayAuthorData = ({ url }: { url: string }) => {
  const { data, loading, error } = useFetch<{ docs: Author[] }>(url);

  if (loading) return <p>Loading authors...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || !data.docs.length) return <p>No authors found.</p>;

  return (
    <>
      <h2>Search Results:</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.docs.map((author: Author) => (
          <li
            className="border border-gray-300 rounded p-4 bg-gray-50 shadow-lg"
            key={author.key}
          >
            <AuthorCard author={author} addButton={true} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default DisplayAuthorData;
