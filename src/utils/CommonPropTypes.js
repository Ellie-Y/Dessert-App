import PropTypes from 'prop-types'


export default {
  cardDatas: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    itemId: PropTypes.number,
    alt: PropTypes.string.isRequired
  }),

}

