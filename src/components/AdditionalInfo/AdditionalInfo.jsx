import { NavLink, useLocation, Outlet } from 'react-router-dom';
import s from './AdditionalInfo.module.css';

export default function AdditionalInfo({movieId}) {
  const location = useLocation();
  return (
    <section className={s.addInfo}>
      <h2 className={s.addInfoTitle}>Additional information</h2>
      <ul className={s.addInfoList}>
        <li className={s.cast}>
          <NavLink
            className={s.link}
            to={
              location.pathname.includes('cast') ? `/movies/${movieId}` : 'cast'
            }
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className={s.link}
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
