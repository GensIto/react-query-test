import { useQuery } from "react-query";

type User = {
  id: number;
  name: string;
  email: string;
};
export const FetchData = () => {
  const { data, isLoading, error } = useQuery("users", () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
      data.json()
    )
  );
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (error) {
    return <span>Error</span>;
  }
  return (
    <>
      <ul>
        {data.map((user: User) => (
          <li key={user.id}>
            {user.name}: {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};
