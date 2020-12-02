import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

const withLoading = (callback) => (Component) => {
  const WithLoadingWrapper = (props) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const { loading: isLoading } = callback(props);
      if (isLoading) {
        setTimeout(() => setLoading(false), 1000);
      }
    }, [props]);
    return loading ? <ActivityIndicator /> : <Component {...props} />;
  };
  return WithLoadingWrapper;
};

export default withLoading;
