import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { login } from '../api/users.js'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext.jsx'

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [, setToken] = useAuth()

  const loginMutation = useMutation({
    mutationFn: () => login({ username, password }),
    onSuccess: (data) => {
      setToken(data.token)
      navigate('/')
    },
    onError: () => alert('failed to login'),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    loginMutation.mutate()
  }

  // original form for login
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
        value={loginMutation.isPending ? 'Logging in...' : 'Login'}
        disabled={!username || !password || loginMutation.isPending}
      />
    </form>
  )*/

  // new login form
  return (
    <div className='container py-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6 col-lg-5'>
          <div className='card shadow-sm p-4'>
            <h2 className='text-center mb-4'>Login</h2>

            <form onSubmit={handleSubmit}>
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
                  placeholder='Enter username'
                  required
                />
              </div>

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
                  placeholder='Enter password'
                  required
                />
              </div>

              <button
                type='submit'
                className='btn btn-primary w-100'
                disabled={!username || !password || loginMutation.isPending}
              >
                {loginMutation.isPending ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <div className='text-center mt-3'>
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
