import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BrainCircuit, User, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatContent = (content: string) => {
    // Simple markdown-like formatting
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('**') && line.endsWith('**')) {
          return (
            <div key={index} className="font-semibold text-foreground mt-4 mb-2">
              {line.slice(2, -2)}
            </div>
          );
        }
        if (line.startsWith('• ')) {
          return (
            <div key={index} className="ml-4 text-muted-foreground">
              {line}
            </div>
          );
        }
        if (line.trim() === '') {
          return <div key={index} className="h-2"></div>;
        }
        return (
          <div key={index} className="text-muted-foreground leading-relaxed">
            {line}
          </div>
        );
      });
  };

  if (message.sender === "user") {
    return (
      <div className="flex justify-end mb-6">
        <div className="flex items-start space-x-3 max-w-3xl">
          <div className="bg-gradient-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 shadow-elegant">
            <div className="whitespace-pre-wrap">{message.content}</div>
            <div className="text-xs text-primary-foreground/70 mt-2">
              {formatTime(message.timestamp)}
            </div>
          </div>
          <Avatar className="w-8 h-8 bg-gradient-primary">
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-6">
      <div className="flex items-start space-x-3 max-w-4xl">
        <Avatar className="w-8 h-8 bg-gradient-primary">
          <AvatarFallback className="bg-primary text-primary-foreground text-sm">
            <BrainCircuit className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
        <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-4 py-3 shadow-soft">
          <div className="prose prose-sm max-w-none">
            {formatContent(message.content)}
          </div>
          <div className="flex items-center justify-between mt-3 pt-2 border-t border-border/50">
            <div className="text-xs text-muted-foreground">
              {formatTime(message.timestamp)}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-6 px-2 text-xs hover:bg-muted"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3 mr-1" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3 mr-1" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};