import PropTypes from 'prop-types';
import css from "./Statistics.module.css";


export const Statistics = ({ title, stats }) => {
    // let titlePresent;
    // if (title) { titlePresent = <h2 className={title}>Upload stats</h2> }

    return <section className={ css.statisticsContainer }>
        {/* {titlePresent} */}
        {title && <h2 className={ css.title }>{title}</h2>}
        <ul className={ css.statList }>
            {stats.map(st => <li key={st.id} className={ css.statListItem }>
                <span className={ css.label }>{st.label}</span>
                <span className={ css.percentage }>{st.percentage}</span>
            </li>)}
        </ul>
    </section>
}


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),

}