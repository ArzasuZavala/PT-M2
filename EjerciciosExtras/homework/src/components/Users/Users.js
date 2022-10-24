import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions/index';
import './Users.css';

export class Users extends Component {


  render() {
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        <table>
          <thead>
            <tr className="header">
              <th>Nombre</th>
              <th>Usuario</th>
              <th><button onClick={() => this.props.getAllUsers()} >Ver</button></th>
            </tr>
            {
              this.props.users && this.props.users.map(u => {
                return (
                  <tr key={u.id}>
                    <td>{u.name}</td>
                    <td>{u.username}</td>
                    <td>
                      <Link to={`/users/${u.id}/posts`}>
                        <button>Posts</button>
                      </Link>
                    </td>
                  </tr>
                )
              })
            }
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

export function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: () => dispatch(getAllUsers())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

