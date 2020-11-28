/*jshint esversion: 6 */
/* (c) 2020 Star Inc.*/

import { extend } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';

export default function () {
    extend(CommentPost.prototype, 'headerItems', function (items) {
        const post = this.props.post;
        const level = post.data.attributes.number;
        const levelLabel = app.translator.trans(
            "starinc-nex_elevator.forum.level"
        );
        items.add('level', <div className="ElevatorLevel">{ level } { levelLabel }</div>);
    });
}
