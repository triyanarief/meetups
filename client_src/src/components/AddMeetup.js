import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddMeetup extends Component {
  AddMeetup(newMeetup){
    axios.request({
      method : 'POST',
      url : 'http://localhost:3000/api/meetups-apps',
      data : newMeetup
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }
  onSubmit(e) {
    const newMeetup = {
      name : this.refs.name.value,
      city : this.refs.city.value,
      address : this.refs.address.value
    }
    this.AddMeetup(newMeetup);
    e.preventDefault();
  }
  render() {
    return(
      <div>
        <br/>
        <Link className='btn grey' to='/'><i className="fa fa-arrow-left"></i> Back</Link>
        <h1>Add Meetup</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="city" ref="city" />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field">
            <input type="text" name="address" ref="address" />
            <label htmlFor="address">Address</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddMeetup;
