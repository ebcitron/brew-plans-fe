import * as React from 'react';
import { useState } from 'react';
import { Appbar, withTheme, Drawer } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import theme from '../../../theme.js';
import { connect } from 'react-redux';
import Layout from '../Layout';
import Login from '../../../views/Login';
import SignUp from '../../../views/SignUp';
import { userLogout } from '../../../store/actions/user.js';
// import NavDrawer from './NavDrawer';

const NavTabs = props => {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Appbar style={{ width: '100%' }} theme={theme}>
        <Appbar.Action
          icon='person'
          onPress={() => props.navigation.navigate('MyRecipes')}
        />
        <Appbar.Action
          icon='home'
          onPress={() => props.navigation.navigate('Dashboard')}
        />
        <Appbar.Action
          icon='work'
          onPress={() => {props.userLogout(); props.navigation.navigate('Landing')}}
        />
        <Appbar.Action
          icon='menu'
          onPress={() => {
            setOpen(!open);
            console.log(open);
          }}
        />
         <Appbar.Action
          icon='school'
          onPress={() => props.navigation.navigate('RecipeForm')}
        />
      </Appbar>
      {/* {open ? <NavDrawer {...props} /> : null} */}
    </View>
  );
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps,
  {
    userLogout
  }
)(NavTabs);
