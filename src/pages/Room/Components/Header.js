import logo from '../../../icons/index_icons/logo_block.svg'
function Header({ image }) {
  return (
    <>
      <div className="roomHeader">
        <div className="room-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="roomHeader-s" style={{ backgroundImage: `url('${image[0]}')` }}></div>
        <div className="roomHeader-e">
          <div className="roomHeader-r-item" style={{ backgroundImage: `url('${image[1]}')` }}></div>
          <div className="roomHeader-r-item" style={{ backgroundImage: `url('${image[2]}')` }}></div>
        </div>
      </div>
    </>
  );
}
export default Header;
