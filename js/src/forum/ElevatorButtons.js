/*jshint esversion: 6 */
/* (c) 2020 Star Inc.*/

import Dropdown from "flarum/components/Dropdown";
import Button from "flarum/components/Button";
import icon from "flarum/helpers/icon";

export default class ElevatorButtons extends Dropdown {
  view() {
    const inputBox = `<input type="text" value="輸入樓層" id="xygoInt" class="xygo-int" autocomplete="off" onfocus="if(value==defaultValue){value=\'\';}" onblur="if(!value){value=defaultValue;}">`;
    return (
      <div className="Dropdown ButtonGroup ElevatorMenu">
        <button
          title="Discusses Elevator"
          className="Dropdown-toggle Button"
          data-toggle="dropdown"
        >
          {icon("fas fa-caret-down", { className: "Button-icon" })} Elevator
        </button>

        <ul className="Dropdown-menu dropdown-menu Dropdown-menu--right">
          {inputBox}
        </ul>
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
