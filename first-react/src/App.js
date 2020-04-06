import React from 'react';
import {Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Test from './components/Test'
import Course from './components/Course'
import List from './components/List'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Link to='/'>首页</Link> |
        <Link to='/about'>关于</Link> |
        <Link to='/aboutabc'>Test</Link> |
        <Link to='/course'>课程列表</Link> |
        <Link to='/course/1112'>课程详情</Link> |

      </div>
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/aboutABC' component={Test} />
        <Route path='/course/' component={List} />
        <Route path='/course/:id' component={Course} />
      </div>
    </div>
  );
}

export default App;
