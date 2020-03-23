Vue.component('comment',{
   props:{
       comment:{
           type:Object,
           required:true
       }
   } ,
    template:`
        <div>
            <div class="card-body">
                <p> {{comment.username}}</p>
                <p> {{comment.content}}</p>
             </div>
             <hr>
            
        </div>
    `
});

var app = new Vue({
    el:'#id_main',
    data:{
        comments:[
            {username:'alice', content:'first_comment'},
            {username:'viv', content:'your mom'},
            {username:'lilly', content:'bhaw bhaw'},
            {username:'tesla', content:'tuzha gao'}
        ]
    },
    methods:{

    },
    computed:{

    }

});