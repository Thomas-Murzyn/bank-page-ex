const User = ({ username }) => {
  return (
    <div className="user">
      <h3>{username}</h3>
      <i class="far fa-user"></i>
    </div>
  );
};

export default User;
