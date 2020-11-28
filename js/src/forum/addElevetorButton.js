/*jshint esversion: 6 */
/* (c) 2020 Star Inc.*/

import { extend } from "flarum/extend";
import DiscussionPage from "flarum/components/DiscussionPage";

import ElevatorButtons from "./components/ElevatorButton";

export default function () {
    extend(DiscussionPage.prototype, "sidebarItems", function (items) {
        if (app.session.user) {
            const discussion = this.discussion;

            items.add("elevator", ElevatorButtons.component({ discussion }));
        }
    });
}
