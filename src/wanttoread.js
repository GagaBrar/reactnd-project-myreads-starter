import React from 'react'
import * as BooksAPI from './BooksAPI'

class WantToRead extends React.Component {
   
    state={
        read :[]
    }   
    componentDidMount(){
        BooksAPI.getAll().then((allbooks)=> {
            console.log(allbooks);
            this.setState({read: allbooks})
        });
    }
    bookarrangement = (e) => {
        if(e.target.value === "wantToRead"){
      
          const wantToRead = (book)=>{
            BooksAPI.update(book, "wantToRead").then(()=>{
        this.setState({ shelf : "WanttoRead"})
            }
            )}}
      
             else if (e.target.value === "currentlyReading"){
              const currentlyReading = (book) => {
                BooksAPI.update(book, "currentlyReading").then(()=>{
                    this.setState({shelf: "currentlyReading"})
                })
            }
            
        }
        else if (e.target.value === "read"){
         const read = (book) => {
            BooksAPI.update(book, "read").then(() => {
                this.setState({shelf : "read"})
            })
        }
        }
        else if (e.target.value === "none"){
      
          const none =(book) => {
            BooksAPI.update(book, "None").then(() => {
                this.setState({shelf: "None"})
            })
      
        }
        }
      } 
    render(){
        return(
            <div className="bookshelf-books">
              <ol className="books-grid">
              {this.state.read.map((book, read) => {
                  if(book.shelf === "wantToRead"){
       return  <li key={read}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                      <div className="book-shelf-changer">
                        <select  onChange={this.bookarrangement} >
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
                             
                  }
             
          
              })}
        </ol>
        </div>
        )}}
    export default WantToRead