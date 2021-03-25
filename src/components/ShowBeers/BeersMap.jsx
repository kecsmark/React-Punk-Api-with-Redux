import GridList from "./GridList";
import {selectSearchResults} from '../../store/beerSlice';
import { useSelector } from 'react-redux';

export default function BeersMap() {

    const searchRes=useSelector(selectSearchResults);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        // alignItems: 'center',
        flexWrap: "wrap",
      }}
    >
      {searchRes.map((beer) => (
        <GridList data={beer} />
      ))}
    </div>
  );
}
