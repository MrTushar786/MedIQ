import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Key, ExternalLink, Shield, AlertTriangle } from "lucide-react";

interface ApiKeyInputProps {
  onApiKeySet: (apiKey: string) => void;
  onBack: () => void;
}

export const ApiKeyInput = ({ onApiKeySet, onBack }: ApiKeyInputProps) => {
  const [apiKey, setApiKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!apiKey.trim()) {
      return;
    }

    setIsLoading(true);
    
    // Simple validation - just check if it looks like a valid API key
    if (apiKey.trim().length < 10) {
      setIsLoading(false);
      return;
    }

    // Store in localStorage for convenience (note: this is not secure for production)
    localStorage.setItem('gemini_api_key', apiKey.trim());
    
    onApiKeySet(apiKey.trim());
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-chat flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Key className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Setup Required</h1>
          <p className="text-muted-foreground mt-2">
            Enter your Gemini API key to start chatting with the medical assistant
          </p>
        </div>

        {/* API Key Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Gemini API Key</span>
            </CardTitle>
            <CardDescription>
              Your API key is stored locally and used only for this chat session.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="apiKey">API Key</Label>
                <Input
                  id="apiKey"
                  type="password"
                  placeholder="Enter your Gemini API key..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading || !apiKey.trim()}
              >
                {isLoading ? "Connecting..." : "Start Chatting"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="border-primary/20">
          <CardContent className="p-4 space-y-4">
            <h3 className="font-semibold text-foreground flex items-center space-x-2">
              <ExternalLink className="h-4 w-4" />
              <span>How to get your API key:</span>
            </h3>
            
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <span className="font-medium text-primary">1.</span>
                <span>
                  Visit{" "}
                  <a 
                    href="https://aistudio.google.com/app/apikey" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google AI Studio
                  </a>
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium text-primary">2.</span>
                <span>Sign in with your Google account</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium text-primary">3.</span>
                <span>Click "Create API Key" and copy it</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-medium text-primary">4.</span>
                <span>Paste the key above to start chatting</span>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <Card className="border-medical-warning/30">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-medical-warning mt-0.5 flex-shrink-0" />
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Privacy & Security</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• Your API key is stored locally in your browser</p>
                  <p>• Conversations are not stored on our servers</p>
                  <p>• For production use, consider using Supabase integration</p>
                  <p>• Never share your API key with others</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};