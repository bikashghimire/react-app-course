import { useContext } from "react";
import FavoritesContext from "../store/favourite-context";
import MeetUpList from "../components/meetups/MeetUpList";

function FavouritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have no favorites yet. start adding...</p>;
  } else {
    content = <MeetUpList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
