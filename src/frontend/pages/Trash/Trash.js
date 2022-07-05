import {  Filter, Header, TrashCard, Sidebar } from "../../components";
import { useNotes } from "../../context";
import { FinalFilteredSortedItem } from "../../../utils/getFinalFilteredSortedItem";
import "./Trash.css"

const Trash = () =>{
    const {
        notesState: { trashList },
        togglesidebar,
        searchItem,
      } = useNotes();
      const FinalTrashList = FinalFilteredSortedItem(trashList);
    
    return (
        <div class="home__wrapper">
              <Header />
              <Filter/>
              <div className="main__wrapper">
              {togglesidebar ? <Sidebar /> : null}
                <div className=" trash__wrapper">
          {FinalTrashList?.map((note) => (
            <TrashCard key={note._id} note={note} />
          ))}
          {FinalTrashList?.length === 0 && (
            <p className="empty__lables">No Trash added!</p>
          )}
        </div>

            </div>
            </div>
    )
}
export {Trash} 