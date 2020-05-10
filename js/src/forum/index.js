/*jshint esversion: 6 */
/* (c) 2020 Star Inc.*/

import app from 'flarum/app';
import Model from 'flarum/Model';
import Discussion from 'flarum/models/Discussion';

import ElevatorMenu from './ElevatorMenu';

app.initializers.add('elevator', function () {
    Discussion.prototype.elevator = Model.attribute('elevator');
    ElevatorMenu();
});