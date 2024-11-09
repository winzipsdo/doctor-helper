import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useNavigate, createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { useState, useRef, useEffect } from 'react';
import GithubIcon from '@/assets/github.svg';

const navigationRoutes = [{ label: '🏠 Home', path: '/home' }];

const toolRoutes = [
  { label: '🏥 新生儿 Apgar 评分', path: '/apgar-score' },
  { label: '🧠 小儿心率参考值', path: '/heart-rate' },
];

export const Route = createRootRoute({
  component: () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      const handleCustomCommand = () => {
        setOpen(true);
        setShowSearch(false);
        setTimeout(() => inputRef.current?.focus(), 0);
      };

      document.addEventListener('toggleCommand', handleCustomCommand);
      return () =>
        document.removeEventListener('toggleCommand', handleCustomCommand);
    }, []);

    return (
      <>
        <div className="p-2 flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="flex-1 justify-between text-sm text-muted-foreground border rounded-md px-4 py-3"
          >
            More tools...
          </button>

          <a
            href="https://github.com/winzipsdo/doctor-helper"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:text-gray-600 transition-colors"
            title="View on GitHub"
          >
            <img src={GithubIcon} alt="GitHub" width={24} height={24} />
          </a>
        </div>

        <CommandDialog
          open={open}
          onOpenChange={(open) => {
            setOpen(open);
            if (!open) setShowSearch(false);
          }}
        >
          <Command className="w-full sm:w-[400px] touch-manipulation rounded-lg">
            {showSearch ? (
              <CommandInput ref={inputRef} placeholder="Type to search..." />
            ) : (
              <div
                className="p-4 text-sm text-center text-muted-foreground cursor-pointer hover:text-foreground"
                onClick={() => {
                  setShowSearch(true);
                  setTimeout(() => inputRef.current?.focus(), 0);
                }}
              >
                Click to search tools...
              </div>
            )}
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Navigation">
                {navigationRoutes.map((route) => (
                  <CommandItem
                    key={route.path}
                    onSelect={() => {
                      navigate({ to: route.path });
                      setOpen(false);
                    }}
                  >
                    {route.label}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup heading="Tools">
                {toolRoutes.map((route) => (
                  <CommandItem
                    key={route.path}
                    onSelect={() => {
                      navigate({ to: route.path });
                      setOpen(false);
                    }}
                  >
                    {route.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
        <hr />
        <Outlet />
        {import.meta.env.DEV && <TanStackRouterDevtools />}
      </>
    );
  },
});
