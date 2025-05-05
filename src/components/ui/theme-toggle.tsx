import { MoonIcon, Sun } from 'lucide-react';

import { Switch } from './switch';
import { useTheme } from '@/components/ui/theme-provider';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const handleTheme = () => {
    if (theme == 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className="flex ml-5 items-center gap-1">
      <Sun strokeWidth={2} size={15} />
      <Switch onClick={handleTheme} id="theme-toggle" />
      <MoonIcon strokeWidth={2} size={15} />
    </div>
  );
}
