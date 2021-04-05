import React from 'react';
import { Link } from 'react-router-dom';

import DefaultLayout from 'components/pages/shared/DefaultLayout';

const Home = () => (
  <DefaultLayout>
    <h1>Home page</h1>
    <p>This is the home page</p>
    <Link to="/article/10">View article</Link>
  </DefaultLayout>
);

export default Home;
