import { NavLink } from 'react-router-dom';
import s from './NotFound.module.css';


export default function NotFound() {
  return (
    <>
      <head>
        {/* <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap" rel="stylesheet"> */}
        <script
          src="https://kit.fontawesome.com/4b9ba14b0f.js"
          crossorigin="anonymous"
        ></script>
      </head>
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
    </>
  );
}