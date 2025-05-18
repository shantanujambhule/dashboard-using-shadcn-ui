"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const events = {
  "2025-05-10": [{ id: 1, title: "Team Meeting at 10am" }],
  "2025-05-12": [{ id: 2, title: "Project Deadline" }],
  "2025-05-15": [{ id: 3, title: "Client Call" }],
};

export default function CalendarPage() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);

  const formattedSelectedDay = selectedDay
    ? selectedDay.toISOString().split("T")[0]
    : null;

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Calendar</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calendar */}
        <Card>
          <CardHeader>
            <CardTitle>Select a Day</CardTitle>
          </CardHeader>
          <CardContent>
            <DayPicker
              mode="single"
              selected={selectedDay}
              onSelect={setSelectedDay}
              footer={
                selectedDay ? (
                  <p className="mt-2 text-sm text-muted-foreground">
                    You selected:{" "}
                    <span className="font-semibold">{selectedDay.toDateString()}</span>
                  </p>
                ) : (
                  <p className="mt-2 text-sm text-muted-foreground">
                    Please select a day.
                  </p>
                )
              }
            />
          </CardContent>
        </Card>

        {/* Event List */}
        <Card>
          <CardHeader>
            <CardTitle>Events</CardTitle>
          </CardHeader>
          <CardContent>
            {formattedSelectedDay && events[formattedSelectedDay]?.length ? (
              <ul className="list-disc pl-5 space-y-2">
                {events[formattedSelectedDay].map((event) => (
                  <li key={event.id} className="text-sm">
                    {event.title}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground text-sm">
                No events for the selected day.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
