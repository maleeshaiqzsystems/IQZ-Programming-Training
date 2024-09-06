const graphql = require('graphql');
const _ =require('lodash');

const { GraphQLObjectType,GraphQLString,GraphQLInt,GraphQLList,GraphQLID,GraphQLSchema } = graphql;

//dummy data
var books=[
    {name:'Name of the wind', genre:'Fantacy', id:'1', authorid:'1'},
    {name:'The Fianl Empire', genre:'Fantacy', id:'2',authorid:'2'},
    {name:'The Long Earch', genre:'Sci-Fi', id:'3',authorid:'3'},
    {name:'The Hero of Ages', genre:'Fantacy', id:'4', authorid:'2'},
    {name:'The colour of Magic', genre:'Fantacy', id:'5',authorid:'3'},
    {name:'The Light Fantastic', genre:'Fantacy', id:'6',authorid:'3'},
];

var authors=[
    {name:'Patrick Rothfuss',age:44,id:'1'},
    {name:'Brandon Sanderson',age:42,id:'2'},
    {name:'Terry Pratchett',age:66,id:'3'},
];

const BookType=new GraphQLObjectType({
    name: 'Book',
    fields:()=>({
        id: {type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        author:{
            type:AuthorType,
            resolve(parent,args){
               return _.find(authors,{id:parent.authorid});
            }
        }
    })
});

const AuthorType=new GraphQLObjectType({
    name: 'Author',
    fields:()=>({
        id: {type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        books:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                return _.filter(books,{authorid:parent.id})
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                //code to get data from db/pother source
                return _.find(books,{id:args.id});
            }
        },

        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return _.find(authors,{id:args.id});
            }

        },

        books:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                return books
            }
        },

        authors:{
            type:new GraphQLList(AuthorType),
            resolve(parent,args){
                return authors
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery 
});