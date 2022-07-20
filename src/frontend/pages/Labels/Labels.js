import {EditNoteCard,Header,NoteCard,Sidebar,Filter,} from "../../components";
  import { useNotes } from "../../context";
  import { FinalFilteredSortedItem } from "../../../utils/getFinalFilteredSortedItem";
import "./Labels.css"
const Labels = () => {
const {
    notesState: { notesList, editNote, isEditing },
    togglesidebar,
  } = useNotes();
  const FinalLabelsList = FinalFilteredSortedItem(notesList);

  const getLabels = (FinalLabelsList) => {
    return FinalLabelsList?.reduce((accum, curr) => {
      if (curr.tags.length > 0) {
        if (!accum.includes(curr.tags)) {
          return [...accum, curr.tags];
        } else {
          return [...accum];
        }
      } else {
        return [...accum];
      }
    }, []);
  };
  const labelList = getLabels(FinalLabelsList);

  return (
    <div class="home__wrapper">
      {isEditing && <EditNoteCard editNote={editNote} />}

      <Header />
      <Filter />
      <div className="main__wrapper">
      {togglesidebar ? <Sidebar /> : null}
        <div className="label__wrapper">
          {labelList?.length > 0?(
             labelList.map((list) => {
                return (
                  <div className="label-wrapper">
                    <h2>{list}</h2>

                    {FinalLabelsList?.filter((note) => note.tags === list).map(
                    (item) => (
                      <NoteCard note={item} />
                    )
                  )}
                </div>
              );
            })
          ) : (
            <p className="empty__lables">No Labels added!</p>
          )}
        </div>
        </div>
    </div>
  );};
export { Labels }