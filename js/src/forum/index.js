/*jshint esversion: 6 */
/* (c) 2020 Star Inc.*/

import addElevatorButton from "./addElevetorButton";
import addDisplayPostLevel from "./addDisplayPostLevel";

app.initializers.add("elevator", function () {
  addElevatorButton();
  addDisplayPostLevel();
});
