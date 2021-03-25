import { useSelector } from "react-redux";
import { selectWish } from "../../store/beerSlice";
import ShowWishes from "./ShowWishes";

export default function MapWish() {
  const wishes = useSelector(selectWish);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        // alignItems: 'center',
        flexWrap: "wrap",
      }}
    >
      {wishes.length !== 0 ? (
        wishes.map((wish) => <ShowWishes data={wish} />)
      ) : (
        <h3>There's nothing here</h3>
      )}
    </div>
  );
}
