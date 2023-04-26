import "./items-list.css";

export default function ItemsList(prob) {
  return (
    <>
      <h3>Pending Tasks</h3>
      <div className="list-container">
        {prob.list
          .filter((item) => item.notCompleted === true)
          .map((item) => (
            <div className="item" key={item.name}>
              <div>
                <input
                  name={item.name}
                  type="checkbox"
                  onClick={(e) => {
                    prob.setLists((list) =>
                      list.map((i) => {
                        if (i.name === e.target.name) {
                          i.notCompleted = false;
                        }
                        return i;
                      })
                    );
                  }}
                />
              </div>
              <div>{item.content}</div>
            </div>
          ))}
      </div>
      <hr />
      <h3>Completed Tasks</h3>
      <div className="list-container">
        {prob.list
          .filter((item) => item.notCompleted === false)
          .map((item) => (
            <div className="item" key={item.name}>
              <div>{item.content}</div>
            </div>
          ))}
      </div>
    </>
  );
}
