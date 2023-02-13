import PropTypes from 'prop-types';
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
    // console.log(transactions.id);
    // const { id, type, amount, currency } = transactions;
    return <table className={ css.transactionHistoryTable }>
    <thead className={css.hederRow}>
      <tr className={css.valuesRow}>
        <th className={css.columnHeader}>Type</th>
        <th className={css.columnHeader}>Amount</th>
        <th className={css.columnHeader}>Currency</th>
      </tr>
    </thead>
        <tbody>
        {items.map(item => (
        <tr key={item.id} className={css.valuesRow}>
          <td className={css.trD}>{item.type}</td>
          <td className={css.trD}>{item.amount}</td>
          <td className={css.trD}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
    </table>
}

TransactionHistory.propTypes = {
  items: PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
  }),

}
