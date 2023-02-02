import { NavLink, useLocation, Outlet } from 'react-router-dom';

export default function AdditionalInfo({movieId}) {
  const location = useLocation();
  return (
    <section className="addInfo">
      <h2 className="addInfo_title">Additional information</h2>
      <ul className="addInfo_list">
        <li className="addInfo_cast">
          <NavLink
            className="addInfo_link"
            to={
              location.pathname.includes('cast') ? `/movies/${movieId}` : 'cast'
            }
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className="addInfo_link"
            to={
              location.pathname.includes('reviews')
                ? `/movies/${movieId}`
                : 'reviews'
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </section>
  );
}
