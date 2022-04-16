import "./App.css";
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllMeetUpsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/new-meetup" element={<NewMeetUpPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
