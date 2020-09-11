/*jshint esversion: 6 */
/* (c) 2020 Star Inc.*/

import Dropdown from "flarum/components/Dropdown";
import Button from "flarum/components/Button";
import icon from "flarum/helpers/icon";

export default class ElevatorButtons extends Dropdown {
  view() {
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
          <div>
            <input
              id="level"
              type="text"
              placeholder="輸入樓層"
              autocomplete="off"
            />
            <button title="Go" className="Button" onclick={this.activeElevator}>
              {"Go "}
            </button>
          </div>
        </ul>
      </div>
    );
  }

  activeElevator(level) {
    let target = "";
    const data = this.props.discussion.data;
    if (level > 0) {
      const maxLevel = data.relationships.posts.length;
      if (level > maxLevel) target = maxLevel.toString();
      else target = level.toString();
    }
    location.href = `/${data.id}/${target}`;
  }
}
