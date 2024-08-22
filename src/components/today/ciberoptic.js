import React, { Component } from 'react';

class ApiDataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
    };
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => this.setState({ users: data.data }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { users, error } = this.state;

    if (error) return <p>Error: {error.message}</p>;
    if (users.length === 0) return <p>Loading...</p>;

    return (
        
      <div className='ciberoptic'>
      <p className='ciberoptic_wrapper_text_title'>Сегодня</p>
        {users.map(user => (
            <div key={user.id} className='demo'>
                <h1 className='demo_name'> {/*{user.first_name}*/}</h1> 
                <p className='demo_ab'> {/*{user.id}*/}</p>
            </div>
         ))}
         {users.map(user => (
            <div key={user.id} className='optic'>
                <h1 className='optic_name'>{/*{user.first_name}*/}</h1>
                <p className='optic_ab'> {/*{user.id}*/}</p>
                <p className='optic_price'>{/*TJS {user.id}*/}</p>
            </div>
         ))}
         {users.map(user => (
            <div key={user.id} className='optic_result'>

            </div>
         ))}
         {users.map(user => (
            <div key={user.id} className='ciber'>

            </div>
         ))}
         {users.map(user => (
            <div key={user.id} className='opic_result_second'>

            </div>
         ))}
    </div>
    );
  }
}

export default ApiDataComponent;
