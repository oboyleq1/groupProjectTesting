import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { signup } from '../api/users.js'
import { useNavigate, Link } from 'react-router-dom'

export function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const signupMutation = useMutation({
    mutationFn: () => signup({ username, password }),
    onSuccess: () => navigate('/login'),
    onError: () => alert('failed to sign up'),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    signupMutation.mutate()
  }

  /*return (
    <form onSubmit={handleSubmit}>
      <Link to='/'>Back to main page</Link>
      <hr />
      <br />
      <div>
        <label htmlFor='create-username'> Username: </label>
        <input
          type='text'
          name='create-username'
          id='create-username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor='create-password'> Password: </label>
        <input
          type='password'
          name='create-password'
          id='create-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <input
        type='submit'
        value={signupMutation.isPending ? 'Signing up...' : 'Sign Up'}
        disabled={!username || !password || signupMutation.isPending}
      />
    </form>
  ) */

  return (
    <div className='container py-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6 col-lg-5'>
          {/* Bootstrap card to wrap the form */}
          <div className='card shadow-sm p-4'>
            <h2 className='text-center mb-4'>Create an Account</h2>

            {/* Signup form */}
            <form onSubmit={handleSubmit}>
              {/* Username field */}
              <div className='mb-3'>
                <label htmlFor='create-username' className='form-label'>
                  Username
                </label>
                <input
                  type='text'
                  id='create-username'
                  className='form-control'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder='Enter a username'
                  required
                />
              </div>

              {/* Password field */}
              <div className='mb-3'>
                <label htmlFor='create-password' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  id='create-password'
                  className='form-control'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter a password'
                  required
                />
              </div>

              {/* Submit button */}
              <button
                type='submit'
                className='btn btn-success w-100'
                disabled={!username || !password || signupMutation.isPending}
              >
                {signupMutation.isPending ? 'Signing up...' : 'Sign Up'}
              </button>
            </form>

            {/* Navigation links */}
            <div className='text-center mt-3'>
              <p className='mb-1'>
                Already have an account?{' '}
                <Link to='/login' className='text-decoration-none'>
                  Log in
                </Link>
              </p>
              <Link to='/' className='text-decoration-none'>
                ← Back to Main Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
