import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import Dashboard from "./pages/meeting/Dashboard";
import { lazy, Suspense } from "react";
// Importa el componente Video utilizando lazy, para que su estilo o característica no afecte a la carga de la página home
const Video = lazy(() => import("./pages/meeting/Video"));


function App() {
  const shouldRenderNavbar = !window.location.pathname.startsWith("/meeting"); //window nos dice la ubicación actual del documento, pathname nos dice la ruta actual del documento y startsWith evalua si la cadena comienza con /meeting y devuelve true o false.
  // Si la ruta actual del documento comienza con /meeting, shouldRenderNavbar será false, por lo que no se renderizará el Navbar.

  return (
    <>
      {shouldRenderNavbar && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
        </div>
      )}

      <Routes>
        {routes.map(({ path, element }, key) => (
          <Route key={key} exact path={path} element={element} />
        ))}
        
        <Route path="/meeting" element={<Dashboard />} />
        <Route path="/meeting/:url" element={<Suspense fallback={<div>Loading...</div>}><Video /></Suspense>} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
