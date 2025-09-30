import { Card, CardHeader, CardContent } from "@/src/ui-kit/shadcn/card";
import { Skeleton } from "@/src/ui-kit/shadcn/skeleton";

export const ApiListSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <section
      aria-label="Posts loading"
      aria-busy="true"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="flex h-full flex-col transition-shadow hover:shadow">
          <CardHeader>
            <Skeleton className="h-5 w-40" />
          </CardHeader>
          <CardContent className="flex-1 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-3/5" />
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
