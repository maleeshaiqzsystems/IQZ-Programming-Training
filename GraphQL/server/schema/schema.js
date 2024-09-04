const graphql = require('graphql');
const _ =require('lodash');

const { GraphQLObjectType,GraphQLString,GraphQLSchema } = graphql;

//dummy data
var books=[
    {name:'Name of the wind', genre:'Fantacy', id:'1'},
    {name:'The Fianl Empire', genre:'Fantacy', id:'2'},
    {name:'The Long Earch', genre:'Sci-Fi', id:'3'},
];

const BookType=new GraphQLObjectType({
    name: 'Book',
    fields:()=>({
        id: {type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                //code to get data from db/pother source
                return _.find(books,{id:args.id});
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery 
});