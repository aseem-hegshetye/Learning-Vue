Vue.component('comment-list', {
    props: {
        comments: {
            type: Array,
            required: true
        }
    },
    data: function () {
        return {
            new_comment: null,
            comment_author: null,
            error: null
        }
    },
    methods: {
        submitComment() {
            if (this.comment_author && this.new_comment) {
                this.$emit('submit-comment', {
                    username: this.comment_author,
                    content: this.new_comment
                });
                this.new_comment = null;
                this.comment_author = null;
                this.error = null;
            }
            else {
                this.error="Fields are blank";
            }

        }
    },
    template: `
    <div class="mt-2"> 
        <comment
            v-for="(comment,index) in comments" v-bind:comment="comment"
            :key="index">
        </comment>
        <h3>{{error}}</h3>
        
        <form @submit.prevent="submitComment" class="mt-8">
        <div class="form-group">
            <input type="text" class="form-control"
                   placeholder="author name"
                    v-model="comment_author">
        </div>

        <div class="form-group">
            <textarea id="id_comment" cols="30" rows="5"
                    v-model="new_comment" placeholder="Comment">

            </textarea>
        </div>

        <button class="btn btn-primary" type="submit">Submit</button>
    </form>
    
    </div>  
        
    `

});

Vue.component('comment', {
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
    template: `
        <div class="mb-2">
        <div class="card">
            <div class="card-header">
            <p> Published by : {{comment.username}}</p>
            </div>
            
            <div class="card-body">
                <p> {{comment.content}}</p>
             </div>
        </div>    
        </div>
    `
});

var app = new Vue({
    el: '#id_main',
    data: {
        comments: [
            {username: 'alice wonde', content: 'first_comment'},
            {username: 'viv', content: 'your mom'},
            {username: 'lilly', content: 'bhaw bhaw'},
            {username: 'tesla', content: 'tuzha gao'}
        ]
    },
    methods: {
        addNewComment(comment) {
            this.comments.push(comment);
        }
    },
    computed: {}

});