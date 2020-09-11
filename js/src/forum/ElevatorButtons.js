/*jshint esversion: 6 */
/* (c) 2020 Star Inc.*/

import Dropdown from "flarum/components/Dropdown";
import Button from "flarum/components/Button";
import icon from "flarum/helpers/icon";

export default class ElevatorButtons extends Dropdown {
  view() {
    const buttonProps = {
      className: "Dropdown-toggle Button Button--icon  ",
      icon: "fas fa-caret-down",
      children: "Elevator",
      onclick: this.test,
      title: "Discusses Elevator",
    };
    return (
      <div className="Dropdown ButtonGroup ElevatorMenu">
        {Button.component(buttonProps)}
      </div>
    );
  }

  test() {
    alert("Test Message");
  }
}
