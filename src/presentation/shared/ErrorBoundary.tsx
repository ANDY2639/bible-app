import React from "react";

interface Props {
  fallback: React.ReactNode | ((error: Error | null) => React.ReactNode);
  children: React.ReactNode;
};

export class ErrorBoundary extends React.Component<Props> {
  state: { hasError: boolean; error: Error | null } = {
    hasError: false,
    error: null
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return typeof this.props.fallback === 'function'
        ? this.props.fallback(this.state.error)
        : this.props.fallback;
    }

    return this.props.children;
  }
}