import React from "react";
import NavbarItems from "./NavbarItems.js";


class Sidenavbar extends React.Component {
  setSelectedSource = val => {
    this.setState({ 'selectedArticleSource': val });
  };
  state = {
    'selectedArticleSource' : this.props?.articleSources[0]
  };
  render() {
    return <NavbarItems onSelectedSource={this.setSelectedSource} selectedSource={this.state.selectedArticleSource} {...this.props} />
  }
}

export default Sidenavbar;
