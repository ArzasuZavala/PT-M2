import React from 'react';
import { connect } from 'react-redux';
import { getAllUserPosts } from "../../actions/"
import './UserPosts.css';

export class UserPosts extends React.Component {

  componentDidMount() {
    const userid = this.props.match.params.id;
    this.props.getAllUserPosts(userid)
  }

  render() {
    const userid = this.props.match.params.id;

    return (
      <div className="details">
        <h4 className="title">Posts del usuario {userid}</h4>
        <button onClick={() => console.log(this.props.posts)}>props</button>
        {this.props.posts && this.props.posts.map(p => (
          <div key={p.id}>
            <h2>{p.id} .- {p.title}</h2>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToprops = (state) => {
  return {
    posts: state.userPosts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUserPosts: id => dispatch(getAllUserPosts(id))
  }
}


export default connect(mapStateToprops, mapDispatchToProps)(UserPosts);