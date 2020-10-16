export default {
  options(h, conf, key) {
    const list = []
    conf.__slot__.options.forEach(item => {
      if (conf.__config__.optionType === 'button') {
        list.push(<s-checkbox-button label={item.value}>{item.label}</s-checkbox-button>)
      } else {
        list.push(<s-checkbox label={item.value} border={conf.border}>{item.label}</s-checkbox>)
      }
    })
    return list
  }
}
