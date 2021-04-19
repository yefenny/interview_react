function HorizontalItem(props) {
  const { id, item, onSelect } = props.props;
  return (
    <span
      onClick={() => onSelect(id)}
      className={`row-item row-item-horizontal ${
        item.selected ? `selected rounded` : ''
      }`}
    >
      {item.name}
    </span>
  );
}

export default HorizontalItem;
