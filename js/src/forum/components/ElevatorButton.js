/*jshint esversion: 6 */
/* (c) 2020 Star Inc.*/

import Dropdown from "flarum/components/Dropdown";
import icon from "flarum/helpers/icon";

export default class ElevatorButton extends Dropdown {
  view() {
    const discussionData = this.props.discussion.data;
    const inputButtonLabel = app.translator.trans(
      "starinc-nex_elevator.forum.sub_controls.elevator_button"
    );
    const inputPlaceholderLabel = app.translator.trans(
      "starinc-nex_elevator.forum.sub_controls.level_input"
    );
    return (
      <div className="Dropdown ButtonGroup ElevatorMenu">
        <button
          title="Discusses Elevator"
          className="Dropdown-toggle Button"
          data-toggle="dropdown"
        >
          {icon("fas fa-arrows-alt-v", { className: "Button-icon" })}{" "}
          {inputButtonLabel}
        </button>

        <ul className="Dropdown-menu dropdown-menu Dropdown-menu--right">
          <div>
            <input
              id="elevator-level"
              type="text"
              placeholder={inputPlaceholderLabel}
              autocomplete="off"
            />
            <button
              title="Go"
              className="Button"
              onclick={this.activeElevator.bind(this, discussionData)}
            >
              {"Go"}
            </button>
          </div>
        </ul>
      </div>
    );
  }

  activeElevator(data) {
    let target = "";
    const strLevel = $("#elevator-level").val();
    let level = parseInt(strLevel);
    level--;
    if (level > 0) {
      const maxLevel = data.relationships.posts.length;
      if (level > maxLevel) target = maxLevel.toString();
      else target = level.toString();
    }
    location.replace(`/d/${data.id}/${target}`);
  }
}
