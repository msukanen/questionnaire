import PropTypes from 'prop-types'
import { Author } from './AuthorData'

const Header = ({title}) => {
    return(
        <header className="App-header">
            <h1>{title}</h1>
            <p>2021 by <em>{Author.name}</em></p>
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
