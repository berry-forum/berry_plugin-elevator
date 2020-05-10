/*jshint esversion: 6 */
/* (c) 2020 Star Inc.*/

import Dropdown from 'flarum/components/Dropdown';
import Button from 'flarum/components/Button';
import icon from 'flarum/helpers/icon';

export default class ElevatorMenu extends Dropdown {
    view() {
        return (
            <div className="Dropdown ButtonGroup SubscriptionMenu">
              {Button.component(buttonProps)}
      
              <button className={'Dropdown-toggle Button Button--icon ' + buttonClass} data-toggle="dropdown">
                {icon('fas fa-caret-down', {className: 'Button-icon'})}
              </button>
      
              <ul className="Dropdown-menu dropdown-menu Dropdown-menu--right">
                  TEST
              </ul>
            </div>
          );
    }
}