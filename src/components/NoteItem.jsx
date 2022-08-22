import React from 'react';
import UpdateButton from './UpdateButton';
import DeleteButton from './DeleteButton';
import NoteItemBody from './NoteItemBody';
 
function NoteItem({ notes, onDelete, onUpdate}) {
  
  return (
    <div className="notes-list">
      {
         notes.length > 0?
         notes.map((note) => (
          <div className="note-item">
            <NoteItemBody title={note.title} body={note.body} createdAt={note.createdAt} />
            <div className='note-item__action'>
              <DeleteButton id={note.id} onDelete={onDelete} />
              <UpdateButton archived={note.archived} id={note.id} onUpdate={onUpdate}/>
            </div>
          </div>
        )): 
        <p className='notes-list__empty-message'>Tidak ada catatan</p>
      }
    </div>
  );
}
 
export default NoteItem;