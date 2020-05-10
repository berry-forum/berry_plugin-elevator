/*jshint esversion: 6 */
/* (c) 2020 Star Inc.*/

import Dropdown from 'flarum/components/Dropdown';
import Button from 'flarum/components/Button';
import icon from 'flarum/helpers/icon';

export default class ElevatorMenu extends Dropdown {
  init() {
    this.options = [
      {
        subscription: false,
        icon: 'far fa-star',
        label: app.translator.trans('starinc-kater_elevator.forum.sub_controls.not_following_button'),
        description: app.translator.trans('starinc-kater_elevator.forum.sub_controls.not_following_text')
      }
    ];
  }

  view() {
    const discussion = this.props.discussion;
    const subscription = discussion.subscription();

    let buttonLabel = app.translator.trans('starinc-kater_elevator.forum.sub_controls.follow_button');
    let buttonIcon = 'far fa-star';
    const buttonClass = 'SubscriptionMenu-button--' + subscription;


    const buttonProps = {
      className: 'Button SubscriptionMenu-button ' + buttonClass,
      icon: buttonIcon,
      children: buttonLabel,
      title: title
    };

    return (
      <div className="Dropdown ButtonGroup SubscriptionMenu">
        {Button.component(buttonProps)}

        <button className={'Dropdown-toggle Button Button--icon ' + buttonClass} data-toggle="dropdown">
          {icon('fas fa-caret-down', {className: 'Button-icon'})}
        </button>

        <ul className="Dropdown-menu dropdown-menu Dropdown-menu--right">
          {this.options.map(props => {
            props.onclick = this.saveSubscription.bind(this, discussion, props.subscription);
            props.active = subscription === props.subscription;
          })}
        </ul>
      </div>
    );
  }

  saveSubscription(discussion, subscription) {
    discussion.save({subscription});

    this.$('.SubscriptionMenu-button').tooltip('hide');
  }
}
