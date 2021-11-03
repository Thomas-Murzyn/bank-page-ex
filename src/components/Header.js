import User from "./User";

const Header = ({ username }) => {
  return (
    <header>
      <div className="content">
        <h1>My Bank</h1>
        <User username={username} />
      </div>
    </header>
  );
};

export default Header;
