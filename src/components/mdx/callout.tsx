import { cn } from '@/lib/utils'
import { InfoIcon, AlertTriangle, CheckCircle2 } from 'lucide-react'

type CalloutType = 'info' | 'warning' | 'success'

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: React.ReactNode
}

const icons = {
  info: InfoIcon,
  warning: AlertTriangle,
  success: CheckCircle2,
}

const styles = {
  info: 'bg-sky/10 border-sky/20 text-sky dark:bg-azure/10 dark:border-azure/20 dark:text-azure',
  warning:
    'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400',
  success:
    'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400',
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const Icon = icons[type]

  return (
    <div
      className={cn('my-6 flex gap-2.5 rounded-lg border p-4', styles[type])}
    >
      <Icon className="mt-1 h-5 w-5 flex-shrink-0" />
      <div>
        {title && <p className="mb-1 font-medium">{title}</p>}
        <div>{children}</div>
      </div>
    </div>
  )
}
