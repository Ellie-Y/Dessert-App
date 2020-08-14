import React from 'react'
import PropTypes from 'prop-types'

// 拿到icons下所有的 svg 文件作为一个模块
const icons = require.context('../../assets/icons/', true, /\.svg$/);  

const requireAll = requireContext => requireContext.keys().map(requireContext);
const allIcons = requireAll(icons);   // 拿到 svg 的内容

function Svg(props) {

  let iconSize = [];
  allIcons.forEach((item, i) => {
    // 判断 svg 的 id 是否和传入的名字相对应
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

