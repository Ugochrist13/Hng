import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetailPage from "./pages/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
