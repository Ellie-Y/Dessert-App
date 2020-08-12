import React from 'react'
import PropTypes from 'prop-types'


const requireAll = requireContext => requireContext.keys().map(requireContext);
const icons = require.context('../../assets/icons/', true, /\.svg$/);

function Svg(props) {

  const allIcons = requireAll(icons);
  let iconSize = [];
  allIcons.forEach((item, i) => {
    if (allIcons[i].default.id === props.name) {
      iconSize = allIcons[i].default.viewBox.split(' ');
    }
  });
  const iconHeight = iconSize[iconSize.length - 1];
  const iconWidth = iconSize[iconSize.length - 2];

  return (
    <svg className="icon" width={iconWidth} height={iconHeight} >
      <use xlinkHref={'#' + props.name} />
    </svg>
  )
}

Svg.propTypes = {
  name: PropTypes.string.isRequired
}

export default Svg

