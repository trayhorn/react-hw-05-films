import { NavLink } from 'react-router-dom';
import s from './NotFound.module.css';


export default function NotFound() {
  return (
    <main className={s.page}>
      <p className={s.error}>404</p>
      <p className={s.message}>Maybe this page moved? Got deleted?</p>
      <p className={s.message}>
        Let's go{' '}
        <NavLink to={'/'} className={s.link}>
          home
        </NavLink>{' '}
        and try from there.
      </p>
    </main>
  );
}