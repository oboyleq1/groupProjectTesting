import PropTypes from 'prop-types'
import heroImg from '../assets/clean-blog/img/UD_Blog_Image.AVIF'

export function Banner({
  title = 'Clean Blog',
  subtitle = 'A Blog Theme by Start Bootstrap',
}) {
  return (
    <header className='masthead' style={{ backgroundImage: `url(${heroImg})` }}>
      <div className='container position-relative px-4 px-lg-5'>
        <div className='row gx-4 gx-lg-5 justify-content-center'>
          <div className='col-md-10 col-lg-8 col-xl-7'>
            <div className='site-heading'>
              <h1>{title}</h1>
              <span className='subheading'>{subtitle}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}
