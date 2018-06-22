import React from 'react'
import Reading from './Currently'
import WantToRead from './wanttoread'
import Read from './read'


class BookShelf extends React.Component {      
    render() {
        return(
            <div>
            <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div>
            <Reading/>
            
            </div>
            </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div>
                <WantToRead/>
            </div>
           </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
           <div>
               <Read/>
           </div>
          </div>
          <div></div>
        </div>
        )
    }
}

export default BookShelf