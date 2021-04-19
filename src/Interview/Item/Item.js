function Item(props) {
  const { id, item, onSelect } = props.props;
  return (
    <div
      onClick={() => onSelect(id)}
      className={`row-item ${item.selected ? `selected ` : ''}`}
    >
      {item.name}
    </div>
  );
}

export default Item;
