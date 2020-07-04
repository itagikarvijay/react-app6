import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: true };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log("getDerivedStateFromError")
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log("Componenet did catch")
        this.state = ({ hasError: true });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        console.log(this.state)
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}