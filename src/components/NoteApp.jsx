import React from 'react';
import { getInitialData } from '../utils/index';
import NoteInput from './NoteInput';
import SearchInput from './SearchInput';
import NoteItem from './NoteItem';

class NoteApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        notes:getInitialData(),
        searchData:''
      }

      this.onDeleteHandler = this.onDeleteHandler.bind(this);
      this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
      this.onUpdateNoteHandler = this.onUpdateNoteHandler.bind(this);
      this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
      const notes = this.state.notes.filter(note => note.id !== id);
      this.setState({ notes });
    }
    
    onAddNoteHandler({ title, body }) {
      this.setState((prevState) => {
        return {
          notes: [
            ...prevState.notes,
            {
              id: +new Date(),
              title,
              body,
              createdAt: new Date(),
              archived: false
            }
          ]
        }
      });
    }

    onUpdateNoteHandler(id) {
      const notes = this.state.notes.map(note => note.id === id ? { ...note, archived: !note.archived } : note);
      this.setState({ notes });
    }

    onSearchNoteHandler(search){
      this.setState({searchData:search});
    }

 render(){
    const regex = new RegExp(this.state.searchData, "i");
    const archived = this.state.searchData ? this.state.notes.filter(v=>v.title.search(regex)>-1&&v.archived) : this.state.notes.filter(v=>v.archived);
    const actived = this.state.searchData ? this.state.notes.filter(v=>v.title.search(regex)>-1&&!v.archived)  :this.state.notes.filter(v=>!v.archived);

    return (
       <>
       <div className="note-app__header">
         <h1>Daftar Kontak</h1>
         <SearchInput searchNote={this.onSearchNoteHandler}/>
       </div>
       <div className='note-app__body'> 
        <NoteInput addNote={this.onAddNoteHandler}/>
        <h2>Catatan Aktif</h2>
        <NoteItem notes={actived} key={actived.id} onDelete={this.onDeleteHandler} onUpdate={this.onUpdateNoteHandler}/>
        
        <h2>Arsip</h2>  
        <NoteItem notes={archived} key={archived.id} onDelete={this.onDeleteHandler} onUpdate={this.onUpdateNoteHandler}/>
       </div>
       </>
    )
}
}
 
export default NoteApp;