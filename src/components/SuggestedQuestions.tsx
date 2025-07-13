import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { questionCategories, suggestedQuestions, type SuggestedQuestion } from "@/data/careerKnowledge";
import { useState } from "react";
import { 
  FileEdit, 
  TrendingUp, 
  MessageSquare, 
  Building, 
  BookOpen, 
  Users,
  ChevronDown,
  ChevronUp
} from "lucide-react";

interface SuggestedQuestionsProps {
  onQuestionSelect: (question: string) => void;
}

export const SuggestedQuestions = ({ onQuestionSelect }: SuggestedQuestionsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['resume']));

  const iconMap = {
    FileEdit,
    TrendingUp,
    MessageSquare,
    Building,
    BookOpen,
    Users
  };

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const getQuestionsForCategory = (categoryId: string) => {
    return suggestedQuestions.filter(q => q.category === categoryId);
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Start with a Suggested Question
        </h3>
        <p className="text-sm text-muted-foreground">
          Choose from our curated questions or ask anything about your career
        </p>
      </div>

      <div className="grid gap-3">
        {questionCategories.map((category) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap];
          const isExpanded = expandedCategories.has(category.id);
          const questions = getQuestionsForCategory(category.id);

          return (
            <Card key={category.id} className="border border-border/50 shadow-soft">
              <CardHeader 
                className="pb-3 cursor-pointer hover:bg-muted/50 transition-colors rounded-t-lg"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${category.color} shadow-soft`}>
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <CardTitle className="text-base">{category.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {questions.length}
                    </Badge>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </CardHeader>

              {isExpanded && (
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {questions.map((question) => (
                      <Button
                        key={question.id}
                        variant="ghost"
                        className="w-full text-left justify-start h-auto p-3 text-sm font-normal hover:bg-muted/70 transition-all duration-200"
                        onClick={() => onQuestionSelect(question.question)}
                      >
                        <div className="text-left">
                          <div className="text-foreground line-clamp-2">
                            {question.question}
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {question.tags.slice(0, 3).map((tag) => (
                              <Badge 
                                key={tag} 
                                variant="outline" 
                                className="text-xs px-2 py-0 bg-background/50"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>

      <div className="text-center pt-4">
        <p className="text-xs text-muted-foreground">
          Can't find what you're looking for? Feel free to ask any career-related question!
        </p>
      </div>
    </div>
  );
};