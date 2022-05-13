// import package for property types
import PropTypes from "prop-types"

// create component here
const DetailAbout = (props) => {

    const { title, summary, qty } = props

    return (
        <div>
            <h1>Title : {title}</h1>
            <p>Summary : {summary}</p>
            <p>Qty : {qty}</p>
        </div>
    )
}

// define property type for this component here
DetailAbout.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    qty: PropTypes.string
}


export default DetailAbout