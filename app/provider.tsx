"use client";

import client from '@/lib/apolloClient';
import { ApolloProvider } from '@apollo/client/react';
import React, { ReactNode } from 'react'

export default function Provider({children}: {children: ReactNode}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
