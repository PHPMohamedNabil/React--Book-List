import {v1 as uuid1} from 'uuid';

export const bookReducer = (state,action) =>{

    switch(action.type){
       case 'ADD_BOOK':
           return [...state,{
                title:action.book.title,
                author:action.book.author,
                page_num:action.book.page_num,
                id:uuid1()
           }];
        case 'REMOVE_BOOK':
           return state.filter(book =>{ return book.id !== action.id } );
        default:
            return state;
    }

}

export default bookReducer;