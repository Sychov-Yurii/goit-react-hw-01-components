import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ data }) => {
  return (
    <section className="section">
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.stat_list}>
        {data.map(el => (
          <li className={css.item} key={el.id}>
            <span className={css.label}>{el.label} </span>
            <span className={css.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
