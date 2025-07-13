import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  FileText, 
  Target, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle,
  Star,
  Zap
} from "lucide-react";

interface AnalysisResult {
  overallScore: number;
  sections: {
    keywords: { score: number; found: string[]; missing: string[]; };
    structure: { score: number; issues: string[]; strengths: string[]; };
    experience: { score: number; highlights: string[]; suggestions: string[]; };
    skills: { score: number; technical: string[]; soft: string[]; recommendations: string[]; };
  };
  improvements: string[];
  strengths: string[];
}

export const ResumeMatcher = () => {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalysis = async () => {
    if (!resumeText.trim() || !jobDescription.trim()) return;

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockAnalysis: AnalysisResult = {
        overallScore: 78,
        sections: {
          keywords: {
            score: 72,
            found: ["JavaScript", "React", "Node.js", "APIs", "Agile"],
            missing: ["TypeScript", "GraphQL", "AWS", "Docker"]
          },
          structure: {
            score: 85,
            issues: ["Missing quantified achievements in 2 positions", "Contact information could be more prominent"],
            strengths: ["Clear section organization", "Appropriate length", "Professional formatting"]
          },
          experience: {
            score: 80,
            highlights: ["5+ years relevant experience", "Leadership roles demonstrated", "Progressive career growth"],
            suggestions: ["Add more specific metrics to achievements", "Include technologies used in each role", "Highlight problem-solving examples"]
          },
          skills: {
            score: 75,
            technical: ["JavaScript", "React", "Node.js", "MongoDB", "Git"],
            soft: ["Leadership", "Communication", "Problem-solving"],
            recommendations: ["Add TypeScript to stay current", "Include cloud platforms experience", "Mention DevOps tools"]
          }
        },
        improvements: [
          "Add TypeScript, GraphQL, and AWS to your skills section",
          "Quantify your achievements with specific numbers and percentages",
          "Include more keywords from the job description naturally throughout",
          "Add a projects section showcasing relevant work",
          "Emphasize leadership and mentoring experience more prominently"
        ],
        strengths: [
          "Strong technical foundation in required technologies",
          "Clear progression of responsibilities and growth",
          "Good balance of technical and leadership skills",
          "Relevant industry experience",
          "Professional presentation and formatting"
        ]
      };

      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-orange-500";
    return "text-red-500";
  };

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 80) return "default";
    if (score >= 60) return "secondary";
    return "destructive";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Resume Matcher
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant, AI-powered analysis of how well your resume matches any job description. 
            Receive detailed insights and actionable recommendations to improve your application success rate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Resume Input */}
          <Card className="bg-card/80 backdrop-blur-md border-border/50 shadow-glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-primary" />
                <span>Your Resume</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-border/50 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Upload your resume or paste the text below
                  </p>
                  <Button variant="outline" className="mt-2" disabled>
                    Upload File (Coming Soon)
                  </Button>
                </div>
                <Textarea
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  placeholder="Paste your resume text here..."
                  className="min-h-[300px] bg-background/50"
                />
              </div>
            </CardContent>
          </Card>

          {/* Job Description Input */}
          <Card className="bg-card/80 backdrop-blur-md border-border/50 shadow-glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <span>Job Description</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description you're applying for..."
                className="min-h-[400px] bg-background/50"
              />
            </CardContent>
          </Card>
        </div>

        {/* Analyze Button */}
        <div className="text-center mb-8">
          <Button
            onClick={handleAnalysis}
            disabled={!resumeText.trim() || !jobDescription.trim() || isAnalyzing}
            variant="hero"
            size="xl"
            className="relative"
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                Analyzing...
              </>
            ) : (
              <>
                <Zap className="h-5 w-5 mr-2" />
                Analyze Match
              </>
            )}
          </Button>
        </div>

        {/* Analysis Results */}
        {analysis && (
          <Card className="bg-card/80 backdrop-blur-md border-border/50 shadow-glass">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Analysis Results</CardTitle>
                <div className="flex items-center space-x-4">
                  <Badge variant={getScoreBadgeVariant(analysis.overallScore)} className="text-lg px-4 py-2">
                    {analysis.overallScore}% Match
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="keywords">Keywords</TabsTrigger>
                  <TabsTrigger value="structure">Structure</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Score Breakdown */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Score Breakdown</h3>
                      <div className="space-y-4">
                        {Object.entries(analysis.sections).map(([key, section]) => (
                          <div key={key} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="capitalize font-medium">{key}</span>
                              <span className={`font-semibold ${getScoreColor(section.score)}`}>
                                {section.score}%
                              </span>
                            </div>
                            <Progress value={section.score} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Overall Assessment */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Overall Assessment</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span className="font-medium text-green-800">Strengths</span>
                          </div>
                          <ul className="text-sm text-green-700 space-y-1">
                            {analysis.strengths.slice(0, 3).map((strength, index) => (
                              <li key={index}>• {strength}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <AlertCircle className="h-5 w-5 text-orange-600" />
                            <span className="font-medium text-orange-800">Top Improvements</span>
                          </div>
                          <ul className="text-sm text-orange-700 space-y-1">
                            {analysis.improvements.slice(0, 3).map((improvement, index) => (
                              <li key={index}>• {improvement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="keywords" className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>Found Keywords</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {analysis.sections.keywords.found.map((keyword) => (
                          <Badge key={keyword} variant="default" className="bg-green-100 text-green-800">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                        <AlertCircle className="h-5 w-5 text-orange-600" />
                        <span>Missing Keywords</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {analysis.sections.keywords.missing.map((keyword) => (
                          <Badge key={keyword} variant="outline" className="border-orange-300 text-orange-700">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="structure" className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-green-600">Strengths</h3>
                      <ul className="space-y-2">
                        {analysis.sections.structure.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-orange-600">Areas for Improvement</h3>
                      <ul className="space-y-2">
                        {analysis.sections.structure.issues.map((issue, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="experience" className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-green-600">Highlights</h3>
                      <ul className="space-y-2">
                        {analysis.sections.experience.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Star className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-600">Suggestions</h3>
                      <ul className="space-y-2">
                        {analysis.sections.experience.suggestions.map((suggestion, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="skills" className="space-y-6 mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {analysis.sections.skills.technical.map((skill) => (
                          <Badge key={skill} variant="default">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Soft Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {analysis.sections.skills.soft.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-600">Recommended Additions</h3>
                      <ul className="space-y-2">
                        {analysis.sections.skills.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};