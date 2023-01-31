import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Footer from 'components/Footer';
import './SharedLayout.css';

export default function SharedLayout() {
  return (
    <div className="App">
      <AppBar />
      <main className="sharedContainer">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
