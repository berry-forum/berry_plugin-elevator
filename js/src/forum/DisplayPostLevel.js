import { extend } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';

export default function () {
    extend(CommentPost.prototype, 'headerItems', function (items) {
        const post = this.props.post;
        console.log(post);
        items.add('level', <div>TEST</div>);
    });
}
