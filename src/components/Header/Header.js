import icon  from"./mode-icon.svg"
export const Header = () => {
  return (
    <header className='site-header  pt-3 pb-3 shadow'>
      <div className='container'>
        <div className='site-header__inner d-flex align-items-center justify-content-between'>
          <a className="header_link fw-bold text-decoration-none text-black " href='./index.html'><h3>Where in the world?</h3></a>
          <button
            className=' btn mode-btn '
            type='button'
          >
          <img className="me-2 mb-1 " src={icon} alt="darkmode_btn"/>
            Dark Mode
          </button>
        </div>
      </div>
    </header>
  );
};

