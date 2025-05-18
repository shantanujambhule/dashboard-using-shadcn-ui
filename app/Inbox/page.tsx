// app/(dashboard)/inbox/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { MessageSquare, Mail } from "lucide-react";

const messages = [
  {
    id: "1",
    sender: "Alice Johnson",
    subject: "Invoice #12345",
    preview: "Hi, just wanted to follow up on the invoice I sent last week...",
    time: "2h ago",
    unread: true,
  },
  {
    id: "2",
    sender: "Mark Benson",
    subject: "Meeting Notes",
    preview: "Attached are the notes from our meeting yesterday...",
    time: "5h ago",
    unread: false,
  },
  {
    id: "3",
    sender: "Support",
    subject: "Ticket Update",
    preview: "Your request has been received and we're looking into it.",
    time: "1d ago",
    unread: false,
  },
  {
    id: "4",
    sender: "Nora White",
    subject: "Project Feedback",
    preview: "Hey, I reviewed the document. Here's some feedback...",
    time: "2d ago",
    unread: true,
  },
];

export default function InboxPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Mail className="w-6 h-6" />
          Inbox
        </h1>
        <Input placeholder="Search messages..." className="w-64" />
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Message List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Messages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-2 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-3 border rounded-md transition hover:bg-accent cursor-pointer ${
                    msg.unread ? "border-primary" : "border-border"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{msg.sender}</p>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <p className="text-sm font-semibold">{msg.subject}</p>
                  <p className="text-xs text-muted-foreground truncate">{msg.preview}</p>
                  {msg.unread && <Badge className="mt-2">Unread</Badge>}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Message Preview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Message Preview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>Select a message to view its content.</p>
            <div className="rounded-md border p-4 bg-muted text-muted-foreground text-sm">
              Placeholder for dynamic message content.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
