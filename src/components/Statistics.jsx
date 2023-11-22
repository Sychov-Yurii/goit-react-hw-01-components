import data from '../data/data.json'

const Statistics = () => {
    return data.map((el) => (

        <section class="statistics" key={el.id}>
            <h2 class="title">Upload stats</h2>

            <ul class="stat-list">
                <li class="item">
                    <span class="label">{el.label}</span>
                    <span class="percentage">{el.percentage}</span>
                </li>
            </ul>
        </section>
    ))
}

export default Statistics