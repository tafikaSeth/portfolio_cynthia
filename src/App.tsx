import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/theme-provider";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  )
}

export default App