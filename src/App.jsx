import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/produtos" element={<ProductListPage/>}/>
                <Route path="*" element={<HomePage></HomePage>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
