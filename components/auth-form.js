'use client';

import { useActionState } from 'react';
import { auth } from '@/actions/auth-actions';

import Link from 'next/link';

export default function AuthForm({ mode }) {
  const [formState, formAction] = useActionState(auth.bind(null, mode), {});
  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {formState.errors && (
        <ul id="form-errors">
          {Object.keys(formState.errors).map(e => (
            <li key={e}>{formState.errors[e]}</li>
          ))}
        </ul>
      )}
      <p>
        <button type="submit">{mode === 'login' ? 'Login' : 'Create Account'}</button>
      </p>
      <p>
        {mode === 'login' && <Link href="/?mode=sigup">Create an account</Link>}
        {mode === 'signup' && <Link href="/?mode=login">Login with existing account.</Link>}
      </p>
    </form>
  );
}
