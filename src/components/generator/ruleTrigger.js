/**
 * 用于生成表单校验，指定正则规则的触发方式。
 * 未在此处声明无触发方式的组件将不生成rule！！
 */
export default {
  's-input': 'blur',
  's-input-number': 'blur',
  's-select': 'change',
  's-radio-group': 'change',
  's-checkbox-group': 'change',
  's-cascader': 'change',
  's-time-picker': 'change',
  's-date-picker': 'change',
  's-rate': 'change',
  tinymce: 'blur'
}
