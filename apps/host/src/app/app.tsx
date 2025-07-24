import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const DesignSystem = React.lazy(() => import('design-system/Module'));

const Project1 = React.lazy(() => import('project1/Module'));
const Project2 = React.lazy(() => import('project2/Module'));
const Module1 = React.lazy(() => import('module1/Module'));
const Module2 = React.lazy(() => import('module2/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/design-system">DesignSystem</Link>
        </li>
        <li>
          <Link to="/project1">Project1</Link>
        </li>
        <li>
          <Link to="/project2">Project2</Link>
        </li>
        <li>
          <Link to="/module1">Module1</Link>
        </li>
        <li>
          <Link to="/module2">Module2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/module1" element={<Module1 />} />
        <Route path="/module2" element={<Module2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
