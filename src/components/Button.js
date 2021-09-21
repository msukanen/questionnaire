import PropTypes from 'prop-types'

const Button = ({text, onClick}) => {
    return <button className='btn' onClick={onClick}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button
