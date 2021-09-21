import PropTypes from 'prop-types'

const Header = ({title}) => {
    return(
        <header className="App-header">
            <h1>{title}</h1>
            <p>2021 by <em>Markku Sukanen</em></p>
        </header>
    )
}

Header.defaultProps = {
    title: 'JSQuestionnaire w/React',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
