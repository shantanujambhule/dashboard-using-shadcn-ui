"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [username, setUsername] = useState("Shantanu");

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Manage your display preferences</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <Label htmlFor="darkMode" className="cursor-pointer">
            Dark Mode
          </Label>
          <Switch
            id="darkMode"
            checked={darkMode}
            onCheckedChange={(checked) => setDarkMode(!!checked)}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Email notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <Label htmlFor="emailNotifications" className="cursor-pointer">
            Email Notifications
          </Label>
          <Switch
            id="emailNotifications"
            checked={emailNotifications}
            onCheckedChange={(checked) => setEmailNotifications(!!checked)}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your username</CardDescription>
        </CardHeader>
        <CardContent>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1"
          />
        </CardContent>
      </Card>
    </div>
  );
}
