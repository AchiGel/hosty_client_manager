import * as Dialog from "@radix-ui/react-dialog";
import type { JSX, ReactNode } from "react";

interface AppModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: ReactNode;
  icon?: JSX.Element;
}

const AppModal = ({
  open,
  onOpenChange,
  title,
  children,
  icon,
}: AppModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
        <Dialog.Content
          className="
            fixed left-1/2 top-1/2 z-50 w-full max-w-lg
            -translate-x-1/2 -translate-y-1/2
            bg-white p-6 shadow-lg sm:rounded-lg
            duration-200
            data-[state=open]:animate-in
            data-[state=closed]:animate-out
          "
        >
          {title && (
            <Dialog.Title className="text-lg font-semibold leading-none tracking-tight flex items-center gap-2">
              {icon && icon}
              {title}
            </Dialog.Title>
          )}

          {children}

          <Dialog.Close asChild>
            <button className="absolute right-4 top-4 opacity-70 hover:opacity-100 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x h-4 w-4"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AppModal;
