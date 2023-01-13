import Button from '@mui/material/Button';
import { NavLink, Outlet } from 'react-router-dom';

export default function SharedLayout() {

  return (
    <>
      <header>
        <nav>
          <NavLink className="navLink" to="/">
            <Button
              sx={{
                margin: '10px',
              }}
              variant="contained"
            >
              Home
            </Button>
          </NavLink>
          <NavLink className="navLink" to="/movies">
            <Button sx={{ margin: '10px' }} variant="contained">
              Movies
            </Button>
          </NavLink>
        </nav>
      </header>
      {/* <Outlet /> */}
    </>
  );
}
