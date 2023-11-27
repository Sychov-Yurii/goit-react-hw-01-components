import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <section className={css.section}>
      <table className={css.transaction_history}>
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
    </section>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
