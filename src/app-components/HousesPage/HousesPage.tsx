import { useQuery } from "react-query";
import { fetchHouses } from "../../app-utils/queries";
import { HouseDto } from "../../app-common/types";

export const HousesPage = () => {
  const { isLoading, isError, error, data } = useQuery<HouseDto[], Error>(
    "houses",
    fetchHouses
  );

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error: {error.message}</>;
  }

  return (
    <ul>
      {data!.map((house) => (
        <div key={house.id}>
          <h2>{house.name}</h2>
          <li>{house.animal}</li>
          <li>{house.ghost}</li>
          <li>{house.commonRoom}</li>
        </div>
      ))}
    </ul>
  );
};
