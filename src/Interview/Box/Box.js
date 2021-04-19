import React from 'react';
import HorizontalItem from '../Horizontal-item/Horizontal-item';
import Item from '../Item/Item';

export default class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      counter: 0
    };
  }
  toggleSelectItem = (index) => {
    let counter = this.state.counter;
    this.setState({
      items: this.state.items.map((item, i) => {
        let result;
        if (i === index) {
          result = { ...item, selected: !item.selected };
        //   If item was select add 1 to the counter if was unselected substract one from the counter
          !item.selected
            ? this.setState({
                counter: counter + 1
              })
            : this.setState({
                counter: counter - 1
              });
        } else result = item;

        return result;
      })
    });
  };
  render = () => {
    const { bg, boxType, listName } = this.props;
    return (
      <div className='header-wrapper'>
        <div className={`header ${bg}`}>
          <h1>{listName}</h1>
          Counter: {this.state.counter}
        </div>
        <div className={`box ${boxType}`}>
          {this.state.items.map((item, i) => {
            const props = {
              id: i,
              onSelect: this.toggleSelectItem,
              item: item
            };
            /* Because each item of the horizontal box was inside an span I created a component for horizontal items, 
            and a component for a vertical items but it is possible to use only one component using css and the div tag for both of them,
             but because I didn't know if I could change it I created two different components  */
            return boxType === 'box-horizontal' ? (
              <HorizontalItem key={i} props={props} />
            ) : (
              <Item key={i} props={props} />
            );
          })}
        </div>
      </div>
    );
  };
}
