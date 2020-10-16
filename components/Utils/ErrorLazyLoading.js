import React from 'react';
import NotFound from '../NotFound/NotFound';
export default class ErrorLazyLoading extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <NotFound/>;
    }

    return this.props.children;
  }
}
