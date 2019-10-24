import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import NavBar from '../components/Layout/NavBar/NavBar';
import { View } from 'react-native';

const Dashboard = props => {
  return (
    <View style={{ flex: 1 }}>
      <NavBar {...props} />
      <Layout>{props.children}</Layout>
    </View>
  );
};

export default Dashboard;
