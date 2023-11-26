export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        {items.map(el => (
          <tr key={el.id}>
            <th>{el.type}</th>
            <th>{el.amount}</th>
            <th>{el.currency}</th>
          </tr>
        ))}
      </thead>
    </table>
  );
};

export default TransactionHistory;
