import React from "react";
import classNames from "classnames";
import IconSVG from "react-svg-inline";
import PropTypes from "prop-types";

export default class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: ""
    };

    this.cls = classNames("Icon", {
      [`Icon--${this.props.name}`]: true,
      [this.props.className]: typeof this.props.className !== "undefined"
    });
  }

  componentDidMount() {
    /* eslint-disable-next-line */
    this.setState({ icon: require(`./images/${this.props.name}.svg`) });
  }

  render() {
    return (
      <span className={this.cls}>
        <IconSVG svg={this.state.icon && this.state.icon.default} />
      </span>
    );
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};
