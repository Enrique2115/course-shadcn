import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Terminal } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="grid gap-3">
      <Alert>
        {/* <Terminal className="h-4 w-4" /> */}
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTitle>Oh snap!</AlertTitle>
        <AlertDescription>
          Change any of the text colors in{" "}
          <code className="font-mono font-bold">src/app/layout.tsx</code> to
          test how your theme changes across the application.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <AlertTitle>Well done!</AlertTitle>
        <AlertDescription>You can learn more about the .</AlertDescription>
      </Alert>
    </div>
  );
}
