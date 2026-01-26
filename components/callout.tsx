import { AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { cn } from '@/lib/utils';

interface CalloutProps {
  title?: string;
  children: React.ReactNode;
  type?: 'default' | 'warning' | 'danger' | 'success';
}

export function Callout({ title, children, type = 'default' }: CalloutProps) {
  const icons = {
    default: Info,
    warning: AlertTriangle,
    danger: XCircle,
    success: CheckCircle,
  };

  const Icon = icons[type];

  return (
    <Alert
      variant={type === 'danger' ? 'destructive' : 'default'}
      className={cn(
        'mt-6 mb-6',
        type === 'warning' &&
          'border-yellow-500/50 text-yellow-700 dark:text-yellow-300 [&>svg]:text-yellow-500 dark:[&>svg]:text-yellow-400',
        type === 'success' &&
          'border-green-500/50 text-green-700 dark:text-green-300 [&>svg]:text-green-500 dark:[&>svg]:text-green-400',
      )}
    >
      <Icon className="h-4 w-4" />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
