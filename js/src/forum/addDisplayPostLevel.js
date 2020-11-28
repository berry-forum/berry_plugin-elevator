/*jshint esversion: 6 */
/* (c) 2020 Star Inc.*/

import { extend } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';

export default function () {
    extend(CommentPost.prototype, 'headerItems', function (items) {
        const post = this.props.post;
        const level = post.data.attributes.number;
        console.log(post, level);
        items.add('level', <div className="ElevatorLevel">{ level }</div>);
    });
}
