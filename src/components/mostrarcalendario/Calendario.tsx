import { ChangeEvent } from 'react'
import * as S from '../../assets/styles/global-styles'

type CalendarDashboards = {
  setDate: (date: Date) => void
}
function dateHelperThisMonth(): Date {
  return new Date()
}
export function CalendarDashboard({ setDate }: CalendarDashboards) {
  const changeInterval = (event: ChangeEvent<HTMLSelectElement>) => {
    const interval = Number(event.target.value)
    setDate(interval === 0 ? dateHelperThisMonth() : dateHelperThisMonth())
  }
  return (
    <div>
      <S.CalendarDashboardStyle>
        <S.Calendar />
        <span>Mostrar:</span>
        <select onChange={changeInterval} name="" id="">
          <option value={0}>Este mês</option>
          <option value={30}>30 dias</option>
          <option value={60}>60 dias</option>
          <option value={90}>90 dias</option>
          <option value={120}>120 dias</option>
        </select>
      </S.CalendarDashboardStyle>
    </div>
  )
}
