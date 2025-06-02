"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ReactDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="my-6">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Interactive React Demo</CardTitle>
          <CardDescription>
            This is an example of an embedded React component in MDX.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCount(count - 1)}
            >
              -
            </Button>
            <span className="min-w-[3ch] text-center text-2xl font-bold">
              {count}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCount(count + 1)}
            >
              +
            </Button>
          </div>
          <Button
            variant="secondary"
            className="mt-4 w-full"
            onClick={() => setCount(0)}
          >
            Reset
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
