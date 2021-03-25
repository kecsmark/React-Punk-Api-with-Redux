import "./App.css";
import SearchBeer from "./components/Search/SearchBeer";
import BeersMap from "./components/ShowBeers/BeersMap";
import MapWish from "./components/Wishlist/MapWish";
import { BrowserRouter, Route } from "react-router-dom";
import BeerNavbar from "./components/Navbar/BeerNavbar";
import HomePage from "./components/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <BeerNavbar/>
          <HomePage/>
        </Route>
        <Route exact path="/Search">
          <BeerNavbar />
          <SearchBeer />
          <BeersMap />
        </Route>
        <Route exact path="/wishlist">
          <BeerNavbar />
          <MapWish />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
