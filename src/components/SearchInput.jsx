import React from 'react';
     
class SearchInput extends React.Component {constructor(props) {
    super(props);
  
    // inisialisasi state
    this.state = {
      search: '',
    }
  
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }
  
  onSearchEventHandler(event) {
    this.props.searchNote(event.target.value); 
    this.setState(() => {
      return {
        search: event.target.value,
      }
    });
  }
  
 render() {
  return (
    <>
      <form className="note-search"  onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Cari catatan..." value={this.state.search} onChange={this.onSearchEventHandler} />
      </form>
    </>
  );
 }
}
 
export default SearchInput;