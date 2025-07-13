import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ChatMessage } from "@/components/ChatMessage";
import { SuggestedQuestions } from "@/components/SuggestedQuestions";
import { getRAGResponse } from "@/data/careerKnowledge";
import { Send, Mic, Loader2 } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

export const Assistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: `Hello! I'm your AI Career Assistant, powered by an advanced knowledge base of career best practices and industry insights.

**I can help you with:**
• Resume optimization and ATS strategies
• Career development and growth planning
• Interview preparation and techniques
• Industry trends and skill requirements
• Learning paths and certifications
• Professional networking strategies

**Getting Started:**
Choose from the suggested questions below, or feel free to ask me anything about your career journey. I'm here to provide personalized, actionable advice based on the latest industry standards and proven strategies.

What would you like to discuss about your career today?`,
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const response = getRAGResponse(content);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuestionSelect = (question: string) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
          {/* Suggested Questions Panel */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card className="sticky top-24 bg-card/80 backdrop-blur-md border-border/50 shadow-glass">
              <CardContent className="p-6">
                <SuggestedQuestions onQuestionSelect={handleQuestionSelect} />
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card className="bg-card/80 backdrop-blur-md border-border/50 shadow-glass h-[calc(100vh-12rem)]">
              <CardContent className="p-0 flex flex-col h-full">
                {/* Chat Header */}
                <div className="p-6 border-b border-border/50 bg-gradient-primary rounded-t-lg">
                  <h1 className="text-2xl font-bold text-primary-foreground mb-2">
                    AI Career Assistant
                  </h1>
                  <p className="text-primary-foreground/80">
                    Powered by advanced RAG technology and industry expertise
                  </p>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start mb-6">
                      <div className="flex items-start space-x-3 max-w-4xl">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Loader2 className="h-4 w-4 text-primary-foreground animate-spin" />
                        </div>
                        <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-4 py-3 shadow-soft">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                            </div>
                            <span className="text-sm text-muted-foreground">AI is thinking...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-6 border-t border-border/50 bg-muted/30">
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 relative">
                      <Input
                        ref={inputRef}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask me anything about your career..."
                        className="pr-12 bg-background border-border/50 focus:border-primary transition-colors"
                        disabled={isTyping}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
                        disabled
                      >
                        <Mic className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      onClick={() => handleSendMessage(inputMessage)}
                      disabled={!inputMessage.trim() || isTyping}
                      variant="gradient"
                      size="icon"
                      className="h-10 w-10 shadow-elegant hover:shadow-glow"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 text-center">
                    Press Enter to send • Shift+Enter for new line
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};