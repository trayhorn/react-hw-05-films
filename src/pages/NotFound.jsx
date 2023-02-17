import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <p className="errorPage_error">404</p>
      <p className="errorPage__text">Maybe this page moved? Got deleted?</p>
      <p className="errorPage__text">
        Let's go{' '}
        <NavLink to={'/'} className="errorPage_link">
          home
        </NavLink>{' '}
        and try from there.
      </p>
    </>
  );
}