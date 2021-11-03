import Account from "./Account";
import Button from "./Button";

const Accounts = ({ data }) => {
  return (
    <div className="content accounts">
      {data.map((account, index) => {
        return (
          <Account
            name={account.name}
            balance={account.balance}
            color={account.color}
            operations={account.operations}
          />
        );
      })}
      <div className="button">
        <Button />
      </div>
    </div>
  );
};

export default Accounts;
