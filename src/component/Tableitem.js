import React from "react";

class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ArrayList: props.items,
      ownUpdate: true,
    };
    this.setUpdate = this.setUpdate.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (state.ownUpdate) {
      return {
        ArrayList: state.ArrayList,
        ownUpdate: false,
      };
    } else if (props.items !== state.ArrayList) {
      return {
        ArrayList: props.items,
      };
    }

    return null;
  }

  setUpdate(ele,key) {
    let newArray = [...this.state.ArrayList];

    const index = newArray.findIndex((i) => i.key === key);
    const newObj = {
      fname: newArray[index].fname,
      lname: newArray[index].lname,
      key: key,
    };

    if (ele.target.name === "fname") {
      newObj.fname = ele.target.value;
    }
    if (ele.target.name === "lname") {
      newObj.lname = ele.target.value;
    }
   
    console.log(newObj);
    newArray.splice(index, 1, newObj);
    this.setState({
      ArrayList: newArray,
      ownUpdate: true,
    });
  }

  updateItem(ele, key) {
   
    this.props.updateItem(this.state.ArrayList);
  }
  render() {
  
    return (
      <div>
        {this.state.ArrayList.map((item, index) => {
          return (
            <div className="list" key={item.key}>
              <p>
                <input
                  type="text"
                  value={item.fname}
                  name="fname"
                  onChange={(e) => {
                    this.setUpdate(e, item.key);
                  }}
                ></input>
                <input
                  type="text"
                  value={item.lname}
                  id={item}
                  name="lname"
                  onChange={(e) => {
                    this.setUpdate(e, item.key);
                  }}
                ></input>

                <button onClick={() => this.props.deleteItem(item.key)}>
                  Remove
                </button>
                <button
                  onClick={() => this.updateItem(item.key)}
                >
                  Edit
                </button>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListItems;
