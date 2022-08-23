import React from 'react';
     
class NoteInput extends React.Component {constructor(props) {
    super(props);
  
    // inisialisasi state
    this.state = {
      title: '',
      body: '',
      karakter: 50,
      input: 50
    }
  
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onNoteChangeEventHandler = this.onNoteChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  
  onTitleChangeEventHandler(event) {
    if (event.target.value.length <= this.state.karakter) {
      this.setState((previousState) => {
      return {
        title: event.target.value,
        input:previousState.karakter-event.target.value.length
      }
    });      
    }
  }
  
  onNoteChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
    if (!this.state.title) {
      this.setState({
        titleNone: 'Title tidak boleh kosong!'
      })
    }
    if (!this.state.body) {
      this.setState({
        bodyNone: 'Body tidak boleh kosong!'
      })
    }
    if (this.state.title && this.state.body) {
      this.props.addNote(this.state);
      this.setState(() => {
        return {
          title: '',
          body:''
        }
      });
    }
  }
 render() {
   return (
    <>
     <form className='note-input' onSubmit={this.onSubmitEventHandler}>
        <h2>Catatan Aktif</h2> 
        <p className='note-input__title__char-limit'>Sisa karakter: {this.state.input}</p>
        <input type="text" placeholder="Ini adalah title..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <div className='note-alert'>{this.state.titleNone}</div>
        <textarea placeholder="Tuliskan bodymu disini..." onChange={this.onNoteChangeEventHandler} value={this.state.body}/>
        <div className='note-alert'>{this.state.bodyNone}</div>
        <button type="submit">Buat</button>
     </form>
    </>
   )
 }
}
 
export default NoteInput;