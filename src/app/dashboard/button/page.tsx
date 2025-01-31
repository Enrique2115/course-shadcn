"use client";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";

export default function NamePage() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button onClick={() => console.log("Hola mundo")}>Click Me</Button>
      <Button variant="success">Success</Button>
      <Button capitalize={false}>capitalized false</Button>

      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login Email
      </Button>

      <Button disabled>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
