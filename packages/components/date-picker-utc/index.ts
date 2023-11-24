import DatePicker from './src/date-picker'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils'

const _DatePickerUTC = DatePicker as SFCWithInstall<typeof DatePicker>

_DatePickerUTC.install = (app: App) => {
  app.component(_DatePickerUTC.name, _DatePickerUTC)
}

export default _DatePickerUTC
export const ElDatePickerUTC = _DatePickerUTC
