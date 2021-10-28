import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
      <Link to='/profiles' className='btn btn-light'>
        <i className='fab fa-black-tie text-primary'/> List Employee
      </Link>
      <Link to='/approve-leave' className='btn btn-light'>
        <i className='fas fa-calendar-day' /> Leave Approval
      </Link>
    </div>
  );
};

export default DashboardActions;
