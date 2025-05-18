"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, TrendingUp, Users, CreditCard } from "lucide-react";

export default function DashboardHome() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        {isLoading ? (
          <Skeleton className="h-10 w-[120px]" />
        ) : (
          <Button>
            View Reports
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {isLoading ? (
                  <Skeleton className="h-4 w-24" />
                ) : (
                  <>
                    {["Total Users", "Revenue", "Transactions", "Active Subs"][i]}
                    {[<Users />, <TrendingUp />, <CreditCard />, <Users />][i]}
                  </>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <>
                  <Skeleton className="h-8 w-24 mb-2" />
                  <Skeleton className="h-4 w-32" />
                </>
              ) : (
                <>
                  <p className="text-2xl font-bold">
                    {["12,543", "$45,312", "8,491", "1,204"][i]}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {["+3.2% from last week", "+5.1% this month", "+2.4% since yesterday", "Stable"][i]}
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Table Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>
              {isLoading ? <Skeleton className="h-5 w-40" /> : "Recent Payments"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            ) : (
              <div className="text-sm text-muted-foreground">
                Table component or payment list goes here.
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              {isLoading ? <Skeleton className="h-5 w-32" /> : "Recent Activity"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            {isLoading ? (
              <>
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
              </>
            ) : (
              <>
                <p>• John paid $100 – 2 hours ago</p>
                <p>• Jane subscribed – 5 hours ago</p>
                <p>• New user Mike joined – yesterday</p>
                <p>• Refund issued – 2 days ago</p>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
