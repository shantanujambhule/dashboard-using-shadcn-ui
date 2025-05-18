"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sampleData = [
  "JavaScript Tutorial",
  "React Hooks Explained",
  "Tech Trends 2025",
  "AI in 2025",
  "Next.js Best Practices",
  "How to build a dashboard",
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const filtered = sampleData.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Search</h1>

      <div className="flex gap-2">
        <Input
          placeholder="Search content..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          className="flex-grow"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Results</CardTitle>
        </CardHeader>
        <CardContent>
          {results.length === 0 ? (
            <p className="text-muted-foreground">No results found.</p>
          ) : (
            <ul className="list-disc pl-5 space-y-1">
              {results.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
