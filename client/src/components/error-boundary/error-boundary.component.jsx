import { Component } from 'react';

import {ErrorImageContainer, ErrorImageOverlay, ErrorImageText} from './error-boundary.styles'

class ErrorBoundary extends Component {
  state = {
    hasErrored: false,
    error: null
  };

  static getDerivedStateFromError(error) {
    // process the error
    return {
      hasErrored: true,
      error: error.message
    };
  }

  componentDidCatch(error, info) {
    console.log('error: ', error);
    console.log('info: ', info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png'/>
          <ErrorImageText>Sorry this Page is broken 🙈 </ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
