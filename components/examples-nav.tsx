'use client';


import {
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from '@/components/ui/menubar';

const examples = [
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    name: 'Cards',
    href: '/cards',
  },
  {
    name: 'Tasks',
    href: '/tasks',
  },
  {
    name: 'Playground',
    href: '/playground',
  },
  {
    name: 'Forms',
    href: '/forms',
  },
  {
    name: 'Music',
    href: '/music',
  },
  {
    name: 'Authentication',
    href: '/authentication',
  },
];

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  return (
    <MenubarMenu>
      <MenubarTrigger>
        <span className='rounded-md bg-cyan-500 px-1.5 py-0.5 text-xs font-medium leading-none text-[#000000] no-underline group-hover:no-underline'>
          nav
        </span>
        Samples
      </MenubarTrigger>
      <MenubarContent forceMount>
        <MenubarRadioGroup value="path">
          {examples.map((example) => (
            <a href={example.href} key={example.name}>
              <MenubarRadioItem value={example.href}>
                {example.name}
              </MenubarRadioItem>
            </a>
          ))}
        </MenubarRadioGroup>
      </MenubarContent>
    </MenubarMenu>
  );
}
