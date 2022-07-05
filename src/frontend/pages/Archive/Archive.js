import { ColorPalette, Filter, Header, NoteCard, Sidebar,EditNoteCard } from "../../components";
import { useNotes } from "../../context";
import { FinalFilteredSortedItem } from "../../../utils/getFinalFilteredSortedItem";
import "./Archive.css"
const Archive = () =>{
    const {notesState:{archiveList,editNote,isEditing},togglesidebar} =useNotes()
    const FinalArchiveList=FinalFilteredSortedItem(archiveList)
    return (
        <div class="home__wrapper">
            {isEditing&&<EditNoteCard editNote={editNote}/>}
        <Header />
        <Filter/>
        <div className="main__wrapper">
          {togglesidebar ?<Sidebar />:null}
          <div className="trash__wrapper">
          {FinalArchiveList?.length === 0 && <p className="empty__lables">No Archives added!</p>}
              {FinalArchiveList?.map((note)=>
              <NoteCard key={note._id} note={note}/>)}


        </div>

      </div>
      </div>
    )
}
export {Archive} 