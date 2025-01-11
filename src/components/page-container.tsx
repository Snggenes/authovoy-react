import { cn } from "@/lib/utils";

export default function PageContainer({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("min-h-screen pt-16", className)}>
      {children}
    </div>
  );
}