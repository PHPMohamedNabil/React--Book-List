import React,{useContext} from 'react';
import swal from  '@sweetalert/with-react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext);
    const removeBook = ()=>{
        swal({
            title: "Are you sure?",
            text: "Delete This Book from List?",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
                dispatch({type:'REMOVE_BOOK',id:book.id});
              swal("Deleted!", "Your imaginary file has been deleted!", "success");
            }
          });
        
    }
    return (  
        <li onClick={removeBook}>
            <div className="title">
                 {book.title}
            </div>
            <div className="author">
              <cite>{book.author}</cite>
            </div>
            <div className="page_num">
               <small>{book.page_num} Page</small>
            </div>
        </li>
    );
}
 
export default BookDetails;