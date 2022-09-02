import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../UI"
import { DcPage } from "../pages/dcPage";
import { MarvelPage } from "../pages/MarvelPage";


export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
            <Route path="/marvel" element={<MarvelPage />} />
            <Route path="/dc" element={<DcPage />} />

            <Route path="/" element={<Navigate to="/marvel" />} />

        </Routes>
      </div>
    </>
  );
}
