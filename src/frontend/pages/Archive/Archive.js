import { ColorPalette, Filter, Header, NoteCard, Sidebar,EditNoteCard } from "../../components";
import { useNotes } from "../../context";
import "./Archive.css"
const Archive = () =>{
    const {notesState:{archiveList,editNote,isEditing}} =useNotes()
    return (
        <div class="home__wrapper">
            {isEditing&&<EditNoteCard editNote={editNote}/>}
        <Header />
        <Filter/>
        <div className="main__wrapper">
          <Sidebar />
          <div className="trash__wrapper">
          {archiveList?.length === 0 && <p className="empty__lables">No Archives added!</p>}
              {archiveList?.map((note)=>
              <NoteCard key={note._id} note={note}/>)}


        </div>

      </div>
      </div>
    )
}
export {Archive} 