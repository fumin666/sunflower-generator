export default {
  options(h, conf, key) {
    const list = []
    conf.__slot__.options.forEach(item => {
      list.push(<s-option label={item.label} value={item.value} disabled={item.disabled}></s-option>)
    })
    return list
  }
}
