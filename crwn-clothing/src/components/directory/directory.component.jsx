import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import SECTIONS_DATA from "./sections.data.js";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {/* {this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                ))} */}

        {this.state.sections.map(({ id, ...rest }) => (
          <MenuItem key={id} {...rest} />
        ))}
      </div>
    );
  }
}

export default Directory;
