import React from 'react';

export const SiteContext = React.createContext({});

export class SiteProvider extends React.Component {
  state = {
    isHovering: false,
    isLoading: false
  };

  setIsHovering = (bool: boolean) => {
    this.setState({ isHovering: bool });
  };

  setIsLoading = (bool: boolean) => {
    this.setState({ isLoading: bool });
  };

  render() {
    return (
      <SiteContext.Provider
        value={{
          ...this.state,
          setIsHovering: this.setIsHovering,
          setIsLoading: this.setIsLoading
        }}
      >
        {
          // @ts-ignore
          this.props.children
        }
      </SiteContext.Provider>
    );
  }
}
