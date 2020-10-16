export default {
  options(h, conf, key) {
    const list = []
    conf.__slot__.options.forEach((item, index) => {
      list.push(<s-table-column
      label={item.label} prop={item.prop}>
        </s-table-column>)
    })
    return list
  }
}
