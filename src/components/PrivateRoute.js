import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, user, isCreator, ...rest }){
  if (isCreator) {
    return (
      <Route {...rest} render={props => (
        (user.isLogged && user.role === 'CREATOR') ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }}/>
        )
      )}/>
    )
  }
  return (
    <Route {...rest} render={props => (
      user.isLogged ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
}


export default connect(state => ({
  user: state.user
}))(PrivateRoute);
