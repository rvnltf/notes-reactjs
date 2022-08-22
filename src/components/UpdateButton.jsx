import React from 'react';
     
function ArchiveButton({ archived, id, onUpdate }) {
  return <button className='note-item__archive-button' onClick={() => onUpdate(id)}>{archived?'Pindahkan':'Arsipkan'}</button>
}
 
export default ArchiveButton;