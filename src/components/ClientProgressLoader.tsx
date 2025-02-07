'use client';

import React, { useEffect, useState } from 'react';
import ProgressLoader from './ProgressLoader';

const ClientProgressLoader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ProgressLoader />;
};

export default ClientProgressLoader;