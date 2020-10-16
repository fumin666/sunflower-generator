export default {
  options(h, conf, key) {
    const list = []
    conf.__slot__.options.forEach(item => {
      if (conf.__config__.optionType === 'button') {
        list.push(<s-radio-button label={item.value}>{item.label}</s-radio-button>)
      } else {
        list.push(<s-radio label={item.value} border={conf.border}>{item.label}</s-radio>)
      }
    })
    return list
  }
}
