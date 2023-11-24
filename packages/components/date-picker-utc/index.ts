import DatePicker from './src/date-picker'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils'

const _DatePickerUtc = DatePicker as SFCWithInstall<typeof DatePicker>

_DatePickerUtc.install = (app: App) => {
  app.component(_DatePickerUtc.name, _DatePickerUtc)
}

export default _DatePickerUtc
export const ElDatePickerUtc = _DatePickerUtc
