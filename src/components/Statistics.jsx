export const Statistics = ({ data }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {data.map(el => (
          <li class="item" key={el.id}>
            <span class="label">{el.label} </span>
            <span class="percentage">{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
