/*jshint esversion: 6 */
/* (c) 2020 Star Inc.*/

import Dropdown from "flarum/components/Dropdown";
import Button from "flarum/components/Button";
import icon from "flarum/helpers/icon";

export default class ElevatorButtons extends Dropdown {
  view() {
    const buttonProps = {
      className: "Dropdown-toggle Button",
      icon: "fas fa-caret-down",
      children: "Elevator",
      title: "Discusses Elevator",
    };
    return (
      <div className="Dropdown ButtonGroup ElevatorMenu">
        {Button.component(buttonProps)}
      </div>
    );
  }

  activeElevator(level) {
    let uriArray = location.href.split("/");
    if (uriArray.length == 6) uriArray.pop();
    if (level > 0) uriArray.push(level.toString());
    location.href = uriArray.join("/");
  }
}
