import PropTypes from 'prop-types'

const Chunk = ({ title, content }) => {
    return(
        <div className="container">
            <h1>{title}</h1>
            {content}
        </div>
    )
}

Chunk.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Chunk
