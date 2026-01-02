import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// import CustomCursor from "./components/CustomCursor";

import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;

{
  /* <CustomCursor
        imageSrc="/src/assets/cursor.png"
        size={20}
        speed={0.2}
        showDot={true}
      /> */
}
