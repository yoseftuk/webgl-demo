import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Vector} from "./math/vector";
import LinAlg from "./math/linalg";
import Matrix from "./math/matrix";
import add from "./math/tensors/add";
import variable from "./math/tensors/variable";
import times from "./math/tensors/times";
import substract from "./math/tensors/substract";
import divide from "./math/tensors/divide";
import placeholder from "./math/tensors/placeholder";
import Shader from "./gl-tools/shader";
import Drawer from "./gl-tools/drawer";
import Object3D from "./gl-tools/object-3d";
import Cube from "./gl-tools/cube";
import SquarePyramid from "./gl-tools/square-pyramid";
import TriangularPyramid from "./gl-tools/triangular-pyramid";
import Camera from "./gl-tools/camera";

function App() {

  const mat = new Matrix([
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6],
      [6, 7, 8, 9]
  ]);
  console.log(mat.multiply(Matrix.identity(4)));
  const cube1 = new Cube([
          [.3, .6, .9, 1],
          [.3, .9, .6, 1],
          [.6, .3, .9, 1],
          [.6, .9, .3, 1],
          [.9, .3, .6, 1],
          [.9, .6, .3, 1],
      ]);
  const cube2 = new SquarePyramid([
      [.3, .6, .9, 1],
      [.3, .9, .6, 1],
      [.6, .3, .9, 1],
      [.6, .9, .3, 1],
      [.9, .3, .6, 1],
  ]);
  const cube3 = new TriangularPyramid([
      [.3, .6, .9, 1],
      [.3, .9, .6, 1],
      [.6, .3, .9, 1],
      [.6, .9, .3, 1]
  ]);
  cube1.translate(.2, .2, .2);
  cube2.translate(-.3,  -.3, -.3);
  cube3.translate(.2, -.4, .1);
  return (
    <div className="App">
        <Drawer>
            {[cube1, cube2, cube3]}
        </Drawer>
    </div>
  );
}

export default App;
