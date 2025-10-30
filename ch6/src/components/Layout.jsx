import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header.jsx'
import { Banner } from './Banner.jsx'

export function Layout() {
  const location = useLocation()

  // Show banner only on homepage
  const showBanner = location.pathname === '/'

  return (
    <>
      <Header />

      {showBanner && (
        <Banner
          title='CPS 490 Group Project'
          subtitle='Build By Group 12: Thomas, Pat, and Quinn'
        />
      )}

      <main className='container px-4 px-lg-5 my-5'>
        <Outlet />
      </main>

      <footer className='border-top py-4 text-center'>
        <div className='container'>
          <p className='text-muted small mb-0'>
            © {new Date().getFullYear()} My Blog
          </p>
        </div>
      </footer>
    </>
  )
}
