export default {
  'list-type': (h, conf, key) => {
    const list = []
    const config = conf.__config__
    if (conf['list-type'] === 'picture-card') {
      list.push(<i class="iconfont icon-plus"></i>)
    } else {
      list.push(<s-button size="small" icon="s-icon-upload">{config.buttonText}</s-button>)
    }
    if (config.showTip) {
      list.push(
        <div slot="tip" class="s-upload__tip">只能上传不超过 {config.fileSize}{config.sizeUnit} 的{conf.accept}文件</div>
      )
    }
    return list
  }
}
