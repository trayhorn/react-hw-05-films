import { NavLink } from 'react-router-dom';


export default function NotFound() {
  return (
    <main className="errorPage">
      <p className="errorPage_error">404</p>
      <p className="errorPage__message">Maybe this page moved? Got deleted?</p>
      <p className="errorPage__message">
        Let's go{' '}
        <NavLink to={'/'} className='errorPage_link'>
          home
        </NavLink>{' '}
        and try from there.
      </p>
    </main>
  );
}