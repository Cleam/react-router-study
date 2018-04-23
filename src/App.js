import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const Home = () => <h2>Home</h2>;

const About = () => <h2>About</h2>;

// const Topic = topicId => <h3>{topicId}</h3>;

const Topic = ({ match }) => {
  return <h3>{match.params.topicId}</h3>;
};

const Topics = ({ match }) => {
  const items = [
    { name: 'Rendering with React', slug: 'rendering' },
    { name: 'Components', slug: 'components' },
    { name: 'Props v. State', slug: 'props-v-state' }
  ];
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {items.map(({ name, slug }) => (
          <li key={name}>
            <Link to={`${match.url}/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={`${match.url}`}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    );
  }
}

export default App;
