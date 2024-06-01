import { Badge } from "@/components/ui/badge";

import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";

export default function BadgePage() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Badge variant="default">Badge default</Badge>
      <Badge variant="secondary">Badge secondary</Badge>
      <Badge variant="outline">Badge outline</Badge>
      <Badge variant="destructive">Badge destructive</Badge>

      <Badge capitalize={true} variant="info">
        badge info capitalize
      </Badge>

      <Link className={badgeVariants({ variant: "success" })} href="/">
        Badge Link Success
      </Link>
    </div>
  );
}
