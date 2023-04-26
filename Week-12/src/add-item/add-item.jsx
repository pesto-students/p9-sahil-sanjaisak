import "./add-item.css";
export default function AddItem(prop) {
  return (
    <div className="addItemContainer">
      <input type="text" name="addItem" id="addItem" />
      <button
        onClick={() => {
          const addItemInput = document.getElementById("addItem").value;
          if (addItemInput) {
            prop.setLists((list) => [
              ...list,
              {
                content: addItemInput,
                name: "items 4",
                notCompleted: true,
              },
            ]);
          }
        }}
      >
        add new item
      </button>
    </div>
  );
}
