const Account = ({ name, balance, color, operations }) => {
  let accountColor = color === "#1976D2" ? "color1" : "color2";
  return (
    <>
      <div className={accountColor}>
        <div className="account">
          <h3>{name}</h3>
          <h3>{balance} €</h3>
        </div>
      </div>
      <ul className="operations">
        {operations.map((item, index) => {
          return (
            <li key={index}>
              <p>{item.date}</p>
              <p>{item.description}</p>
              <p>{item.amount} €</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Account;
