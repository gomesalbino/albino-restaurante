import Footer from "components/footer";
import Menu from "components/menu";
import PaginaPadrao from "components/paginaPadrao";
import Cardapio from "pages/cardapio";
import Inicio from "pages/inicio";
import NotFound from "pages/notFound";
import Sobre from "pages/sobre";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function AppRouter() {
    return (
        <main className="container">
            <Router>
                <Menu />

                <Routes>
                    <Route path="/" element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path="/cardapio" element={<Cardapio />} />
                        <Route path="/sobre" element={<Sobre />} />
                    </Route>
                     <Route path="*" element={<NotFound />} />

                </Routes>
            <Footer />
            </Router>
        </main>
    );
}

export default AppRouter;




