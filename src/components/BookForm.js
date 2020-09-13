import React, { useContext,useState} from 'react';
import swal from  '@sweetalert/with-react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
   const {dispatch} = useContext(BookContext);
   const [title,setTitle] = useState('');
   const [author,setAuthor] = useState('');
   const [page_num,setPageNum] = useState('');
    
   const handelSubmit = (e)=>{
       e.preventDefault();
       if(title ==='' || author ==='')
       {
        swal("Where", "Please Enter The full book data", "warning");
         return false;
       }
       if(page_num ==='')
       {
        swal("Where", "Please Enter The full book Page Numbers", "warning");
        return false;
       }
       dispatch({type:'ADD_BOOK',book:{
        title,author,page_num
       }});
       setTitle('');
       setAuthor('');
       setPageNum('');
   }
    return ( 
          <form onSubmit={handelSubmit}>
            <input type="text" required="" placeholder="book title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" required="" placeholder="author name" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
            <input type="number" required="" step="1" min="1" placeholder="number of pages" value={page_num} onChange={(e)=>setPageNum(e.target.value)}/>
            &nbsp;
            <small>{page_num} page</small>
            <input type="submit" value="add book"/>
          </form>
     );
}
 
export default BookForm;