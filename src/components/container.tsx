import { cn } from "@/lib/utils";

export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("max-w-[1400px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4", className)}>
      {children}
    </div>
  );
}